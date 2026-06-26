import axios from 'axios';

const API_BASE_URL = 'http://4.224.186.213/evaluation-service/notifications';

export const fetchNotifications = async (page = 1, limit = 10, type = '') => {
  try {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjc2FpbWxsdDI0MDdAZ2xiaXRtLmFjLmluIiwiZXhwIjoxNzgyNDU0OTMxLCJpYXQiOjE3ODI0NTQwMzEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJlNzkxNjAzZC02NjdiLTRlNWItYmJkNi0wODc2YWZmMzk5Y2IiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhbmlrZXQga2F1c2hhbCIsInN1YiI6ImZiYmFiNGQxLWIzMjktNDYzYi05YmJhLTdkZjYyMGYyMzliZCJ9LCJlbWFpbCI6ImNzYWltbGx0MjQwN0BnbGJpdG0uYWMuaW4iLCJuYW1lIjoiYW5pa2V0IGthdXNoYWwiLCJyb2xsTm8iOiIyNDAxOTIxNTM5MDAzIiwiYWNjZXNzQ29kZSI6Inh4a0puayIsImNsaWVudElEIjoiZmJiYWI0ZDEtYjMyOS00NjNiLTliYmEtN2RmNjIwZjIzOWJkIiwiY2xpZW50U2VjcmV0IjoicURNWkhiQVFRY1ZEbUN0ayJ9._vE6P2gioEHGvolvL4vU09AntDGgejcgV1HpUc5l58E';

    let url = `${API_BASE_URL}?page=${page}&limit=${limit}`;
    if (type) {
      url += `&notification_type=${type}`;
    }

    const response = await axios.get(url, {
      headers: {
        'Authorization': token,
        'Accept': 'application/json'
      }
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
