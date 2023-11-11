import React from 'react';

export default function PostComment(props) {
    const {inputValue, handlePostComment}=props;
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill={inputValue ? "#99C14D" : "#666666"}
    onClick={inputValue ? handlePostComment : () => {}}
  >
    <defs></defs>
    <g
      id="Group_2312"
      data-name="Group 2312"
      transform="translate(-188.002 -426)"
    >
      <path
        className="svg-c1"
        id="Subtraction_3"
        d="M20 40a20.005 20.005 0 0 1-7.783-38.428 20.005 20.005 0 0 1 15.57 36.856A19.875 19.875 0 0 1 20 40zm6.876-29.689a1.479 1.479 0 0 0-.69.175L9.212 19.36a1.471 1.471 0 0 0 0 2.607l16.976 8.873a1.451 1.451 0 0 0 1.971-.592 1.424 1.424 0 0 0-.03-1.47l-3.99-6.624a2.884 2.884 0 0 1 0-2.983l3.99-6.623a1.424 1.424 0 0 0 .03-1.471 1.485 1.485 0 0 0-1.281-.766z"
        data-name="Subtraction 3"
        transform="translate(188 426)"
      ></path>
    </g>
  </svg>
}