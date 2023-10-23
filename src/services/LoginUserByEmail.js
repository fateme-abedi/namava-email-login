import axios from "axios";

const API_URL = "https://www.namava.ir/api/v1.0/accounts/login/by-email";

const PostLoginData = async (UserName, Password) => {
  try {
    const response = await axios.post(API_URL, { UserName, Password });
    console.log("res:" + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.log("err:" + error.response.data.error.message);
      throw error.response.data.error.message;
    } else {
      console.error("Unexpected error:", error);
      throw "An unexpected error occurred";
    }
  }
};

export default PostLoginData;
