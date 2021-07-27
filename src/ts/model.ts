import axios from "axios";

export interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default {
  
  async getAllUsers<IUser>(): Promise<IUser[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    return response.data;
},
}