import axios from "axios";
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import UserAPI, { type UserAPIType } from "./api/userAPI";
import CategoriesAPI, { type CategoriesAPIType } from "./api/CategoriesAPI";
import ProductsAPI, { type ProductsAPIType } from "./api/ProductsAPI";

axios.defaults.baseURL = "http://localhost:3000/v1"

type GlobalStateType = {
  token: [string | boolean, Dispatch<SetStateAction<string | boolean>>];
  userAPI: UserAPIType;
  categoriesAPI: CategoriesAPIType;
  productsAPI: ProductsAPIType;
};

export const GlobalState = createContext<GlobalStateType | null>(null);

type Prop = {
  children: ReactNode;
};

export const DataProvider = ({ children }: Prop) => {
  const [token, setToken] = useState<string | boolean>(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.post("/user/refresh_token");

        setToken(res.data.access_token);
        setTimeout(
          () => {
            refreshToken();
          },
          10 * 60 * 1000,
        ); // 10 minutes
      };
      refreshToken();
    }
  }, []);

  const state: GlobalStateType = {
    token: [token, setToken],
    userAPI: UserAPI(token),
    categoriesAPI: CategoriesAPI(),
    productsAPI: ProductsAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
