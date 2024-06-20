import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //Find all users except mine
    const filteredUser = await User.find({
      _id: {
        $ne: loggedInUserId,
      },
    }).select("-password");

    return res.status(200).json(filteredUser);
  } catch (error) {
    console.error("getUsersForSidebar error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
