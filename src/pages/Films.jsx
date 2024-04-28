// import React from 'react'


import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Films() {
  const styles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };
  return (
    <div>
      <Navbar />
      <div className="px-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        <div>
          <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/898290756?badge=0;autopause=0;player_id=0;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={styles}
              title="COLORGRADED R1"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className="text-secondary">
            <p>KONTROLLER VIDEO</p>
            <p>BY ASAKE</p>
          </div>
        </div>
        <div>
          <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/898290756?badge=0;autopause=0;player_id=0;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={styles}
              title="COLORGRADED R1"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className="text-secondary">
            <p>KONTROLLER VIDEO</p>
            <p>BY ASAKE</p>
          </div>
        </div>
        <div>
          <div style={{ padding: "52.73% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/898290756?badge=0;autopause=0;player_id=0;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={styles}
              title="COLORGRADED R1"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className="text-secondary">
            <p>KONTROLLER VIDEO</p>
            <p>BY ASAKE</p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Films;