import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes bsb-zoomIn {
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover > .dropdown-menu.bsb-zoomIn,
  .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover > .dropdown-menu.show.bsb-zoomIn {
    display: block;
    opacity: 1;
    animation: bsb-zoomIn 0.5s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;