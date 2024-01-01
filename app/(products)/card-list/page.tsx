import EmptySvg from "@/components/EmptySvg";
import DeleteCard from "@/components/cardlist/DeleteCard";
import QuantityButton from "@/components/cardlist/QuantityButton";
import prisma from "@/prisma/db";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";

async function CardItems() {
  const cardlist = await prisma.cardList.findMany({
    include: {
      product: true,
    },
  });

  const totalCardAmount = cardlist.reduce((preValue, curValue) => {
    return preValue + curValue.product.price * curValue.quantity;
  }, 0);

  return (
    <main className="container pb-20">
      <div className="grid lg:grid-cols-[2fr_minmax(340px,1fr)]  grid-cols-1 gap-x-6 mt-16">
        <section className="text-gray-600">
          <div className="mx-auto max-h-[70vh] overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100 rounded-tl rounded-bl">
                    Product
                  </th>

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 hidden md:block text-sm bg-orange-100">
                    Price
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100">
                    Subtotal
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {cardlist.length > 0 &&
                  cardlist.map((card) => {
                    const { id, product, quantity } = card;
                    return (
                      <tr key={id} className="border-b">
                        <td className="w-[20rem]">
                          <div className="flex flex-col-reverse md:flex-row items-center">
                            <Image
                              width={40}
                              height={40}
                              className=" h-auto"
                              src={product.images[0]?.url}
                              alt="card"
                            />
                            <small className="text-[1rem] md:text-lg w-fit pl-4 capitalize">
                              {product.title}
                            </small>
                          </div>
                          <div className="px-4 md:hidden text-center text-md py-3 text-gray-600  ">
                            <TbCurrencyTaka className="text-xl text-gray-500 inline-block relative bottom-1" />
                            ${product.price}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex bg-gray-200/50 w-fit rounded-sm px-[2px]">
                            <QuantityButton
                              name="minus"
                              quantity={quantity}
                              id={id}
                            />
                            <p className="px-2 md:px-4 text-gray-500 font">
                              {quantity}
                            </p>

                            <QuantityButton
                              name="plus"
                              quantity={quantity}
                              id={id}
                            />
                          </div>
                        </td>
                        <td className="px-4 hidden md:table-cell text-md py-3 text-gray-600  ">
                          $ {product.price}
                        </td>
                        <td className="px-4 relative py-3 text-md text-gray-600 ">
                          <AiOutlineClose className="text-lg absolute text-gray-500 top-4 right-6 hover:text-red-500 cursor-pointer md:hidden" />
                          $ {product.price * quantity}
                        </td>
                        <td className="w-10 text-center hidden md:table-cell">
                          <DeleteCard id={id} />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {cardlist.length <= 0 && <EmptySvg />}
          </div>
          <Link
            href="/products"
            className="block w-fit mx-auto  border-orange-300 hover:bg-orange-300 hover:text-gray-600 text-orange-300 px-4 py-1 my-2 "
          >
            Continue shopping
          </Link>
        </section>
        <section className="bg-orange-400/10 w-[95%] md:w-full mx-auto h-fit  px-3 pt-8 border-2 border-orange-300 md:font-montserrat font-poppins rounded-md pb-8">
          <div>
            <h1 className="md:text-xl text-md text-gray-600  capitalize pb-4">
              card total
              <FiShoppingCart className="inline-block text-2xl  ml-2" />
            </h1>
            <hr />

            <div className="flex justify-between py-2">
              <div className="capitalize text-md md:text-lg   text-gray-500">
                subtotal:
              </div>
              <div className=" text-md text-gray-600">$ {totalCardAmount}</div>
            </div>
            <hr />
            <div>
              <h1 className="capitalize text-md md:text-lg  text-gray-500 pb-3 pt-1">
                shipping:
              </h1>
              <div className="flex justify-between py-2">
                <div className="capitalize text-md md:text-lg text-gray-500 pb-1">
                  Delivery charge
                </div>
                <div className=" text-md md:text-lg text-gray-600">${50}</div>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="capitalize text-md md:text-lg text-gray-500">
                total:
              </div>
              <div className=" text-md text-gray-600">
                $ {totalCardAmount + 50}
              </div>
            </div>
            <div className="ml-2 mt-8">
              <Link href="/">
                <button
                  className={`border-orange-300 block sm:w-fit w-[90%] mx-auto sm:ml-auto border-2 text-orange-300 hover:bg-orange-300 hover:text-gray-100
            sm:mx-1 px-12 py-1 text-md md:text-md capitalize rounded-md font-semibold   transition-colors duration-500`}
                >
                  checkout
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CardItems;
