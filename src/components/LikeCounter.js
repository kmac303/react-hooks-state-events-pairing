import React, {useState} from "react";

function LikeCounter({upvotes}) {
    // console.log(upvotes);
    const [count, setCount] = useState(upvotes);
    function increment() {
        setCount(count + 1);
    }
    return (
        <div>
        <button onClick={increment}>{count}👍</button>
        </div>
    );
}

export default LikeCounter;