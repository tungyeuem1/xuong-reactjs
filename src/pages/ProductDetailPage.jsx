import { useParams } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import { useContext, useEffect, useState } from "react";
import Heading from "../modules/dashboard/Heading";
import Button from "../components/button/Button";
import { Label } from "flowbite-react";
import { ProductContext } from "../contexts/ProductContext";
import ProductItem from "../components/product/ProductItem";
import api from "../api";

const ProductDetailPage = () => {
  const [product, setProduct] = useState([]);
  const { state } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const relatedProducts = state.products
    .filter((p) => p.category === product.category)
    .slice(0, 3);

  return (
    <LayoutClient>
      <div>
        <div className="relative">
          <img className="w-full" src="/public/PlaceHolder.png" alt="" />
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl font-bold">
            Product Detail
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-10">
          <img
            className="rounded-xl w-full h-[380px] object-cover"
            src={product.thumbnail}
            alt=""
          />
          <div>
            <span className="text-xs text-text-4 ">
              Category: {product.category}
            </span>
            <span className="text-xs text-text-4 ml-2">
              Brand: {product.brand}
            </span>
            <Heading className="font-semibold text-[30px] mt-4">
              {product.name}
            </Heading>
            <p className="text-[#808191] mt-4">{product.description}</p>
            <div className="flex items-start my-4 gap-x-5">
              {product.discount > 0 && (
                <div className="flex flex-col gap-y-1">
                  <h4 className="text-[20px] font-semibold text-text-2">
                    $ {product.discount}
                  </h4>
                  <span className="text-xs text-text-4">Price sale</span>
                </div>
              )}
              <div className="flex flex-col gap-y-1">
                <h4 className="text-[20px] font-semibold text-text-2">
                  ${product.price}
                </h4>
                <span className="text-xs text-text-4">Price regular</span>
              </div>
            </div>
            <div className="mb-4">
              <Label>Quantity</Label>
              <input
                type="number"
                className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl mt-2 placeholder:text-text-4
                `}
                placeholder="Enter quantity..."
              />
            </div>
            <Button className="bg-primary text-neutral-50 w-full">
              Add to cart
            </Button>
          </div>
        </div>
        <div>
          <Heading className="text-[#3A1097] mt-10 mb-6">
            Related Products
          </Heading>
          <div className="grid grid-cols-3 gap-x-7  gap-y-10">
            {relatedProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </LayoutClient>
  );
};

export default ProductDetailPage;
