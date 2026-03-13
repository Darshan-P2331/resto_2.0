import axios from "axios";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { ThemeToggle } from "../../toggleTheme";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  HeaderStyle,
  LogoStyle,
  NavBarStyle,
  NavLinkStyle,
  SearchContainerStyle,
  SearchFormStyle,
  SVGStyle,
} from "./HeaderStyles";

type Props = {};

export default function Header({}: Props) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);

  const toggleMenu = () => setMenu((prev) => !prev);

  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <NavLink
          className={NavLinkStyle}
          to="/create_product"
          onClick={toggleMenu}
        >
          Create Product
        </NavLink>
        <NavLink className={NavLinkStyle} to="/category" onClick={toggleMenu}>
          Category
        </NavLink>
        <NavLink className={NavLinkStyle} to="/allorders" onClick={toggleMenu}>
          Orders
        </NavLink>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <NavLink to="/about" className={NavLinkStyle}>
          about
        </NavLink>
      </>
    );
  };
  return (
    <header className={HeaderStyle}>
      <Link to="/" className={LogoStyle}>
        {" "}
        <i className="fas fa-utensils"></i> resto.{" "}
      </Link>

      <nav className={menu ? NavBarStyle(true) : NavBarStyle(false)}>
        <NavLink to="" className={NavLinkStyle}>
          home
        </NavLink>
        {adminRouter()} {loggedRouter()}
        <NavLink to="/profile" className={NavLinkStyle}>
          Profile
        </NavLink>
      </nav>

      <div className="flex justify-between items-center">
        <Bars3Icon
          className={`${SVGStyle} hidden max-md:inline-block`}
          onClick={toggleMenu}
        />
        <Link to="/" onClick={() => setToggleSearch((prev) => !prev)}>
          <MagnifyingGlassIcon className={SVGStyle} />
        </Link>
        <Link to="/cart">
          <div className="relative inline-block">
            <ShoppingCartIcon className={`${SVGStyle}`} />
            <span className="absolute -top-4 -right-2 bg-red-500 text-white text-[10px] font-normal rounded-full px-1.25 py-0.05">
              3
            </span>
          </div>
        </Link>
        <Link to="" onClick={logoutUser} id="login-btn">
          <ArrowRightStartOnRectangleIcon className={`danger ${SVGStyle}`} />
        </Link>
        <Link to="/signin" id="login-btn" className="fas fa-user">
          <UserCircleIcon className={SVGStyle} />
        </Link>
        <ThemeToggle />
      </div>
      <section
        className={toggleSearch ? SearchContainerStyle(true): SearchContainerStyle(false)}
      >
        <form className={SearchFormStyle}>
          <input
            type="search"
            name=""
            placeholder="search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="h-full w-full text-[1.7rem] text-(--primary-text) pr-4 normal-case focus:outline-none dark:text-white"
          />
          <label htmlFor="search-box">
            <MagnifyingGlassIcon className="size-12 cursor-pointer hover:text-(--background-hover) text-(--primary-text) dark:text-white" />
          </label>
        </form>
      </section>
    </header>
  );
}
