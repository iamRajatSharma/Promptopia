"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, signProviders } from "next-auth";

function Nav() {
//   const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="flex gap-3 md:gap-5">
        <Link href="/create-prompt" className="black_btn">
          Create Post
        </Link>

        <button type="button" onClick={signOut} className="outline_btn">
          Sign Out
        </button>

        <Link href="/profile">
          <Image
            // src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
