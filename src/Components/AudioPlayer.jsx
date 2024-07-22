import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import Audiolist from './audio/Yummy.mp3';
import Cover from './img/yummy.jpg';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const musicRef = useRef(new Audio(Audiolist));

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? musicRef.current.pause() : musicRef.current.play();
  };

  const handleRestart = () => {
    musicRef.current.currentTime = 0;
    setProgress(0);
    if (!isPlaying) {
      musicRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const currentTime = musicRef.current.currentTime;
    setProgress((currentTime / duration) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(musicRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    musicRef.current.currentTime = (newProgress / 100) * duration;
  };

  useEffect(() => {
    const audio = musicRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [duration]);

  return (
    <div className="audio-player-container">
      <div className="audio-player">
        <img src={Cover} alt="Cover" />
        <audio ref={musicRef}>
          <source src={Audiolist} type="audio/mp3" />
        </audio>
        <div className="audio-player-controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleRestart}>
            <FaRedo />
          </button>
        </div>
        <div className="audio-player-progress">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress} 
            onChange={handleProgressChange} 
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
