import React from 'react'

import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";

const CanvasContainer = styled.div`
  width: 98vw;
  height: 100vh;
  overflow-X: hidden;
`;
export default function New(){
  return (
    <div className='-mt-24'>
       <CanvasContainer>
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
    </div>
  )
}
