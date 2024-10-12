import Link from "next/link";
import useDropdown from "../../../hooks/useDropdown";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import SignInOutLink from "../../../components/SignInOutLink/SignInOutLink";

const StyledNav = styled.nav`
  background-color: #fff !important;
  padding: 0 !important;
  .nav-item:hover > .dropdown-menu.bsb-zoomIn {
    right: -40px !important;
    top: 25px !important;
  }
  @media (max-width: 767px) {
    .nav-item:hover > .dropdown-menu.bsb-zoomIn {
      right: -20px !important;
    }
  }
`;

const StyledLink = styled(Link)`
  &:after {
    vertical-align: baseline !important;
  }
  &:before {
    content: '';
    position: relative !important;
    border: none !important;
    font-family: "Font Awesome 5 Free";
    background: url('/Assets/profile.svg') no-repeat center !important;
    display: inline-block !important;
    width: 15px !important;
    height: 15px !important;
    vertical-align: middle;
  }
  color: rgb(0 0 0 / 65%);
`;

const StyledUnOrderedList = styled.ul`
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
`;

export default function LoginButton() {
  const { isOpenDropDown, toggleDropdown } = useDropdown();
  const { data: session, status } = useSession(); // Get session status

  console.log("Session:", session); // Debug session
  console.log("Status:", status); // Debug status

  return (
    <>
      <StyledNav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
        <StyledUnOrderedList>
          <li className="nav-item dropdown">
            <StyledLink
              onClick={toggleDropdown}
              aria-expanded={isOpenDropDown}
              className="nav-link dropdown-toggle drop_down_anchor"
              href="#"
              id="accountDropdown"
              role="button"
              data-bs-toggle="dropdown"
            ></StyledLink>
            <ul
              className="dropdown-menu border-0 shadow bsb-zoomIn"
              aria-labelledby="accountDropdown"
            >
              {/* Loading state while session is being fetched */}
              {status === "loading" ? (
                <li className="dropdown-item">Loading...</li>
              ) : (
                <SignInOutLink session={session} />
              )}
              <li>
                <a className="dropdown-item" href="/sign-up">Sign up</a>
              </li>
            </ul>
          </li>
        </StyledUnOrderedList>
      </StyledNav>
    </>
  );
}
