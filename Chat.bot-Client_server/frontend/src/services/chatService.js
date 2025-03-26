import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api/chat';

export const fetchMessages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

export const sendMessage = async (user, message) => {
  try {
    const response = await axios.post(API_URL, { user, message });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
