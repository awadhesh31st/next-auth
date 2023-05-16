"use client";

import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { FaGithub, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";

const LandingPage = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="flex w-full h-screen p-0 m-0 text-black bg-white">
      <div className="container flex flex-col gap-8 mx-auto">
        <header className="flex justify-between my-4">
          <h2 className="flex items-center gap-3 font-extrabold">
            <FaHome />
            Landing Page
          </h2>
          <>
            {!data ? (
              <span className="cursor-pointer" onClick={() => signIn("github")}>
                <FaGithub />
              </span>
            ) : (
              <div className="flex items-center gap-3">
                <FaUser />
                <span className="cursor-pointer" onClick={() => signOut()}>
                  <FaSignOutAlt />
                </span>
              </div>
            )}
          </>
        </header>
        {data ? <div>Wellcome, {data?.user?.name}</div> : <div>Login</div>}
      </div>
    </div>
  );
};

export default LandingPage;
