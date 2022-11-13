import React, {useState} from "react";

function DislikeCounter({downvotes}) {
    // console.log(upvotes);
    const [count, setCount] = useState(downvotes);
    function decrement() {
        setCount(count - 1);
    }
    return (
        <div>
        <button onClick={decrement}>{count}👎</button>
        </div>
    );
}

export default DislikeCounter;