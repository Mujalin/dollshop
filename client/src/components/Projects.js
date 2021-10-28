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
              href="./Product"
              className="inline-flex  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded ">
              สั่งซื้อ
            </a>
          </p>
        </div> 
        <div className="row">
          <img src={'https://cf.shopee.co.th/file/6caa408dfb8a622095e3f341f38f820e'} alt style={{width:285, height: 250}} />
          <img src={'//th-live-05.slatic.net/p/a754aa76b30b99ae9c3d5364feb3a853.jpg_720x720q80.jpg_.webp'} alt style={{width:285, height: 250}} />
          <img src={'https://sc04.alicdn.com/kf/Ha78b736ee41b4e0ba0e5c11f3014e55cs.jpg'} alt style={{width:285, height: 250}} />
          <img src={'http://www.siamcarp.com/board/index.php?action=dlattach;topic=15218.0;attach=123818;image'} alt style={{width:285, height: 250}} />
          <img src={'http://www.siamcarp.com/board/index.php?action=dlattach;topic=15218.0;attach=123804;image'} alt style={{width:285, height: 250}} />
        </div>
      </div>
    </section>
  );
}