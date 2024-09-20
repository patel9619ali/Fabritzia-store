import Link from "next/link";
import styled from "styled-components";
const StyledLink = styled(Link)`
color: #000;
text-decoration: none;
&:hover{
color: #000;
text-decoration: none;
}
`;
export default function LoginButton(){
    return(
        <StyledLink className='' href="/login-password">
           Sign in
        </StyledLink>
    )
}
