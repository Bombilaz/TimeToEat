import styled from "styled-components";
import Image from "next/future/image";

export const Container = styled('div')`
    background-color: #fffef2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 85vh;
    transition: 1.5s ease-in-out;
    position: relative;

    @media screen and (max-width: 575px) {
      padding: 200px 0px;
      height: 500px;
      padding-right: 7px;
      justify-content: center;
    }
`

export const Pizza = styled(Image)`
    width: 40vw;
    height: 40vw;
`

export const StartButton = styled(Image)`
  z-index: 1;
  cursor: pointer;
  position: absolute; 
  top: 51%;
  left: 50%;
    width: 5vw;
  height: 5vw;
  transform: translate(-50%, -51%);
`