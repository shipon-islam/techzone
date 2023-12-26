"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

export default function UploadProduct() {
  const handleCompelete = async (res: any) => {
    const imgArray = res?.map((img: any) => ({
      url: img.url,
      key: img.key,
    }));
    const apiRes = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify(imgArray),
    });
    const data = await apiRes.json();
    if (data) toast.success("picture uploaded successfuly");
  };
  return (
    <div className="w-[14rem] mx-auto">
      <UploadDropzone
        className="border-2  border-gray-200 "
        endpoint="product"
        onClientUploadComplete={handleCompelete}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
