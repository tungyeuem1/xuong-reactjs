import LayoutClient from "../layouts/LayoutClient";
import { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
import Heading from "../modules/dashboard/Heading";
import { ProductGrid } from "../components/product/ProductGrid";
import ProductItem from "../components/product/ProductItem";
import Pagination from "../components/pagination/Pagination";

const ShopPage = () => {
  const { state } = useContext(ProductContext);

  return (
    <LayoutClient>
      <div>
        <div className="relative">
          <img className="w-full" src="/public/PlaceHolder.png" alt="" />
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl font-bold">
            Shop Page
          </p>
        </div>
        <div className="relative">
          <Heading className="text-center mt-6">
            All Products: {state.products.length}
          </Heading>
          <form className="max-w-sm mx-auto absolute right-0 top-0">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected="">Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
        <div>
          <ProductGrid className="gap-y-10 mt-10">
            {state.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      
        <Pagination className="flex justify-center mt-6" />
      </div>
    </LayoutClient>
  );
};

export default ShopPage;
