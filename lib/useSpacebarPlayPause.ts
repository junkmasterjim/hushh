import { useEffect } from "react";

export function useSpacebarPlayPause() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        const playPauseButton = document.getElementById("play-pause-button");
        if (playPauseButton) {
          playPauseButton.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
