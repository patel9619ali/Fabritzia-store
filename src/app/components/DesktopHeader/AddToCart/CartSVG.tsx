import Link from "next/link";
import  styled  from "styled-components";

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
           <StyledSVG className="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" width={20} height={20}>
                <g><path d="M13.3,5H6.7V3.7c0-1.1,0.9-2,2-2h2.7c1.1,0,2,0.9,2,2V5z M7.7,4h4.7V3.7c0-0.6-0.4-1-1-1H8.7c-0.6,0-1,0.4-1,1V4z"></path></g>
                <StyledPath className="st0" d="M15.7,5.2H4.3v12.2h11.3V5.2z M4.3,4.2h-1v1v12.2v1h1h11.3h1v-1V5.2v-1h-1H4.3z"></StyledPath>
            </StyledSVG>
        </StyledLink>
    )
}
