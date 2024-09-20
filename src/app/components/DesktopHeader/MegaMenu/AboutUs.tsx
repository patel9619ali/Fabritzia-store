import Link from "next/link";

type Props = {
  className: string;
};
export default function AboutUS({className}:Props){
    return(
        <Link className={className} href="/about-us">
          About Us
        </Link>
    )
}
