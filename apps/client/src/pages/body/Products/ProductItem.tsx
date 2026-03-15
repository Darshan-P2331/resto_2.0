import { CurrencyRupeeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import { convertToCurrency } from "../../../utils/common";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

type Props = {
  product: object;
  isAdmin: boolean;
  deleteProduct?: (id: string, public_id: string) => void;
  handleCheck?: (id: string) => void;
};

export default function ProductItem({
  product,
  isAdmin,
  deleteProduct,
  handleCheck,
}: Props) {
  return (
    <Card className="max-w-md">
      <input
        type="checkbox"
        checked={true}
        className="absolute w-5 h-5 cursor-pointer top-6 right-6 translate-y-1.5 accent-(--background-hover)"
      />
      <div className="mx-0 my-4">
        <img src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1634913509/Resto/products/eitbyncq2kb3m3lgm1qe.png" alt="" loading="lazy" />
      </div>

      <div className="content">
        <h3 className="text-[2rem] text-(--primary-text) dark:text-white">
          Title
        </h3>
        <div className="px-0 py-4 text-[1.7rem] flex items-baseline justify-self-center">
          <StarIcon className="size-6 text-[gold]" />
          &nbsp;3.5
        </div>
        <div className="text-[2rem] text-(--primary-text) flex items-center justify-self-center dark:text-white">
          {convertToCurrency(100)}
        </div>
        <div className="flex items-center justify-evenly">
          <Button as={Link} className="btn" to="#1">
            Delete
          </Button>
          <Button as={Link} className="btn" to={`/edit_product/1`}>
            Edit
          </Button>
        </div>
      </div>
    </Card>
  );
}
