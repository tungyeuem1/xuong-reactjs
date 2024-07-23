/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import LayoutDashboard from "../../../layouts/LayoutDashboard";
import Heading from "./../../../modules/dashboard/Heading";
import Button from "../../../components/button/Button";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProductContext } from "../../../contexts/ProductContext";
import api from "../../../api";

const ProductList = () => {
  const [message, setMessage] = useState(false);
  const { state, dispatch } = useContext(ProductContext);
  useEffect(() => {
    if (localStorage.getItem("success") === "true") {
      setMessage(true);
      toast.success("Successful manipulation");
    }
    setTimeout(() => {
      setMessage(false);
      localStorage.removeItem("success");
    }, 2000);
  }, []);

  const handleRemove = async (id) => {
    try {
      if (confirm("Are you sure you want to remove")) {
        await api.delete(`/products/${id}`);
        dispatch({
          type: "DELETE_PRODUCT",
          payload: id,
        });
        toast.success("Product removed successfully.");
      }
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    }
  };

  return (
    <div>
      <LayoutDashboard>
        <ToastContainer />
        <div className="flex items-center justify-between">
          <Heading className="mb-4">Product List</Heading>
          <Link to="/admin/product-form">
            <Button className="bg-primary text-slate-50">
              Add new product
            </Button>
          </Link>
        </div>
        <div className="relative mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Thumbnail
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {state.products.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">
                    <img className="w-[50px]" src={item.thumbnail} alt="" />
                  </td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.brand}</td>
                  <td>
                    <Link
                      to={`/admin/product-form/${item.id}`}
                    >
                      <button className="p-2 bg-yellow-500 rounded text-slate-50">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="p-2 ml-2 rounded bg-error text-slate-50 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LayoutDashboard>
    </div>
  );
};

export default ProductList;
