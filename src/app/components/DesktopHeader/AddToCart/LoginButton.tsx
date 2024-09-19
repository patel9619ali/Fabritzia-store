import Link from "next/link";
import styled from "styled-components";
export default function LoginButton(){
    const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover{
   color: #000;
   text-decoration: none;
    }
`;
    return(
        <StyledLink className='' href="/login-password">
           Sign in
        </StyledLink>
    )
}
