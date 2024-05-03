// import React from "react";

function AutoPlayVideoCard(props) {
  return (
    <div>
      <div
        className=" z-10 flex justify-center items-center bg-accent w-[200px] h-[300px] rounded border-4 border-secondary"
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => e.target.pause()}
      >
        <video
          // ref={videoRef}
          className="object-cover w-full h-full"
          loop
          muted
          playsInline
          poster={props.poster}
        >
          <source src={props.video} type="video/MP4" />
        </video>
      </div>
    </div>
  );
}

export default AutoPlayVideoCard;
