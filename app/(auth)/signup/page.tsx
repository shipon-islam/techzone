"use client";
import { UploadButton } from "@/lib/uploadthing";

import Link from "next/link";
import { useState } from "react";

function SignUp() {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userDetails);
    if (userDetails.avatar) {
      const response = await fetch("/api/auth/user", {
        method: "POST",
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      if (data.success && !data.data) {
        alert(data.message);
      }

      if (data) {
        alert("register successfuly");
      }
    }
  };
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [target.name]: target.value });
  };

  return (
    <div className="bg-overlay min-h-screen py-10">
      <div>
        <h1 className="capitalize text-gray-800 text-center font-bold text-2xl">
          Join Techzone Today
        </h1>
        <p className="  text-center text-red-400">Create Your Account</p>
        <form
          onSubmit={handleSubmit}
          className="bg-white w-[500px] rounded-md px-10 py-12 mx-auto mt-8 flex flex-col gap-y-8 shadow-black shadow-sm"
        >
          <input
            className="border border-gray-500 focus:outline-none rounded-md pl-2 py-2"
            type="text"
            placeholder="Enter your firstname"
            value={userDetails.firstname}
            onChange={handleChange}
            name="firstname"
            required
          />
          <input
            className="border border-gray-500 focus:outline-none rounded-md pl-2 py-2"
            type="text"
            placeholder="Enter your lastname"
            value={userDetails.lastname}
            onChange={handleChange}
            name="lastname"
            required
          />
          <input
            className="border border-gray-500 focus:outline-none rounded-md pl-2 py-2"
            type="email"
            placeholder="Enter your email"
            value={userDetails.email}
            onChange={handleChange}
            required
            name="email"
            autoComplete="true"
          />
          <input
            className="border border-gray-500 focus:outline-none rounded-md pl-2 py-2"
            type="text"
            placeholder="Enter your password"
            value={userDetails.password}
            onChange={handleChange}
            name="password"
            required
          />

          <UploadButton
            endpoint="profile"
            onClientUploadComplete={(res: any) => {
              setUserDetails({ ...userDetails, avatar: res[0].url });
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
          <button
            className="bg-green-600 px-6 py-2 capitalize rounded-md font-bold text-gray-800 hover:bg-green-400 transition-colors duration-300"
            type="submit"
          >
            register
          </button>
          <p>
            If you already have an account?
            <Link href="/login" className="text-primary pl-1">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
