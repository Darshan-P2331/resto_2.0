import axios from "axios";
import { useEffect, useState, type Dispatch } from "react";

export type UserAPIType = {
  isLogged: [boolean, Dispatch<React.SetStateAction<boolean>>];
  isAdmin: [boolean, Dispatch<React.SetStateAction<boolean>>];
  cart: [Array<any>, Dispatch<React.SetStateAction<Array<any>>>];
  user: [object, Dispatch<React.SetStateAction<object>>];
  callback: [boolean, Dispatch<React.SetStateAction<boolean>>];
  users: [Array<any>, Dispatch<React.SetStateAction<Array<any>>>];
  history: [Array<any>, Dispatch<React.SetStateAction<Array<any>>>];
};

export default function UserAPI(token: string | boolean): UserAPIType {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState<any[]>([]);
  const [history, setHistory] = useState<any[]>([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/info", {
            headers: { Authorization: token },
          });

          setIsLogged(true);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setUser(res.data);
          setCart(res.data.cart);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            alert(err.response?.data?.msg);
          } else {
            console.error(err);
          }
        }
      };
      getUser();
    }
  }, [token]);

  // const addCart = async (product) => {
  //   if (!isLogged) return alert("Please login to continue buying");

  //   const check = cart.every((item) => {
  //     return item._id !== product._id;
  //   });

  //   if (check) {
  //     setCart([...cart, { ...product, quantity: 1 }]);

  //     await axios.patch(
  //       "/user/addcart",
  //       { cart: [...cart, { ...product, quantity: 1 }] },
  //       {
  //         headers: { Authorization: token },
  //       },
  //     );
  //   } else {
  //     alert("This product has been added to cart.");
  //   }
  // };

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    // addCart: addCart,
    user: [user, setUser],
    users: [users, setUsers],
    history: [history, setHistory],
    callback: [callback, setCallback],
  };
}
