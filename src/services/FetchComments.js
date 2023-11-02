import axios from "axios";

const fetchComments = async (page) => {
  try {
    const response = await axios.get(
      `https://www.namava.ir/api/v1.0/comments?pi=${page}&ps=10&mediaId=140274&profileId=0`
    );
    console.log("re" + JSON.stringify(response));

    // const resultItems = response?.result;
    // if (!resultItems || resultItems.length === 0) return [];
    // console.log("ress" + JSON.stringify(resultItems));

    // return resultItems.map((comment) => ({
    //   id: comment.id,
    //   mediaId: comment.mediaId,
    //   mediaType: comment.mediaType,
    //   profileCaption: comment.profileCaption,
    //   profileAvatar:
    //     " /Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png",
    //   isAdminUser: comment.isAdminUser,
    //   createDateUTC: comment.createDateUTC,
    //   updateDateUTC: null,
    //   header: null,
    //   body: comment.body,
    //   flag: comment.flag,
    //   commentLikeDislike: {
    //     likeCount: 11,
    //     dislikeCount: 7,
    //     ownStatus: None,
    //   },
    // }));
    return response.data.result;
  } catch (error) {
    console.error(error.response.data);
    return [];
  }
};

export default fetchComments;
