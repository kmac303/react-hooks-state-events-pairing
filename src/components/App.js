import React from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo";
import HideComments from "./HideComments";

function App() {
  // console.log(video);

  return (
    <div>
      <VideoInfo video={video}/>
      <HideComments comments={video.comments}/>
    </div>
  );
}

export default App;
