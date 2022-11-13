import React from "react";

function Comments({comments}) {
    console.log(comments);
    const individualComments = comments.map((comment) => {
        // const container = {};
        return (
            <>
            <ul className="comment">
                <h3>
                    {comment.user}
                </h3>
                <p>
                    {comment.comment}
                </p>
            </ul>
            </>
         )
        }
    )
    return (
       <div>
        {individualComments}
       </div>
    );
}

export default Comments;