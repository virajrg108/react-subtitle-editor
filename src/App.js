import React from "react";
import ReactPlayer from "react-player";

import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ReactPlayer
        url="https://static.videezy.com/system/resources/previews/000/019/695/original/pointing-pink.mp4"
        playing="true"
        loop="true"
      />
    </div>
  );
}
