import axios from "axios";
import { IUser } from './types/user';

export default {
  
  async getAllUsers<IUser>(): Promise<IUser[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    return response.data;
  },
}