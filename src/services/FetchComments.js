import axios from "axios";

const fetchComments = async (page) => {
  try {
    const response = await axios.get(
      `https://www.namava.ir/api/v1.0/comments?pi=${page}&ps=10&mediaId=140274&profileId=0`
    );

    return response?.data?.result;
  } catch (error) {
    return [];
  }
};

export default fetchComments;
