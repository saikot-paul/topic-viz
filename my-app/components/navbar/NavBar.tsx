import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex justify-center items-center py-3 space-x-4">
      <Image
        src="/SML_logo.png"
        width={300}
        height={300}
        alt="lab logo"
      ></Image>
      <div className="text-center text-5xl">Topic Visualizer</div>
    </div>
  );
}
