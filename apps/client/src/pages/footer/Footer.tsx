import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import { GridStyle, H3Style, LinkStyle, ParaStyle } from "./FooterStyles";

type Props = {};

export default function Footer({}: Props) {
  return (
    <section className="bg-[#f7f7f7] dark:bg-gray-950">
      <div className={GridStyle}>
        <div className="capitalize">
          <h3 className={H3Style}>Our Menu</h3>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;pizza
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;burger
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;chicken
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;pasta
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;and more...
          </Link>
        </div>

        <div className="capitalize">
          <h3 className={H3Style}>quick links</h3>
          <Link className={LinkStyle} to="#home">
            <ArrowRightIcon className="size-6" />
            &nbsp;home
          </Link>
          <Link className={LinkStyle} to="#about">
            <ArrowRightIcon className="size-6" />
            &nbsp;about
          </Link>
          <Link className={LinkStyle} to="#popular">
            <ArrowRightIcon className="size-6" />
            &nbsp;popular
          </Link>
          <Link className={LinkStyle} to="#menu">
            <ArrowRightIcon className="size-6" />
            &nbsp;menu
          </Link>
          <Link className={LinkStyle} to="#order">
            <ArrowRightIcon className="size-6" />
            &nbsp;order
          </Link>
          <Link className={LinkStyle} to="#blogs">
            <ArrowRightIcon className="size-6" />
            &nbsp;blogs
          </Link>
        </div>
        <div className="capitalize">
          <h3 className={H3Style}>extra links</h3>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;my order
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;my account
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;my favorite
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;terms of use
          </Link>
          <Link className={LinkStyle} to="#">
            <ArrowRightIcon className="size-6" />
            &nbsp;privary policy
          </Link>
        </div>

        <div className="capitalize">
          <h3 className={H3Style}>opening hours</h3>
          <p className={ParaStyle}>
            monday : 7:00 AM to 10:00 PM
          </p>
          <p className={ParaStyle}>
            tuesday : 7:00 AM to 10:00 PM
          </p>
          <p className={ParaStyle}>
            wednesday : 7:00 AM to 10:00 PM
          </p>
          <p className={ParaStyle}>
            friday : 7:00 AM to 10:00 PM
          </p>
          <p className={`${ParaStyle} text-red-400!`}>
            saturday and sunday closed
          </p>
        </div>
      </div>

      <div className="pt-4 text-center">
        <div className="share">
          <Link className={LinkStyle} to="#"></Link>
          <Link className={LinkStyle} to="#"></Link>
          <Link className={LinkStyle} to="#"></Link>
          <Link className={LinkStyle} to="#"></Link>
          <Link className={LinkStyle} to="#"></Link>
        </div>

        <div className="text-[2rem] text-black p-4 dark:text-[#f7f7f7]">
          {" "}
          &copy; 2026 <span className="text-(--background-hover)">Darshan</span> | all
          rights reserved!{" "}
        </div>
      </div>
    </section>
  );
}
