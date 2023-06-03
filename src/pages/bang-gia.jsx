import React from "react";
import Image from "next/image";
export default function banggia() {
  return (
    <main className="bg-[#efc2f133]">
      <h1 className="text-center font-bold text-2xl py-5">BẢNG GIÁ</h1>
      <section className="container mx-auto border-[1px] border-mautim px-4 py-4 mb-10">
        <h2 className="text-center py-4 font-bold text-xl text-mautim">
          CHĂM SÓC THÚ CƯNG
        </h2>
        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, key) => {
            return (
              <li className="flex justify-between items-center pb-4 mb-4 border-b-[1px] border-b-mautim">
                <div className="flex justify-start items-center">
                  <Image src={require("@/assets/img/foot_icon.png")} alt="" />
                  <span className="font-medium text-lg ml-2">
                    Tắm gội cho thú cưng
                  </span>
                </div>
                <span className="font-bold text-red-600">100.000đ</span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
