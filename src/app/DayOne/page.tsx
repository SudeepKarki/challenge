"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import { Key, KeysWrap } from "./pageStyled";

interface KeyProps {
  keyCode: number;
  keyName: string;
}

const KeyList: KeyProps[] = [
  { keyCode: 65, keyName: "A" },
  { keyCode: 83, keyName: "S" },
  { keyCode: 68, keyName: "D" },
  { keyCode: 70, keyName: "F" },
  { keyCode: 71, keyName: "G" },
  { keyCode: 72, keyName: "H" },
  { keyCode: 74, keyName: "J" },
  { keyCode: 75, keyName: "K" },
  { keyCode: 76, keyName: "L" },
];

const DayOne = () => {
  const [activeKey, setActiveKey] = useState<number | null>(null);
  const handleKeyDown = (e: KeyboardEvent) => {
    const audio = document.querySelector(
      `audio[data-key="${e.keyCode}"]`
    ) as HTMLAudioElement;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setActiveKey(e.keyCode);
  };
  useEffect(() => {
    document.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener
    );
    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };
  }, []);
  useEffect(() => {
    if (activeKey !== null) {
      const timeout = setTimeout(() => {
        setActiveKey(null);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [activeKey]);
  return (
    <>
      <KeysWrap>
        {KeyList.map(({ keyCode, keyName }) => (
          <Key
            data-key={keyCode}
            key={keyCode}
            className={activeKey === keyCode ? "playing" : ""}
          >
            <span>{keyName}</span>
          </Key>
        ))}
      </KeysWrap>
      <audio data-key="65" src={`music/1.mp3`}></audio>
      <audio data-key="83" src={`music/2.mp3`}></audio>
      <audio data-key="68" src={`music/3.mp3`}></audio>
      <audio data-key="70" src={`music/4.mp3`}></audio>
      <audio data-key="71" src={`music/5.mp3`}></audio>
      <audio data-key="72" src={`music/6.mp3`}></audio>
      <audio data-key="74" src={`music/7.mp3`}></audio>
      <audio data-key="75" src={`music/8.mp3`}></audio>
      <audio data-key="76" src={`music/9.mp3`}></audio>
    </>
  );
};

export default DayOne;
