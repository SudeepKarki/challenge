"use client";
import styled from "styled-components";

export const KeysWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #525252;
`;

export const Key = styled.div`
  display: inline-flex;
  padding: 10px 20px;
  border: 1px solid #000;
  margin: 0 10px;
  color: #fff;
  transition: 0.07ms ease;
  &.playing {
    border-color: yellow;
    transform: scale(1.1);
  }
`;
