import axios from "axios";

const API_URL = "https://www.namava.ir/api/v1.0/comments";

const PostComment = async (mediaId, rawBody, flag, mediaType) => {
  try {
    const response = await axios.post(API_URL, {
      mediaId,
      rawBody,
      flag,
      mediaType,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.log(error.response.data.error.message);
      return error.response.data.error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
};
export default PostComment;
