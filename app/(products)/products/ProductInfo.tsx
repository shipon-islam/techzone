"use client";
import { getCards } from "@/actions/card";
import { addCardAction } from "@/actions/product";
import DeliveryInfo from "@/components/DeliveryInfo";
import Rating from "@/components/Rating";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsHeartFill } from "react-icons/bs";
import { FaFacebookF, FaRocket, FaTwitter } from "react-icons/fa";
import { MdAccessTime, MdOutlinePayment } from "react-icons/md";
import { TbCurrencyTaka, TbTruckReturn } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProductInfo({ product }: any) {
  const { data: session, status, update } = useSession();
  const [isExistCard, setisExistCard] = useState<boolean>(false);

  const handleCard = async (productId: string) => {
    const userId = session?.user?.id;
    const addcard = await addCardAction(userId, productId);
    toast.success(addcard);
    location.reload();
  };

  // add and remove wishlist
  const handleWishlist = () => {};
  useEffect(() => {
    const getCardlist = async () => {
      const list = await getCards();
      const filterList = list.filter((item) => item.productId === product.id);
      if (filterList.length > 0) {
        setisExistCard(true);
      } else {
        setisExistCard(false);
      }
    };
    getCardlist();
  }, []);

  return (
    <section className="container">
      <div className="flex flex-col sm:flex-row justify-between py-4 px-2 border-b font-montserrat">
        <div>
          <div className="text-2xl capitalize font-semibold">
            {product.title}
          </div>
          <small className="capitalize">product id: {product.id}</small>
        </div>
        <div className="flex gap-x-3">
          <a href="#facebook">
            <FaFacebookF className=" bg-gray-300 text-slate-800 mt-1 text-4xl p-2 rounded-full hover:bg-blue-500 hover:text-gray-50" />
          </a>
          <a href="">
            <FaTwitter className=" bg-gray-300 text-slate-800 mt-1 text-4xl p-2 rounded-full hover:bg-blue-400 hover:text-gray-50" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_minmax(200px,_2fr)_260px] gap-x-6 mt-12">
        <Carousel swipeable={false} autoPlay={true}>
          {product.images.map((pic: any, index: number) => (
            <img key={index} src={pic.url} alt="product" />
          ))}
        </Carousel>

        <div>
          <div className="flex justify-between">
            <div className="text-orange-300 text-xl sm:text-2xl font-bold">
              Price:
              <span className="text-gray-500">{product.price}</span>
              <TbCurrencyTaka className="text-3xl text-gray-500 inline-block relative bottom-1" />
            </div>

            {/* <BsHeart
              onClick={handleWishlist}
              className="text-2xl cursor-pointer"
            /> */}

            <BsHeartFill
              onClick={handleWishlist}
              className="text-2xl cursor-pointer text-rose-500"
            />
          </div>
          <Rating show={true} rating={product.rating.rate} />
          <div className="my-1 capitalize font-montserrat font-bold text-slate-700">
            key features
          </div>

          <ul>
            {product.features.map((feature: string, id: number) => (
              <li
                key={id}
                className="list-disc text-[0.9rem] font-poppins mt-2 text-slate-900 "
              >
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col space-y-5">
            <button
              onClick={() => handleCard(product.id)}
              className={`${
                !isExistCard
                  ? "border-orange-300 border-2 text-orange-300 hover:bg-orange-300 hover:text-gray-50"
                  : "border-rose-500 border-2 text-rose-500 hover:bg-rose-500 hover:text-gray-100"
              } sm:mx-1 px-12 py-1 text-lg capitalize rounded-md font-bold w-[90%] sm:w-fit block mx-auto transition-colors duration-500`}
            >
              {!isExistCard ? "add to card" : "remove from card"}
            </button>

            <hr />
            <Link href={`/product/buy/${product.id}`}>
              <button
                className={`border-orange-300 block sm:w-fit w-[90%] mx-auto border-2 text-orange-300 hover:bg-orange-300 hover:text-gray-100
            sm:mx-1 px-12 py-1 text-lg capitalize rounded-md font-bold    transition-colors duration-500`}
              >
                buy now
              </button>
            </Link>
          </div>
        </div>
        <div className=" px-3">
          <DeliveryInfo
            icon={FaRocket}
            head="free delivery"
            text="For order over 10,000Tk"
          />
          <DeliveryInfo
            icon={TbTruckReturn}
            head="return in 3 days"
            text="If product have problems"
          />
          <DeliveryInfo
            icon={MdOutlinePayment}
            head="Payment security"
            text="100% payment secure"
          />
          <DeliveryInfo
            icon={MdAccessTime}
            head="sopport time"
            text="9am-9pm,every day"
          />
        </div>
      </div>
      <div>
        <h5 className="text-center font-semibold text-gray-600 text-xl capitalize py-5">
          description
        </h5>
        <hr />
        <p className="text-lg text-gray-500 capitalize py-8">
          {product.description}
        </p>
      </div>
    </section>
  );
}
