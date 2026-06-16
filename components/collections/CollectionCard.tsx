import Image from "next/image";
import Link from "next/link";
import {StaticImageData} from "next/image";



interface CollectionCardProps {
  title: string;
  category: string;
  image: string | StaticImageData;
  href?: string;
}

export default function CollectionCard({
  title,
  category,
  image,
  href = "/collections",
}: CollectionCardProps) {
  return (
    <Link
      href={href}
      className="group block"
    >
      <div className="overflow-hidden">

        {/* Image */}

        <div className="relative h-[600px] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

        </div>

        {/* Content */}

        <div className="pt-6">

          <span
            className="
              uppercase
              tracking-[0.3em]
              text-xs
              text-neutral-500
            "
          >
            {category}
          </span>

          <h3
            className="
              mt-3
              font-serif
              text-3xl
              md:text-4xl
            "
          >
            {title}
          </h3>

          <div
            className="
              mt-6
              w-0
              h-px
              bg-black
              transition-all
              duration-500
              group-hover:w-full
            "
          />

        </div>

      </div>
    </Link>
  );
}