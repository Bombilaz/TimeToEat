import styled from "styled-components";

export const Container = styled('div')`
    background-color: #fffef2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 85vh;
    transition: 1.5s ease-in-out;

    @media screen and (max-width: 575px) {
      padding: 200px 0px;
      height: 500px;
      padding-right: 7px;
      justify-content: center;
    }
`