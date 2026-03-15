import axios from "axios";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export type CategoriesAPIType = {
  categories: [any[], Dispatch<SetStateAction<any[]>>];
  callback: [boolean, Dispatch<SetStateAction<boolean>>];
};

export default function CategoriesAPI(): CategoriesAPIType {
  const [categories, setCategories] = useState<any[]>([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/category");
      setCategories(res.data);
    };

    getCategories();
  }, [callback]);

  return {
    categories: [categories, setCategories],
    callback: [callback, setCallback],
  };
}
