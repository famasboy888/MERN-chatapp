import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSockerId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    //The same as req.params.id
    const { id: receiverId } = req.params;

    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      //find participants that includes all these fields
      //$ all is mongoose syntax
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();

    //We can run promises in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCKET.IO HERE
    const receiverSocketId = getReceiverSockerId(receiverId);

    if (receiverSocketId) {
      //io.to is used to send to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      //find participants that includes all these fields
      //$ all is mongoose syntax
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages"); // This populate function will give out the actual message Object itself, not just the reference.

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    // console.log(messages);

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
