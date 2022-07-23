import axios from 'axios';

export const fetchUsers = async (url)=>{
    try { 
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        return error
    }
}