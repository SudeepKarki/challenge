"use client";
import styled from "styled-components";

export const Panels = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  background-position: center;
  transition: 400ms ease;
  position: relative;
  &.active {
    flex-grow: 5;
    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
  }
`;

export const Content = styled.div`
  position: relative;
  transition: 400ms ease;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
  color: #434343;
  font-weight: 700;
  transition: 400ms ease;
  &:first-child {
    bottom: 100%;
  }
  &:last-child {
    top: 100%;
  }
  ${Panel}.active & {
    &:first-child {
      bottom: 0;
    }
    &:last-child {
      top: 0;
    }
  }
`;
