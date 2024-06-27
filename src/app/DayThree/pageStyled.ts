"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  background-color: #fff;
  height: calc(100vh - 20px);
  margin: 10px auto;
  border-radius: 8px;
  padding: 20px;
`;

export const Heading = styled.h1<{ $color: string }>`
  color: ${(props) => (props.$color ? props.$color : "#000000")};
`;

export const Label = styled.label`
  color: black;
`;

export const ImageHolder = styled.div<{
  $spacing?: string;
  $color?: string;
  $blur?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$color ? props.$color : "#000000")};
  padding: ${(props) => (props.$spacing ? props.$spacing + "px" : "10px")};
  border-radius: 8px;
  img {
    object-fit: cover;
    width: 100%;
    height: 160px;
    border-radius: 8px;
    filter: blur(${(props) => (props.$blur ? props.$blur + "px" : "10px")});
  }
`;
