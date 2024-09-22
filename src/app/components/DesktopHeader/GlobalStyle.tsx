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
    border: .12rem solid rgba(18, 18, 18, .3) !important;
    width: 80%!important;
  }
 
  .drop_down_anchor::after{
  content: "";
  position: relative!important;
  border: none!important;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  background: url('Assets/chevron-down-solid.svg') no-repeat center!important;
  width: 10px!important;
  height: 10px!important;
  display: inline-block!important;
  margin-left: 5px!important;
  vertical-align: middle;
  }
  .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover > .drop_down_anchor::after{
   background: url('Assets/chevron-up-solid.svg') no-repeat center!important;
    }

    @media (max-width: 767px){
      .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover > .dropdown-menu.bsb-zoomIn,
  .bsb-navbar.navbar-expand-md.bsb-navbar-hover .dropdown:hover > .dropdown-menu.show.bsb-zoomIn {
position: absolute!important;
right:0!important;
  }
    }
`;