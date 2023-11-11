import React from "react";
import CommnetsList from "../CommentsList/index.jsx";
import NoComment from  './../NoComment/index.jsx';

export default function CommentsResult(props) {
  const { comments, loadMoreComment, isloadingMoreComment } = props;

  return (
    <div>
      {comments.length === 0 ? (
        <NoComment />
      ) : (
        <CommnetsList
          comments={comments}
          loadMoreComment={loadMoreComment}
          isloadingMoreComment={isloadingMoreComment}
        />
      )}
    </div>
  );
}
