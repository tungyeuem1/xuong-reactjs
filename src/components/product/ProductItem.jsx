/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  return (
    <div className="bg-neutral-100 rounded-2xl">
      <div className="h-[158px]">
        <Link>
          <img
            className="object-cover w-full h-full rounded-2xl"
            src={product.thumbnail}
            alt=""
          />
        </Link>
      </div>
      <div className="px-5 py-4">
        <Link className="flex items-baseline text-sm font-medium gap-x-3 text-text-3">
          <span>{product.category}</span>
        </Link>
        <Link to={`/product-detail/${product.id}`}>
          <h3 className="mt-2 mb-1 font-semibold text-text-1">
            {product.name}
          </h3>
        </Link>
        <p className="mb-4 text-sm flex-shrink-0">{product.description}</p>
        <div className="flex items-start justify-between gap-x-5">
          {product.discount > 0 && (
            <div className="flex flex-col gap-y-1">
              <h4 className="text-sm font-semibold text-text-2">
                $ {product.discount}
              </h4>
              <span className="text-xs text-text-4">Price sale</span>
            </div>
          )}
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text-2">
              ${product.price}
            </h4>
            <span className="text-xs text-text-4">Price regular</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
