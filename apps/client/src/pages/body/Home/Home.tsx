import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import {
  AboutStyle,
  BannerGrid,
  CardContainerStyle,
  CardImgStyle,
  CardStyle,
  CardTitle,
  CategoryBoxStyle,
  CategoryStyle,
  CategoryTextStyle,
  ContentStyle,
  DescStyle,
  GridContent,
  GridH3,
  GridImg,
  GridItem,
  HeaderStyle,
  HomeStyles,
  IconsContainerStyle,
  IconsStyle,
  IconTextStyle,
  OrderGrid,
  OrderGridContent,
  OrderGridImg,
  OrderGridItem,
  Price,
  Ratings,
  SubHeaderStyle,
} from "./HomeStyles";

type Props = {};

export default function Home({}: Props) {
  const [animate, setAnimate] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div>
      <section
        className={HomeStyles}
        id="home"
        onMouseMove={(e) =>
          setAnimate({
            x: (window.innerWidth - e.pageX * 2) / 90,
            y: (window.innerHeight - e.pageY * 2) / 90,
          })
        }
        onMouseLeave={() => setAnimate({ x: 0, y: 0 })}
      >
        <div className={ContentStyle}>
          <span className={SubHeaderStyle}>welcome foodies</span>
          <h3 className={`${HeaderStyle} text-[4rem]`}>
            different spices for the different tastes 😋
          </h3>
          <p className={DescStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
            dolores temporibus hic quam debitis tenetur harum nemo.
          </p>
          <button className="btn" onClick={() => ref.current?.scrollIntoView()}>
            order now
          </button>
        </div>

        <div className={`${ContentStyle} mx-0 my-8 pointer-events-none`}>
          <img
            src="/images/home-img.png"
            alt=""
            className="w-full mt-20"
            loading="lazy"
          />
          <img
            src="/images/home-parallax-img.png"
            alt=""
            className="absolute w-[80vw] -top-40 -right-40 max-md:top-2 max-md:right-2 max-md:w-[130%]"
            loading="lazy"
            style={{
              transform: `translateX(${animate.y}px) translateY(${animate.x}px)`,
            }}
          />
        </div>
      </section>
      <section id="about" className={AboutStyle}>
        <div className={ContentStyle}>
          <img
            src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1635258437/Resto/about-img_gsicqy.png"
            alt=""
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className={ContentStyle}>
          <span className={`${SubHeaderStyle} font-satisfy`}>
            why choose us?
          </span>
          <h3 className={`${HeaderStyle} text-[3rem]`}>
            what's make our food delicious!
          </h3>
          <p className={DescStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
            explicabo, numquam iusto est a ipsum assumenda tempore esse
            corporis?
          </p>
          <button className="btn">read more</button>
          <div className={IconsContainerStyle}>
            <div className={IconsStyle}>
              <img
                src="/images/serv-1.png"
                alt="fast delivery"
                loading="lazy"
              />
              <h3 className={IconTextStyle}>fast delivery</h3>
            </div>
            <div className={IconsStyle}>
              <img src="/images/serv-2.png" alt="fresh food" loading="lazy" />
              <h3 className={IconTextStyle}>fresh food</h3>
            </div>
            <div className={IconsStyle}>
              <img src="/images/serv-3.png" alt="best quality" loading="lazy" />
              <h3 className={IconTextStyle}>best quality</h3>
            </div>
            <div className={IconsStyle}>
              <img src="/images/serv-4.png" alt="24/7 support" loading="lazy" />
              <h3 className={IconTextStyle}>24/7 support</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={CategoryStyle}>
        <div className={CategoryBoxStyle}>
          <img src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1634909100/Resto/category/w6y1vdh6avkch19vgz7v.png" alt="" loading="lazy" className="h-28 m-auto" />
          <h3 className={CategoryTextStyle}>All</h3>
        </div>
      </section>
      <section id="popular" ref={ref}>
        <div className="heading">
          <span>our menu</span>
          <h3>our top dishes</h3>
        </div>
        <div className={CardContainerStyle}>
          <div className={CardStyle}>
            <div className={CardImgStyle}>
              <img src="" alt="" loading="lazy" className="h-60" />
            </div>
            <div className="content">
              <h3 className={CardTitle}>Title</h3>
              <div className={Ratings}>
                <StarIcon className="size-6 text-[gold]" /> 3.5
              </div>
              <span className="text-[#666]">30</span>
            </div>
            <div className={Price}>
              <CurrencyRupeeIcon className="size-8" /> 3,500
            </div>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-950">
        <div
          className="relative bg-center bg-cover h-180"
          style={{
            background:
              "url(https://res.cloudinary.com/dhtfc36hh/image/upload/v1635258577/Resto/row-banner_dndjqm.png) center center / cover no-repeat",
          }}
        >
          <div className="absolute top-[50%] left-[7%] translate-y-[-50%]">
            <span className="font-satisfy text-[4rem] text-(--primary-text)">
              double cheese
            </span>
            <h3 className="text-[6rem] uppercase text-red-600">burger</h3>
            <p className="pb-4 text-[2rem]">with cococola and fries</p>
            <button className="btn">order now</button>
          </div>
        </div>

        <div className={BannerGrid}>
          <div className={GridItem}>
            <img
              src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1635258484/Resto/banner-1_vfzpmw.png"
              alt=""
              loading="lazy"
              className={GridImg}
            />
            <div className={GridContent}>
              <span className="text-[2.5rem] ">special offer</span>
              <h3 className={GridH3}>upto 50% off</h3>
              <button className="btn">order now</button>
            </div>
          </div>
          <div className={GridItem}>
            <img
              src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1635258512/Resto/banner-2_szj2ev.png"
              alt=""
              loading="lazy"
              className={GridImg}
            />
            <div className={`${GridContent} text-center w-full`}>
              <span className="text-[#666] text-[2.5rem]">special offer</span>
              <h3 className={`text-(--primary-text) ${GridH3}`}>
                upto 25% extra
              </h3>
              <button className="btn dark:hover:bg-(--primary-text) dark:hover:text-white">order now</button>
            </div>
          </div>
          <div className={GridItem}>
            <img
              src="https://res.cloudinary.com/dhtfc36hh/image/upload/v1635258539/Resto/banner-3_lfst56.png"
              alt=""
              loading="lazy"
              className={GridImg}
            />
            <div className={GridContent}>
              <span className="text-[2.5rem]">limited offer</span>
              <h3 className={GridH3}>100% cashback</h3>
              <button className="btn">order now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="order">
        <div className="heading">
          <span>order now</span>
          <h3 className="dark:text-white">fastest home delivery</h3>
        </div>
        <div className={OrderGrid}>
          <div className={OrderGridItem}>
            <img
              src="./images/icon-1.png"
              alt=""
              loading="lazy"
              className={OrderGridImg}
            />
            <h3 className={OrderGridContent}>
              7:00am to 10:30pm
            </h3>
          </div>

          <div className={OrderGridItem}>
            <img
              src="./images/icon-2.png"
              alt=""
              loading="lazy"
              className={OrderGridImg}
            />
            <h3 className={OrderGridContent}>
              +123-456-7890
            </h3>
          </div>

          <div className={OrderGridItem}>
            <img
              src="./images/icon-3.png"
              alt=""
              loading="lazy"
              className={OrderGridImg}
            />
            <h3 className={OrderGridContent}>
              mumbai, india - 400104
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
