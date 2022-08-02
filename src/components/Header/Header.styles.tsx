import styled from "styled-components";

export const Container = styled('nav')`
  font-family: 'Architects Daughter', cursive;
  position: relative;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffef2;
  padding: 20px 40px;
  font-size: 6vh;
  text-transform: uppercase;
  height: 15vh;
  transition: 1.5s ease-in-out;
  
  @media screen and (max-width: 575px) {
    font-size: 1.7vh;
    height: 5vh;
    padding: 5px 10px;
  }
`

export const PagesLinks = styled('ul')`
  color: red;
  display: flex;
  list-style-type: none;
`