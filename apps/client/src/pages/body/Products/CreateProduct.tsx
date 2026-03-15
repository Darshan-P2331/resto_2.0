import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  productSchema,
  type ProductValues,
} from "../../../utils/schema/productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input, { Select } from "../../../components/Input";
import Button from "../../../components/Button";

type Props = {};

const initialValues = {
  product_id: "",
  title: "",
  description: "",
  price: 0,
  category: "",
  image: null,
};

export default function CreateProduct({}: Props) {
  const [images, setImages] = useState<File | null | boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductValues>({
    resolver: zodResolver(productSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: ProductValues) => {};

  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <section className="w-full">
      <h3 className="pb-4 text-(--primary-text) text-[2.5rem] dark:text-white">
        Add new Product
      </h3>
      <div className="flex gap-8">
        <div className="w-full border border-[#ddd] p-3.75 m-5 relative h-112.5 flex-1">
          <input
            type="file"
            className='relative w-full h-full outline-none before:content-["+"] before:absolute before:bg-white before:w-full before:h-full before:top-0 before:left-0 before:text-(--primary-text) before:text-[17rem] before:m-auto before:cursor-pointer before:text-center dark:before:bg-gray-800 dark:before:text-gray-300'
            {...register("image")}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-white"
            style={styleUpload}
          >
            <img
              src=""
              alt=""
              loading="lazy"
              className="block object-contain"
            />
            <span className="absolute -top-3.25 -right-3.25 border border-[$ddd] rounded-[50%] py-1.5 px-2.5 cursor-pointer font-black text-red-500">
              X
            </span>
          </div>
        </div>
        <form
          className="flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
        >
          <Input
            type="text"
            id="product_id"
            placeholder="Product ID"
            register={register}
            name="product_id"
            error={errors.product_id?.message}
            disabled
          />
          <Input
            type="text"
            name="title"
            placeholder="Title"
            register={register}
            error={errors.title?.message}
          />
          <Input
            type="text"
            placeholder="Description"
            register={register}
            error={errors.description?.message}
            name="description"
          />
          <Input
            type="number"
            name="price"
            placeholder="Price"
            register={register}
            error={errors.price?.message}
          />
          <Select
            register={register}
            error={errors.category?.message}
            name="category"
          >
            <option value="">Please Select a category</option>
            <option>Option 1</option>
          </Select>

          <Button type="submit">Create</Button>
        </form>
      </div>
    </section>
  );
}
