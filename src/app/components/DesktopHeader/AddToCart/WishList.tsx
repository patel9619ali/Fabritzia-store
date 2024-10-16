import Link from "next/link";
type Props = {
    className: string;
};
export default function WishList({className}:Props){
    return(
        <Link className={className} href="/apps/iwish">
           <svg className="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" width={20} height={20}>
                <g>
                    <path d="M10,17c-0.1,0-0.3-0.1-0.4-0.1l-6.8-6.8C2,9.2,1.5,8,1.5,6.7c0-1.3,0.5-2.4,1.4-3.3C3.8,2.5,5,2,6.2,2s2.4,0.5,3.3,1.4
                        L10,3.8l0.5-0.5c0.4-0.4,1-0.8,1.5-1c1.2-0.5,2.5-0.5,3.6,0c0.6,0.2,1.1,0.6,1.5,1c0,0,0,0,0,0c0.4,0.4,0.8,1,1,1.5
                        c0.2,0.6,0.4,1.2,0.4,1.8c0,0.6-0.1,1.2-0.4,1.8c-0.2,0.6-0.6,1.1-1,1.5l-6.8,6.8C10.3,16.9,10.1,17,10,17z M6.2,3
                        c-1,0-1.9,0.4-2.6,1.1C2.9,4.8,2.5,5.7,2.5,6.7c0,1,0.4,1.9,1.1,2.6l6.4,6.4l6.4-6.4C16.8,9,17,8.6,17.2,8.2
                        c0.2-0.5,0.3-0.9,0.3-1.4c0-0.5-0.1-1-0.3-1.4c-0.2-0.5-0.5-0.9-0.8-1.2l0,0c-0.3-0.3-0.8-0.6-1.2-0.8c-0.9-0.4-1.9-0.4-2.8,0
                        c-0.5,0.2-0.9,0.5-1.2,0.8l-0.8,0.8c-0.2,0.2-0.5,0.2-0.7,0L8.8,4.1C8.1,3.4,7.2,3,6.2,3z">
                    </path>
                </g>
            </svg>
               {/* if something in the wishlist is click <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg> */}
        </Link>
    )
}
