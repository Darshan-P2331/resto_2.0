import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  addressSchema,
  type AddressValues,
} from "../../../utils/schema/addressSchema";
import OrderSummary from "../Cart/OrderSummary";

type Props = {};

const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  pinCode: "",
};

export default function Shipping({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: AddressValues) => {};
  return (
    <div className="grid gap-6 px-6 mx-auto mt-8 md:grid-cols-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
        className="p-6 bg-white rounded-lg shadow md:col-span-2 dark:bg-gray-800"
      >
        <h2 className="text-[3rem] font-semibold mb-4 dark:text-white">
          Shipping Information
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            className="my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] w-full text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900"
            placeholder="First Name"
            {...register("firstName")}
          />
          <input
            className="my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] w-full text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900"
            placeholder="Last Name"
            {...register("lastName")}
          />
          <input
            className="col-span-2 my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] w-full text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900"
            placeholder="Address"
            {...register("address")}
          />
          <input
            className="my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] w-full text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900"
            placeholder="City"
            {...register("city")}
          />
          <input
            className="my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] w-full text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900"
            placeholder="ZIP Code"
            {...register("pinCode")}
          />
        </div>

        <button className="btn">Continue to Payment</button>
      </form>
      <OrderSummary subtotal={240} />
      {/* <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Product 1</span>
            <span>$50</span>
          </div>

          <div className="flex justify-between">
            <span>Product 2</span>
            <span>$30</span>
          </div>

          <div className="flex justify-between pt-3 font-semibold border-t">
            <span>Total</span>
            <span>$80</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
