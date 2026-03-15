import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import {
  categorySchema,
  type CategoryValues,
} from "../../../utils/schema/categorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Card from "../../../components/Card";

type Props = {};

export default function Categories({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      image: null,
    },
  });
  const [image, setImage] = useState(false);

  const styleUpload = {
    display: image ? "block" : "none",
  };

  const onSubmit = (data: CategoryValues) => {};

  return (
    <section className="categories">
      <div className="heading">
        <h3 className="dark:text-white">Categories</h3>
      </div>
      <form
        className="flex p-8 mb-8 items-center rounded-lg justify-evenly bg-[#f7f7f7] dark:bg-gray-950"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
      >
        <div className="max-w-37.5 h-37.5 w-full border border-(--primary-text) p-3.75 m-5 relative dark:bg-gray-800">
          <input
            type="file"
            className="relative w-full h-full outline-none before:content-['+'] before:absolute before:inset-0 before:bg-white before:text-[#27ae60] before:text-[5rem] before:text-center before:cursor-pointer before:top-0 before:left-0 before:m-auto dark:before:bg-gray-800"
            {...register("image")}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800"
            style={styleUpload}
          >
            <img
              src=""
              alt=""
              loading="lazy"
              className="block object-contain w-full h-full"
            />
            <span className="absolute -top-3.25 -right-3.25 cursor-pointer font-black py-1.5 px-2.5 text-red-500">
              X
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-around gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Category"
              register={register}
              error={errors.name?.message}
            />
            <Button className="my-[0.7rem]! py-3.25!" type="submit">
              Create
            </Button>
          </div>
        </div>
      </form>
      <div className="grid gap-6 xs:grid-cols-2 md:grid-cols-6">
        <Card
          className="max-w-sm"
          key={1}
        >
          <img
            src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1634909100/Resto/category/w6y1vdh6avkch19vgz7v.png"
            alt=""
            loading="lazy"
            className="h-40 m-auto"
          />
          <div className="content">
            <h3 className="text-[2rem] pb-2 text-(--primary-text) dark:text-white">
              categori
            </h3>
            <div className="flex items-center justify-evenly">
              <PencilIcon className="size-6 rounded-lg cursor-pointer ml-[.3rem] text-(--background-hover)" />
              <TrashIcon className="size-6 rounded-lg cursor-pointer ml-[.3rem] text-(--danger)" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
