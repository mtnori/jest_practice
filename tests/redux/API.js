import axios from 'axios';

export async function fetchUsers() {
  try {
    const payload = await axios.get('/users');
    return { payload };
  } catch (error) {
    return { error };
  }
}
