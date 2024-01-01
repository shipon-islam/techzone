import HeroSVG from "@/components/HeroSVG";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";

export default async function Home() {
  return (
    <main>
      <section className="bg-overlay h-[37rem] grid items-center relative">
        <div className="container flex justify-between items-center">
          <aside>
            <h1 className="text-5xl font-semibold text-gray-900 leading-[4rem]">
              Be The Fastest In <br /> Delivery Your Product
            </h1>
            <p className="max-w-[25rem] pt-4 pb-8">
              Best quality product is our main piority.Every customer's
              satisfaction is our main duty
            </p>
            <button className="bg-primary px-3 py-1 rounded-full font-medium flex items-center gap-x-1">
              <TbLogout />
              Get Started
            </button>
          </aside>
          <div className="hidden sm:block">
            <HeroSVG />
          </div>
        </div>
        <Image
          className="absolute bottom-10 left-0"
          src="/img/curveline.svg"
          width={150}
          height={100}
          alt="curve"
        />
      </section>
      <section className="container ">
        <div className="text-center w-[30rem] mx-auto my-14">
          <h5 className="text-primary text-sm">How it works</h5>
          <h2 className="font-bold mt-1 text-xl">What We Provide</h2>
          <p className="text-gray-700 mt-2">
            Product Quality Is Our Priority, And Always Guarantees authentic And
            Safety Until It Is In Your Hands.
          </p>
        </div>
        <div className="grid  lg:grid-cols-3 justify-center  w-[80%] mx-auto">
          <ServiceCard
            photo="/img/order.png"
            headline="Easy To Order"
            tittle="You only order through the app"
          />
          <ServiceCard
            photo="/img/delivery.png"
            headline="Fastest Delivery"
            tittle="Delivery will be on time"
          />
          <ServiceCard
            photo="/img/courier.png"
            headline="Best Quality"
            tittle="The best quality of food for you"
          />
        </div>
      </section>
      <section className="container ">
        <div className="text-center w-[30rem] mx-auto my-14">
          <h5 className="text-primary text-sm">Our Popular Products</h5>
          <h2 className="font-bold mt-1 text-xl">What We Provide</h2>
          <p className="text-gray-700 mt-2">
            Most popular and well-known product for our valuable customers. they
            are happy
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-x-12 mx-auto w-fit">
          <ProductCard
            product_url="/img/watch.png"
            tittle="Analog Watch"
            category="Watch"
            price={25}
          />
          <ProductCard
            product_url="/img/airbuds.png"
            tittle="M28 TWS"
            category="Bluetooth"
            price={15}
          />
          <ProductCard
            product_url="/img/samsung.png"
            tittle="Samsung S23 Ultra"
            category="Smartphone"
            price={900}
          />
          <ProductCard
            product_url="/img/router.png"
            tittle="Mercusys Mr30G"
            category="Router"
            price={50}
          />
        </div>
        <button className="bg-primary px-4 py-1 rounded-full mx-auto block mt-10 font-medium text-sm">
          More product
        </button>
      </section>
      <section className="mt-8 grid  sm:grid-cols-2 ">
        <aside className="grid grid-cols-2 ml-32">
          <Image
            src="/img/ledtv.png"
            width={431}
            height={187}
            alt="card"
            className="px-2 py-4 col-span-2"
          />
          <Image
            src="/img/laptop.png"
            width={208}
            height={208}
            alt="card"
            className="px-2 py-4 mx-auto"
          />
          <Image
            src="/img/oven.png"
            width={208}
            height={208}
            alt="card"
            className="px-2 py-4 mx-auto"
          />
        </aside>
        <div className="relative overflow-hidden">
          <h5 className="font-medium text-primary">What the say</h5>
          <h2 className="font-bold text-3xl w-[430px] mt-2 mb-10">
            What Our Customers Say About Us
          </h2>
          <div className=" hidden sm:flex  gap-x-8 absolute top-36 z-[100]">
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>
      <section
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.71) 100%),url(${"/img/shop_banner.jpg"})`,
        }}
        className="bg-cover bg-no-repeat h-[332px] container mt-14 rounded-lg grid place-items-center w-[90%]"
      >
        <div>
          <h2 className="text-white font-bold text-4xl text-center">
            Join our member and get <br /> discount up to 50%
          </h2>
          <button className="bg-primary px-3 py-2 rounded-full font-medium flex items-center gap-x-1 mx-auto mt-6">
            <TbLogout />
            Sign Up
          </button>
        </div>
      </section>
    </main>
  );
}
