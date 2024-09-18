import Image from "next/image";
import Link from "next/link";
type Props = {
    className: string;
};
export default function Logo({className}:Props){
    return(
        <Link className={className} href="#">
            <Image className="img-fluid" src='/Assets/fabritzia.png' alt="HeaderLogo" width={100} height={100}/>
        </Link>
    )
}