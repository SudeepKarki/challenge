"use client";
import styled from "styled-components";

export const ClockWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #525252;
`;

export const ClockFace = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  transform: translateX(-3px);

  border: 20px solid white;
  border-radius: 50%;
`;

export const Hand = styled.div<{ $angle?: number; $height?: string }>`
  width: 50%;
  height: ${(props) => (props.$height ? props.$height : "6px")};
  background-color: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(${(props) => props.$angle ?? 0}deg);
  transition: 400ms ease;
  transition-timing-function: cubic-bezier(0.01, 2.7, 0.58, 1);
`;
