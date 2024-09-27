import Link from "next/link";
import styled  from "styled-components";

const StyledSVG = styled.svg``;
const StyledPath = styled.path`
 fill-rule:evenodd;
 clip-rule:evenodd;
`;
const StyledLink = styled(Link)`
`;


type Props = {
    className: string;
};
export default function CartSVG({className}:Props){
    return(
        <StyledLink className={`${className}`} href="/cart">
           {/* <StyledSVG className="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" width={20} height={20}>
                <g><path d="M13.3,5H6.7V3.7c0-1.1,0.9-2,2-2h2.7c1.1,0,2,0.9,2,2V5z M7.7,4h4.7V3.7c0-0.6-0.4-1-1-1H8.7c-0.6,0-1,0.4-1,1V4z"></path></g>
                <StyledPath className="st0" d="M15.7,5.2H4.3v12.2h11.3V5.2z M4.3,4.2h-1v1v12.2v1h1h11.3h1v-1V5.2v-1h-1H4.3z"></StyledPath>
            </StyledSVG> */}
            <StyledSVG className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" fill="#000"  width={20} height={20}>
                <StyledPath d="M12 .1c2.9 0 4.9 1.4 4.9 3.8v.6h3.8v5.1c0 4.7 2.1 13.3.5 13.3-.7 0-5 1.1-9.2 1.1-4.6 0-9.2-1.1-9.2-1.1-1.5 0 .5-8.7.5-13.3V4.4h3.8v-.6c0-2.4 2-3.7 4.9-3.7zm7.6 5.4h-2.7v2.2h-1.1V5.5H8.2v2.2H7.1V5.5H4.4v4c0 1.3-.1 2.9-.4 5.3l-.1.9c-.4 3-.5 3.9-.5 5v1.2c.8.1 1.6.3 2.4.4 2.1.3 4.2.5 6.1.5h.5c1.6 0 3.3-.2 5.2-.5.2 0 2-.4 2.9-.5v-1.4c0-1-.2-1.9-.5-4.7 0-.3-.1-.6-.1-.9-.3-2.4-.4-4-.4-5.3v-4zM12 1.2c-2.3 0-3.8 1-3.8 2.6v.6h7.6v-.6c0-1.7-1.5-2.6-3.8-2.6z"></StyledPath>
            </StyledSVG>
        </StyledLink>
    )
}
