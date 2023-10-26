import axios from "axios";

const API_URL = "https://www.namava.ir/api/v1.0/accounts/login/by-email";

const PostLoginData = async (UserName, Password) => {
  try {
    const response = await axios.post(API_URL, { UserName, Password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      return error.response.data.error.message;
    } else {
      throw "An unexpected error occurred";
    }
  }
};

export default PostLoginData;
