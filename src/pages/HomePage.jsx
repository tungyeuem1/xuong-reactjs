import { useContext } from "react";
import LayoutClient from "../layouts/LayoutClient";
import Banner from "../modules/client/Banner";
import Heading from "../modules/dashboard/Heading";
import { ProductContext } from "../contexts/ProductContext";
import { ProductGrid } from "../components/product/ProductGrid";
import ProductItem from "../components/product/ProductItem";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { state } = useContext(ProductContext);
  return (
    <LayoutClient>
      <Banner />
      <div className="mt-10">
        <Heading className="text-[#3A1097] mb-6">New arrival</Heading>
        <ProductGrid className="gap-y-10">
          {state.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductGrid>
        <div className="flex justify-center mt-6">
          <Link to="/shop">
            <Button className=" bg-primary text-neutral-50">
              View all product
            </Button>
          </Link>
        </div>
        <Heading className="text-[#3A1097] mt-6 mb-6">Newest update</Heading>
        <div className="grid grid-cols-2 gap-x-7">
          <div>
            <img
              className="w-full"
              src="/public/unsplash_BDvCewlnbD8.png"
              alt=""
            />
            <span className="bg-[#F3EDFF] text-[#6B6B6B] p-2 rounded">
              Knowledge
            </span>
            <Heading className="mt-4">
              Instructions for setting up a very chill room for complete
              beginners
            </Heading>
          </div>
          <div className="bg-[#F3EDFF] p-8 rounded-xl flex flex-col justify-center items-center">
            <div className="flex items-center justify-center border-b-2 mb-7 border-[#E0E0E0]">
              <img src="/public/unsplash_d1Wj9qU5C-o.png" alt="" />
              <div>
                <span className="bg-[#FFFFFF] text-[#6B6B6B] p-2 rounded">
                  Knowledge
                </span>
                <Heading className="mt-4">
                  Instructions for setting up a very chill room for complete
                  beginners
                </Heading>
              </div>
            </div>
            <div className="flex items-center justify-center border-b-2 mb-7 border-[#E0E0E0]">
              <img src="/public/unsplash_9856jObeogs.png" alt="" />
              <div>
                <span className="bg-[#FFFFFF] text-[#6B6B6B] p-2 rounded">
                  Knowledge
                </span>
                <Heading className="mt-4">
                  Instructions for setting up a very chill room for complete
                  beginners
                </Heading>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img src="/public/unsplash_lVuV7AcfOrY.png" alt="" />
              <div>
                <span className="bg-[#FFFFFF] text-[#6B6B6B] p-2 rounded">
                  Knowledge
                </span>
                <Heading className="mt-4">
                  Instructions for setting up a very chill room for complete
                  beginners
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutClient>
  );
};

export default HomePage;
