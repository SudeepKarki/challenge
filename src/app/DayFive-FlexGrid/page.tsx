"use client";

import { useState } from "react";
import { Content, Panel, Panels } from "./pageStyled";
const ItemList = [
  {
    title: "Sudeep",
    sub: "Karki",
    desc: "Nepal",
    bg: "/image/f1.jpg",
  },
  {
    title: "Sudeep",
    sub: "Karki",
    desc: "Nepal",
    bg: "/image/f2.jpg",
  },
  {
    title: "Sudeep",
    sub: "Karki",
    desc: "Nepal",
    bg: "/image/f3.jpg",
  },
  {
    title: "Sudeep",
    sub: "Karki",
    desc: "Nepal",
    bg: "/image/f4.jpg",
  },
  {
    title: "Sudeep",
    sub: "Karki",
    desc: "Nepal",
    bg: "/image/f5.jpg",
  },
];

const DayFive = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const handleActive = (index: number) => {
    setIsActive(index === isActive ? null : index);
  };
  return (
    <Panels>
      {ItemList.map((item, index) => (
        <Panel
          key={index}
          style={{ backgroundImage: `url(${item.bg})` }}
          onClick={() => handleActive(index)}
          className={isActive === index ? "active" : ""}
        >
          <Content>{item.title}</Content>
          <Content>{item.sub}</Content>
          <Content>{item.desc}</Content>
        </Panel>
      ))}
    </Panels>
  );
};

export default DayFive;
