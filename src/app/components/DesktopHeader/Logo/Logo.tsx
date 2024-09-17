import Image from "next/image";
import Link from "next/link";

export default function UpperHeader(){
    return(
        <Link href="#">
            <Image className="img-fluid" src="https://www.westside.com/cdn/shop/files/w-logo.png?v=1687335574&width=210" alt="HeaderLogo" width={100} height={100}/>
        </Link>
    )
}