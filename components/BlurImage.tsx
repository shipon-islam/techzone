"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ image, ...rest }: any) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt="product"
      src={image}
      {...rest}
      className={`
                duration-700 ease-in-out group-hover:opacity-75
                 border-2 rounded-md w-[200px] ${
                   isLoading ? " blur-sm grayscale-8" : " blur-0 grayscale-0"
                 })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
