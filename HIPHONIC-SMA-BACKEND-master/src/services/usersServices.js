import {poolRequest,sql} from '../utils/dbConnect.js'


export const registerUserService=async()=>{

}

export const getAllUsersService=async(users)=>{
    try {
        const allUsers=await poolRequest().query(`SELECT * FROM tbl_user`)
        const {Password, ...users}=allUsers.recordset
        console.log("users",users);
        return users
    } catch (error) {
        return error
    }
}