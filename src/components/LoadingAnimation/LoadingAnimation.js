import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import lottie from "lottie-web";
import animationData from "../../services/loading.json";

export default function LoadingAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return <div ref={containerRef} className={styles.loading} />;
}
