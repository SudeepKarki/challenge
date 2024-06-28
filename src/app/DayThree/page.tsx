"use client";

import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import { Heading, ImageHolder, Label, Wrapper } from "./pageStyled";

const DayThree = () => {
  const [spacing, setSpacing] = useState("10");
  const [blur, setBlur] = useState("5");
  const [color, setColor] = useState("#000000");

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(e.target.value);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlur(e.target.value);
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <Wrapper>
      <Heading $color={color}>Sudeep Karki</Heading>

      <Label htmlFor="spacing">Spacing</Label>
      <input
        type="range"
        name="spacing"
        title="spacing"
        value={spacing}
        onChange={handleRange}
        min={0}
        max={50}
      />

      <Label htmlFor="blur">Blur</Label>
      <input
        type="range"
        name="blur"
        title="blur"
        value={blur}
        onChange={handleBlur}
        min={0}
        max={50}
      />

      <Label htmlFor="base">Base Color</Label>
      <input
        type="color"
        name="base"
        title="base"
        value={color}
        onChange={handleColor}
      />

      <ImageHolder $spacing={spacing} $color={color} $blur={blur}>
        <Image width={560} height={260} alt="" src="/image/flower.jpg" />
      </ImageHolder>
    </Wrapper>
  );
};

export default DayThree;
