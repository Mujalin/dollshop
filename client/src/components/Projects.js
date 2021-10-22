import { HomeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <HomeIcon className="w-10 inline-block mb-4" />
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            welcome to my Shop
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            นี่เป็นตัวอย่างร้านค้าของเรา
            หากสนใจสั่งซื้อกดปุ่ม สั่งซื้อ ได้เลย
            <br></br>
            <br></br>
            <a
              href="/ListCom"
              className="inline-flex  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded ">
              สั่งซื้อ
            </a>
          </p>
        </div> 
      </div>
    </section>
  );
}