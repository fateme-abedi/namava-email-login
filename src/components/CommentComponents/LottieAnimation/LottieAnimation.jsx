import React, { useRef, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimation = (props) => {
  const { src, background, check, width = "20px", height = "20px" } = props;
  const playerRef = useRef();

  useEffect(() => {
    if (check) {
      playerRef.current.play();
    } else {
      playerRef.current.stop();
    }
  }, [check]);

  return (
    <Player
      ref={playerRef}
      autoplay={false}
      loop={false}
      src={src}
      keepLastFrame={true}
      direction={check ? 1 : -1}
      background={background}
      style={{ width: width, height: height }}
    />
  );
};

export default LottieAnimation;
