import React from "react";
import Image from "next/image";
export default function tintuc() {
  return (
    <main>
      <div className="container mx-auto grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <h1 className="text-left font-bold text-xl py-5">TIN TỨC</h1>
          <article>
            <div className="relative">
              <div className="block text-center rounded-[8px] overflow-hidden">
                <Image
                  src={require("@/assets/img/wallpaperflare-com-wallpaper-15.webp")}
                  alt=""
                />
              </div>
              <div className="my-0 mx-6 p-[25px] bg-white rounded-[8px] shadow-xl mt-[-70px] relative">
                <h3 className="font-bold font-[20px]">
                  Cách ít người biết để dạy mèo đi vệ sinh đúng chỗ
                </h3>
                <p className="line-clamp-2">
                  Với không ít người nuôi mèo, việc dạy cho mèo cách đi vệ sinh
                  đúng chỗ là một chuyện không hề dễ, và nếu không chú ý tới vấn
                  đề này ngay từ khi mèo còn nhỏ chúng ta sẽ phải xử lí hậu họa
                  do mèo gây tra, rất vất vả. Thời gian đầu nuôi mèo bạn sẽ cảm
                  thấy khá khó khăn với một số vấn đề của chúng, đặc biệt là
                  việc làm sao để con mèo phải biết đi vệ sinh đúng giờ và đúng
                  chỗ quy định, nếu bạn đang gặp rắc rối với vấn đề này, hãy
                  cùng Gia Đình Pet tìm hiểu kinh nghiệm dạy mèo biết đi vệ sinh
                  đúng chỗ dưới đây nhé. Chuẩn Bị Nhưng Thứ Sau Cho Mèo Đi vệ
                  Sinh Trước khi dạy mèo đi vệ sinh đúng chỗ thì các bạn nên
                  biết cách chuẩn bị những vật dụng giúp mèo vệ sinh đúng chỗ
                  hơn nữa phần này cũng hữu ích với các bạn mới nuôi mèo.
                </p>
              </div>
            </div>
          </article>
        </div>
        <aside className="col-span-4">
          <h1 className="text-left font-bold text-xl py-5">BÀI VIẾT NỔI BẬT</h1>
          <div className="flex flex-col">
            {[1, 2, 3, 4, 5].map((item, key) => {
              return (
                <div
                  className="flex justify-start items-start mb-5 pb-5 border-b-[1px] border-solid border[#ddd]"
                  key={key}
                >
                  <Image
                    className="w-52"
                    src={require("@/assets/img/wallpaperflare-com-wallpaper-4-1.webp")}
                  />
                  <span className="text-left font-bold ml-5">
                    Nguyên nhân khiến chó trở nên hung dữ
                  </span>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}
