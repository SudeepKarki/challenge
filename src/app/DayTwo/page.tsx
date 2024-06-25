"use client";

import { useEffect, useState } from "react";
import { ClockFace, ClockWrap, Hand } from "./pageStyled";

interface KeyProps {
  keyCode: number;
  keyName: string;
}

const DayTwo = () => {
  const [angle, setAngle] = useState({ hour: 0, minute: 0, second: 0 });
  const newDate = () => {
    const now = new Date();

    const hours = now.getHours();
    const hourAngle = (hours / 12) * 360 + 90;

    const minutes = now.getMinutes();
    const minuteAngle = (minutes / 60) * 360 + 90;

    const seconds = now.getSeconds();
    const secondAngle = (seconds / 60) * 360 + 90;

    setAngle({ hour: hourAngle, minute: minuteAngle, second: secondAngle });
  };
  useEffect(() => {
    const interval = setInterval(newDate, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ClockWrap>
      <ClockFace>
        <Hand $angle={angle.hour}></Hand>
        <Hand $angle={angle.minute}></Hand>
        <Hand $height={"2px"} $angle={angle.second}></Hand>
      </ClockFace>
    </ClockWrap>
  );
};

export default DayTwo;
