import { getAllUsersService } from "../services/usersServices.js";

export const getAllUsersController = async (req, res) => {
    try {
      const results = await getAllUsersService()
        const users=results
        console.log("users",users);
      return res.status(200).json({ Users: users });
    } catch (error) {
      console.error("Error fetching all users:", error);
      return res.status(500).json("Internal server error");
    }
  };
  
