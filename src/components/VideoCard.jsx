import React from "react";

function VideoCard(props) {
  return (
    <>
      <div className="border-2 border-secondary flex gap-2 flex-col ">
        <div className="w-[270px] h-[300px] border-b-2 border-secondary">
          <video
            className="object-cover w-full h-full"
            loop
            muted
            playsInline
            poster={`src/assets/images/${props.image}`}
          >
            <source src={`src/assets/images/${props.video}`} type="video/MP4" />
          </video>
        </div>
        <div className="pl-2 py-2">
          <p className="text-xl capitalize text-secondary">{props.musicName}</p>
          <p className="text capitalize text-secondary">{props.Artist}</p>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
