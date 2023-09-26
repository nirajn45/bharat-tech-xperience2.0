import React from "react";
import styled from "styled-components";
import Home from "../../../Pages/Home/Home";
import Header from "../../Header/Header";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // background-color: #1756dd32;
  // display: flex;
  flex-direction: column;
  // align-items: center;
 
  z-index: 99;
`;



export function TopSection() {
  return (
    <div className="-mt-8">
    <TopSectionContainer>
      <Header/>
      <Home/>
 
    </TopSectionContainer>
    </div>
  );
}
