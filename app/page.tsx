"use client";

import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          {data ? `Hi, ${data?.user?.name} 🎉` : "Next Auth Providers 🚀"}
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          The easiest way to get started is authentication by the Next-Auth. By
          Connecting with more than one different provider.
        </p>
        <ul className="my-4 space-y-3">
          <li>
            <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <span className="text-black">
                <FaGithub />
              </span>
              <span className="flex-1 ml-3 whitespace-nowrap">GitHub</span>
              {data ? (
                <span
                  className="cursor-pointer inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-black-500 bg-green-200 rounded dark:bg-green-700 dark:text-black-400"
                  onClick={() => signOut()}
                >
                  LogOut
                </span>
              ) : (
                <span
                  className="cursor-pointer inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
                  onClick={() => signIn("github")}
                >
                  Login
                </span>
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <span className="text-red-500">
                <FaGoogle />
              </span>
              <span className="flex-1 ml-3 whitespace-nowrap">Google</span>
              <span className="cursor-pointer inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-black-500 bg-green-200 rounded dark:bg-purple-900 dark:text-black-400">
                Dev Mood
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <span className="text-blue-500">
                <FaTwitter />
              </span>
              <span className="flex-1 ml-3 whitespace-nowrap">Twitter</span>
              <span className="cursor-pointer inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-black-500 bg-green-200 rounded dark:bg-purple-900 dark:text-black-400">
                Dev Mood
              </span>
            </div>
          </li>
        </ul>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
            Try and code if you love it. ❤️
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
