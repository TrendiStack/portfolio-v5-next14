'use client';

import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@/stores/navigation';
import { usePathname } from 'next/navigation';

interface MusicPlayerProps {
  colour?: string;
}

const MusicPlayer = ({ colour }: MusicPlayerProps = { colour: 'dark' }) => {
  const [playing, setPlaying] = useState(false);
  const isMenuOpen = useNavigation(state => state.isMenuOpen);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const path = usePathname();

  useEffect(() => {
    const handleMusic = (e: { key: string }) => {
      if (e.key === 'p') {
        if (playing) {
          if (musicRef.current) {
            musicRef.current.pause();
          }
          setPlaying(false);
        } else {
          if (musicRef.current) {
            musicRef.current.play();
          }
          setPlaying(true);
        }
      }
    };

    const hanldeMusicOnLoad = () => {
      if (musicRef.current) {
        playing ? musicRef.current.play() : musicRef.current.pause();
      }
    };
    // Set music volume to 0.1
    if (musicRef.current) musicRef.current.volume = 0.03;
    window.addEventListener('keydown', handleMusic);
    hanldeMusicOnLoad();
    return () => {
      window.removeEventListener('keydown', handleMusic);
    };
  }, [playing]);
  return (
    <div
      className={`${
        isMenuOpen
          ? 'text-secondary'
          : path.length > 1
          ? 'text-secondary'
          : 'text-primary lg:text-secondary'
      } capitalize flex items-center gap-3 lg:text-lg text-secondarytransition-colors duration-200 ease-in-out`}
    >
      <audio
        ref={musicRef}
        src="https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/Eli+Brown+-+Be+The+One+(Official+Visualiser).mp3"
        autoPlay
        loop
      ></audio>
      <div
        className={`w-2 h-2 rounded-full ${
          playing ? 'bg-green-500' : ' bg-red-500'
        }`}
      ></div>
      <div
        onClick={() => setPlaying(!playing)}
        className={`select-none cursor-pointer animate-pulse ${
          playing ? 'animate-pulse' : ''
        }
            `}
      >
        {playing ? <BsPauseFill /> : <BsPlayFill />}
      </div>
      <p className={`${playing ? 'animate-pulse' : ''}`}>now playing . . .</p>
    </div>
  );
};

export default MusicPlayer;
