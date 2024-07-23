/* eslint-disable react-hooks/rules-of-hooks */
import { Label } from "flowbite-react";
import FormGroup from "../../../common/FormGroup";
import LayoutDashboard from "../../../layouts/LayoutDashboard";
import Heading from "../../../modules/dashboard/Heading";
import FormRow from "../../../common/FormRow";
import Button from "../../../components/button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../../validation/productValidation";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import { toast, ToastContainer } from "react-toastify";
import api from "../../../api";

const categories = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Shirt",
  },
  {
    id: 3,
    name: "Jean",
  },
];

const brands = [
  {
    id: 1,
    name: "Dior",
  },
  {
    id: 2,
    name: "Louis Vuitton",
  },
  {
    id: 3,
    name: "Chanel",
  },
];

const ProductForm = () => {
  const nav = useNavigate();
  const { dispatch } = useContext(ProductContext);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const { data } = await api.get(`/products/${id}`);
          console.log(data);
          reset(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [id, reset]);
  }

  const handleSubmitForm = async (data) => {
    try {
      if (id) {
        await api.patch(`/products/${id}`, data);

        dispatch({
          type: "EDIT_PRODUCT",
          payload: { id, ...data },
        });
        reset(data);

        toast.success("Update product successfuly");
        nav(`/admin/product-form/${id}`);
      } else {
        const res = await api.post("/products", data);

        dispatch({
          type: "ADD_PRODUCT",
          payload: res.data,
        });
        localStorage.setItem("success", "true");

        nav("/admin/products");
      }
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    }
  };

  return (
    <div>
      <LayoutDashboard>
        <ToastContainer />
        <Heading className="mb-4">
          {id ? `Edit product ` : "Add new product"}
        </Heading>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <FormRow>
            <FormGroup>
              <Label>Name</Label>
              <input
                type="text"
                className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                `}
                placeholder="Enter name..."
                {...register("name", { required: true })}
              />
              {errors.name?.message && (
                <p className="text-error">{errors.name?.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Category</Label>
              <select
                className="w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl"
                name=""
                id=""
                {...register("category", { required: true })}
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category?.message && (
                <p className="text-error">{errors.category?.message}</p>
              )}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label>Brand</Label>
              <select
                className="w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl"
                name=""
                id=""
                {...register("brand", { required: true })}
              >
                {brands.map((brand) => (
                  <option key={brand.name} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
              {errors.brand?.message && (
                <p className="text-error">{errors.brand?.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Thumbnail</Label>
              <input
                type="text"
                className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                `}
                placeholder="Enter thumbnail..."
                {...register("thumbnail", { required: true })}
              />
              {errors.thumbnail?.message && (
                <p className="text-error">{errors.thumbnail?.message}</p>
              )}
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Price</Label>
              <input
                type="number"
                className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                `}
                {...register("price", { valueAsNumber: true, required: true })}
                placeholder="Enter price..."
              />
              {errors.price?.message && (
                <p className="text-error">{errors.price?.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Discount</Label>
              <input
                type="number"
                className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                `}
                {...register("discount", { valueAsNumber: true })}
                min={0}
                placeholder="Enter discount..."
              />
              {errors.discount?.message && (
                <p className="text-error">{errors.discount?.message}</p>
              )}
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Description</Label>
            <textarea
              className="w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4"
              name=""
              id=""
              placeholder="Enter description..."
              {...register("description")}
            ></textarea>
            {errors.description?.message && (
              <p className="text-error">{errors.description?.message}</p>
            )}
          </FormGroup>
          <div className="flex mt-4">
            <Button type="submit" className="bg-primary text-slate-50">
              {id ? "Update" : "Add"}
            </Button>
            <Link to="/admin/products">
              <Button className="ml-2 mr-2 bg-secondary text-slate-50">
                Back to list
              </Button>
            </Link>
          </div>
        </form>
      </LayoutDashboard>
    </div>
  );
};

export default ProductForm;
