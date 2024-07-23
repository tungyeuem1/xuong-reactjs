/* eslint-disable no-unused-vars */
import { useContext } from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Heading from "../../modules/dashboard/Heading";
import { ProductGrid } from "./../../components/product/ProductGrid";
import ProductItem from "./../../components/product/ProductItem";
import { ProductContext } from "../../contexts/ProductContext";

const DashboardPage = () => {
  const { state } = useContext(ProductContext);
  return (
    <LayoutDashboard>
      <Heading className="mb-4">All Product</Heading>
      <ProductGrid className="gap-y-10">
        {state.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
