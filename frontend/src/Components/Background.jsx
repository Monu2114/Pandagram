import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import Login from "./login";
const BackgroundPlayer = () => {
  //   const [loginButton, setLogin] = useState(false);

  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to play the video and song
  const start = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (audioRef.current) {
      audioRef.current.play();
    }
    // navigate("/login");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="recording.mp4"
        loop
        muted
      ></video>

      {/* Audio Element */}
      <audio ref={audioRef} src="love.mp3"></audio>

      {/* Button to Play Music and Video */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <button
          onClick={start}
          className="bg-slate-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default BackgroundPlayer;
