import axios from "axios";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export type ProductsAPIType = {
  products: [any[], Dispatch<SetStateAction<any[]>>];
  callback: [boolean, Dispatch<SetStateAction<boolean>>];
  category: [string, Dispatch<SetStateAction<string>>];
  sort: [string, Dispatch<SetStateAction<string>>];
  search: [string, Dispatch<SetStateAction<string>>];
  page: [number, Dispatch<SetStateAction<number>>];
  result: [number, Dispatch<SetStateAction<number>>];
};

export default function ProductsAPI(): ProductsAPIType {
  const [products, setProducts] = useState<any[]>([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        `/products?limit=${page * 9}&${category}&${sort}&title[regex]=${search}`,
      );
      setProducts(res.data.products);
      setResult(res.data.result);
    };
    getProducts();
  }, [callback, category, sort, search, page]);

  return {
    products: [products, setProducts],
    callback: [callback, setCallback],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult],
  };
}
