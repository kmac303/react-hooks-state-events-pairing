import React from "react";
import DislikeCounter from "./DislikeCounter";
import LikeCounter from "./LikeCounter";

function Comments({video}) {
    // console.log("comments")
    return (
        <div className="App">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h2>{video.title}</h2>
            {video.views} Views | Uploaded {video.createdAt}
            <LikeCounter upvotes={video.upvotes}/>
            <DislikeCounter downvotes={video.downvotes}/>
        </div>
    );
}

export default Comments;