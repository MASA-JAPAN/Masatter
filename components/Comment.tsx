import React from "react";

export default function Comment(props: any) {
  return (
    <div>
      <div className="comment">
        <div className="commentContent">{props.comment}</div>
      </div>
      <style jsx>
        {`
          .comment {
            background: #ffffff;
            border: 1px solid #64a2db;
            box-sizing: border-box;
            box-shadow: 0px 4px 5px #000000;
            border-radius: 14px;
          }
          .commentContent {
            margin: 5px;
          }
        `}
      </style>
    </div>
  );
}
