// app/page.tsx
import Image from 'next/image';

export default function HuongDanMuaHang() {
  const shopeeLink = "https://s.shopee.vn/1gEnAKqvZC"; 

 const steps = [
    {
      number: "01",
      title: "Bấm vào nút \"Mua ngay\"",
      desc: "Trên trang sản phẩm, nhấn vào nút màu hồng \"Mua ngay\" để bắt đầu đặt hàng.",
      image: "/images/e.png"   // Bạn thay ảnh bước 1 vào đây
    },
    {
      number: "02",
      title: "Mở liên kết trong trình duyệt",
      desc: "TikTok không mở trực tiếp được link Shopee. Hãy bấm vào biểu tượng 3 chấm (...) ở góc trên bên phải.",
      image: "/images/3.png"
    },
    {
      number: "03",
      title: "Chọn \"Mở trong trình duyệt\"",
      desc: "Trong menu hiện ra, chọn \"Mở trong trình duyệt\" để chuyển sang Shopee và tiếp tục mua hàng.",
      image: "/images/4.png"
    },
    {
      number: "04",
      title: "Hoàn tất mua hàng trên Shopee",
      desc: "Chọn màu sắc, số lượng → kiểm tra thông tin → thanh toán. Sản phẩm sẽ được đóng gói kín đáo.",
      image: "/images/5.png"
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900 pb-16">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Hướng Dẫn Mua Hàng</h1>
          <div className="text-sm text-zinc-500">Shop TikTok</div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-5 pt-8 pb-10 text-center">
        <h2 className="text-3xl font-bold leading-tight mb-2">
          Bánh Xe Thủ Dâm Silicon<br />Kín Đáo Mềm Mại
        </h2>
        <p className="text-zinc-600">Đồ chơi thư giãn • Siêu mềm • Đóng gói kín đáo</p>
      </div>

      {/* Nút mua ngay lớn */}
      <div className="max-w-md mx-auto px-5 mb-12">
        <a
          href={shopeeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center py-6 rounded-3xl text-2xl font-bold shadow-lg active:scale-[0.97] transition-all"
        >
          🛒 MUA NGAY TRÊN SHOPEE
        </a>
      </div>

      {/* Các bước */}
      <div className="max-w-md mx-auto px-5 space-y-16">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-shrink-0 w-11 h-11 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center font-bold text-2xl">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold leading-tight">{step.title}</h3>
            </div>

            {/* Phần ảnh đã sửa */}
            <div className="relative rounded-3xl overflow-hidden bg-zinc-100 mb-6 shadow-sm border border-zinc-200">
              <div className="aspect-[9/19] mx-auto max-w-[280px]">
                <Image 
                  src={step.image} 
                  alt={`Bước ${step.number}`}
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
            </div>

            <p className="text-zinc-600 text-[17px] leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Phần cuối */}
      <div className="max-w-md mx-auto px-5 mt-20">
        <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 text-center">
          <p className="text-xl font-medium mb-6">Sẵn sàng mua chưa?</p>
          
          <a
            href={shopeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black hover:bg-zinc-800 text-white py-6 rounded-3xl text-2xl font-bold active:scale-[0.97] transition-all mb-8"
          >
            🛍️ MUA NGAY BÂY GIỜ
          </a>
          <div className="mb-6">
            <p className="font-medium mb-3">Hoặc quét QR để mua nhanh</p>
            <div className="mx-auto w-58 h-68 bg-white p-3 rounded-2xl shadow-sm">
              {/* Thay bằng ảnh QR thật của bạn */}
              <Image 
                src="/images/qr.png" 
                alt="QR Code mua hàng" 
                width={200} 
                height={200} 
                className="rounded-xl"
              />
            </div>
          </div>

          <p className="text-xs text-zinc-500">
            Hàng chính hãng • Đóng gói kín đáo • Giao hàng nhanh toàn quốc
          </p>
        </div>
      </div>

      <footer className="text-center text-xs text-zinc-400 mt-16 pb-10">
        © 2026 Shop TikTok • Link Bio TikTok
      </footer>
    </main>
  );
}