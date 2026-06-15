import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
}

export default function PortfolioCard({
  title,
  category,
  image,
}: PortfolioCardProps) {
  return (
    <article className="group cursor-pointer">

      {/* Image */}

      <div className="relative overflow-hidden">

        <div className="relative h-[550px]">

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

      </div>

      {/* Content */}

      <div className="pt-6">

        <span
          className="
            uppercase
            tracking-[0.35em]
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
            leading-tight
          "
        >
          {title}
        </h3>

      </div>

    </article>
  );
}