import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky z-[999] top-0 shadow-md">
      <section className="py-2 bg-[#ebd7c3]">
        <div className="container mx-auto flex justify-between">
          <span className="font-medium">
            Giờ làm việc: Từ 08h00 đến 20h00 (Cả thứ 7 và Chủ Nhật)
          </span>
          <span className="font-medium">
            {/* 420 Phú Mỹ, Thường Thạnh, Cái Răng, Cần Thơ */}
          </span>
        </div>
      </section>
      <section className="py-2 bg-[#f5e4d2] flex justify-between">
        <div className="container mx-auto">
          <Image src={require("@/assets/img/logo.webp")} alt="logo" />
        </div>
      </section>
      <section className="bg-[#8e017e] py-3 px-8">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-white font-bold text-lg">
              Trang chủ
            </Link>
            <Link href="/bang-gia" className="text-white font-bold text-lg">
              Bảng giá
            </Link>
            <Link href="/san-pham" className="text-white font-bold text-lg">
              Sản phẩm
            </Link>
            <Link href="/dat-lich" className="text-white font-bold text-lg">
              Đặt lịch
            </Link>
            <Link href="/tin-tuc" className="text-white font-bold text-lg">
              Tin tức
            </Link>
          </nav>
        </div>
      </section>
    </header>
  );
}
