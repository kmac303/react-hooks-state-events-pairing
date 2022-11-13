import React, {useState} from "react";
import Comments from "./Comments";

function HideComments({comments}) {
    const [visible, setVisible] = useState(true);
  return (
    <div className="hideComments">
      <button onClick={() => setVisible(!visible)}>{visible ? 'Hide Comments' : 'Show Comments'}</button>
      {visible && <div><Comments comments={comments}/></div>}
    </div>
  );
};

export default HideComments;