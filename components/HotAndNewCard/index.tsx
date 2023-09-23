import Image from "next/image";
import Link from "next/link";
import RippleClick from "../RippleClick";
type HotAndNewCardProps = {
    image: string;
    description: string;
    title: string;
    url: string;
    classes?: {
        wrapper: string
    }
}
export default function HotAndNewCard({ image, description, title, url,classes}: HotAndNewCardProps) {
    return (
        <div className={`bg-white box-border rounded-lg  w-full overflow-hidden h-full ${classes && classes?.wrapper}`}>
            <Link href={'#'} className="p-8 lg:p-12 relative w-full h-full block ">
                <RippleClick />
                <div className="relative z-20">
                    <h3 className="text-gray-700 text-sm">{title}</h3>
                    <p className="text-lg font-semibold text-gray-900 my-2 leading-8">{description}</p>
                </div>
                <Image src={image} fill alt={title} className="!z-10 object-contain object-bottom" />
            </Link>
        </div>
    )
}




