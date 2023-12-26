"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn("credentials", {
      callbackUrl: "/",
      email,
      password,
    });
  };

  return (
    <div className="bg-black/10 min-h-screen py-8">
      <div>
        <h1 className="capitalize text-gray-800 text-center pt-8 font-bold text-2xl">
          Welcome Back to Techzone!
        </h1>
        <p className="  text-center text-red-400">
          Log in to Access Your Account
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white w-[500px] rounded-md px-10 py-16 mx-auto mt-8 flex flex-col gap-y-8 shadow-gray-800 shadow-sm"
        >
          <input
            className="border border-gray-500 focus:outline-none rounded-md pl-2 py-2"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
            autoComplete="true"
          />
          <input
            className="border border-gray-500 focus:outline-none rounded-md pl-2 py-2"
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />

          <button
            className="bg-green-600 px-6 py-2 capitalize rounded-md font-bold text-gray-800 hover:bg-green-400 transition-colors duration-300"
            type="submit"
          >
            login
          </button>
          <p>
            If you don't have an account?
            <Link className="text-primary pl-1" href="/signup">
              register
            </Link>
          </p>
        </form>
        <div className="w-fit mx-auto">
          <button
            className="flex gap-x-1 items-center px-4 py-3 bg-gray-700 capitalize rounded-md text-white my-5"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
          >
            <FaGithub className="text-xl" /> <span>signup with github</span>
          </button>
          <button
            className="flex gap-x-1 items-center px-4 py-3 bg-gray-700 capitalize rounded-md text-white"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
          >
            <FaGoogle className="text-lime-500 text-xl" />{" "}
            <span>signup with google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
