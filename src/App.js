import React from "react";
import ReactPlayer from "react-player";

import "./style.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Subtitle Editor</h1>
        <ReactPlayer
          url="https://static.videezy.com/system/resources/previews/000/019/695/original/pointing-pink.mp4"
          playing="true"
          loop="false"
          width="720px"
          playIcon={<div>1</div>}
        />
      </div>
    );
  }
}
