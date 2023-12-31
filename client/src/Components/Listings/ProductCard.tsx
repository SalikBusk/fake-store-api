import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number,
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
}) => {

  return (
    <Link
      className="
        w-full 
        p-2 
        block 
        shadow-sm
        hover:shadow-md
        overflow-hidden
        h-full"
      to={`product/${id}`}
    >
      <div className="relative pb-64 overflow-hidden shadow-sm">
        <img
          className="absolute inset-0 max-h-56 w-full object-contain my-4 px-4"
          src={image}
          alt=""
        />
      </div>
      <figcaption>
        <div className="p-4 h-full flex flex-1 flex-col text-sm text-zinc-900/80">
          <div>
            <p
              className="mt-1 mb-2"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <span className="font-bold hover:text-blue-600">Brand:</span>{" "}
              {title.length > 35 ? title.slice(0, 35) + "..." : title}
            </p>
          </div>
          <div>
            <p>$ {price}</p>
          </div>
        </div>
      </figcaption>
    </Link>
  );
};

export default ProductCard;
