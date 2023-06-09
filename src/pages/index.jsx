import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>SumiPet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* banner */}
        <section>
          <Image src={require("@/assets/img/banner_index.webp")} alt="" />
        </section>

        {/* banner hinhanh */}
        <section className="container mx-auto">
          <div className="grid grid-cols-12 gap-2 my-8">
            <div className="col-span-4">
              <Image
                src={require("@/assets/img/section_home_banner1.webp")}
                alt=""
              />
            </div>
            <div className="col-span-4">
              <Image
                src={require("@/assets/img/section_home_banner2.webp")}
                alt=""
              />
            </div>
            <div className="col-span-4">
              <Image
                src={require("@/assets/img/section_home_banner3.webp")}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* san pham giam gia */}
        <section className="container mx-auto">
          <h2 className="bg-[#f0efef] text-center my-8 py-2 font-bold text-[20px] text-black">
            SẢN PHẨM GIẢM GIÁ
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item, key) => {
              return (
                <article
                  key={key}
                  className="col-span-3 flex items-start justify-start shadow-xl mb-4 p-1"
                >
                  <div className="w-[100%] pt-[200px] relative">
                    <Image
                      className="absolute top-0 left-0 height-[200px] w-[100%] bg-white align-middle"
                      src={require("@/assets/img/customizable-mug-4.webp")}
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start justify-start">
                    <a className="font-bold text-black" href="">
                      Thức ăn cho mèo vị gà tây Flower Chair
                    </a>
                    <div className="flex">
                      <span className="font-bold mautim">320.000đ</span>
                      <span className="font-medium line-through ml-2">
                        320.000đ
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* san pham cho meo */}
        <section className="container mx-auto my-10">
          <div className="bg-[#f0efef]">
            <h2 className="relative bg-mautim text-left font-bold text-[20px] text-[#fff] py-3 px-6 w-[250px] tamgiac after:border-l-mautim">
              SẢN PHẨM CHO MÈO
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <Image src={require("@/assets/img/cat.png")} alt="" />
            </div>
            <div className="col-span-9 border-l-2 border-l-[#ddd]">
              <div className="grid grid-cols-12 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="col-span-4 flex items-start justify-start"
                    >
                      <div className="">
                        <Image
                          src={require("@/assets/img/hummingbird-printed-t-shirt.webp")}
                          alt=""
                        />
                      </div>
                      <div className="mt-2">
                        <a href="">Đồ ăn mèo siêu vip</a>
                        <div className="flex">
                          <span className="font-bold text-mautim">
                            320.000đ
                          </span>
                          <span className="font-medium text-[#666] ml-1 line-through">
                            320.000đ
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* san pham cho cho */}
        <section className="container mx-auto my-10">
          <div className="bg-[#f0efef]">
            <h2 className="relative bg-[#342f5c] text-left font-bold text-[20px] text-[#fff] py-3 px-6 w-[250px] tamgiac after:border-l-[#342f5c]">
              SẢN PHẨM CHO CHÓ
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <Image src={require("@/assets/img/dog.png")} alt="" />
            </div>
            <div className="col-span-9 border-l-2 border-l-[#ddd]">
              <div className="grid grid-cols-12 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="col-span-4 flex items-start justify-start"
                    >
                      <div className="">
                        <Image
                          src={require("@/assets/img/hummingbird-printed-t-shirt.webp")}
                          alt=""
                        />
                      </div>
                      <div className="mt-2">
                        <a href="">Đồ ăn mèo siêu vip</a>
                        <div className="flex">
                          <span className="font-bold text-mautim">
                            320.000đ
                          </span>
                          <span className="font-medium text-[#666] line-through">
                            320.000đ
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* tin tuc */}
        <section className="container mx-auto my-10">
          <h2 className="bg-[#f0efef] text-center my-8 py-2 font-bold text-[20px] text-black">
            TIN TỨC
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {[1, 2, 3].map((item, key) => {
              return (
                <article key={key} className="col-span-4">
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
                        Với không ít người nuôi mèo, việc dạy cho mèo cách đi vệ
                        sinh đúng chỗ là một chuyện không hề dễ, và nếu không
                        chú ý tới vấn đề này ngay từ khi mèo còn nhỏ chúng ta sẽ
                        phải xử lí hậu họa do mèo gây tra, rất vất vả. Thời gian
                        đầu nuôi mèo bạn sẽ cảm thấy khá khó khăn với một số vấn
                        đề của chúng, đặc biệt là việc làm sao để con mèo phải
                        biết đi vệ sinh đúng giờ và đúng chỗ quy định, nếu bạn
                        đang gặp rắc rối với vấn đề này, hãy cùng Gia Đình Pet
                        tìm hiểu kinh nghiệm dạy mèo biết đi vệ sinh đúng chỗ
                        dưới đây nhé. Chuẩn Bị Nhưng Thứ Sau Cho Mèo Đi vệ Sinh
                        Trước khi dạy mèo đi vệ sinh đúng chỗ thì các bạn nên
                        biết cách chuẩn bị những vật dụng giúp mèo vệ sinh đúng
                        chỗ hơn nữa phần này cũng hữu ích với các bạn mới nuôi
                        mèo.
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
