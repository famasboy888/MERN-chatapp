import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=Scott"
              alt="chat-bubble"
            />
          </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">
          Supp! You can see me!
        </div>
        <div className="chat-footer text-xs opacity-50 flex gap-1 items-center text-white">
          12:42
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=Scott"
              alt="chat-bubble"
            />
          </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">
          Supp! You can see me!
        </div>
        <div className="chat-footer text-xs opacity-50 flex gap-1 items-center text-white">
          12:42
        </div>
      </div>
    </>
  );
};

export default Message;
