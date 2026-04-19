// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const shopeeLink = "https://s.shopee.vn/1gEnAKqvZC"; 

  const product = {
    slug: "banh-xe-thu-dam-silicon",
    name: "Bánh Xe Thủ Dâm Silicon Kín Đáo Mềm Mại",
    image: "/images/1.png",
    shortDesc: "Đồ Chơi Thư Giãn • Tập Cơ Tay • Siêu Mềm Mại",
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header đơn giản */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Shop TikTok</h1>
          <div className="text-sm text-zinc-500">Freeship • Đổi trả 30 ngày</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-md mx-auto px-4 pt-8 pb-12">
        <div className="relative rounded-3xl overflow-hidden bg-zinc-100 aspect-square mb-8 shadow-sm">
          <Image 
            src={product.image} 
            alt={product.name}
            fill 
            className="object-cover"
            priority 
          />
        </div>

        <h2 className="text-3xl font-bold leading-tight mb-3 text-center">
          {product.name}
        </h2>
        
        <p className="text-zinc-600 text-center mb-8 text-lg">
          {product.shortDesc}
        </p>

        {/* Hai nút song song */}
        <div className="grid grid-cols-2 gap-4">
          {/* Nút Xem chi tiết - Màu tím nhạt sang trọng */}
          <Link 
            href={`/san-pham/${product.slug}`}
            className="bg-violet-100 hover:bg-violet-200 active:bg-violet-300 text-violet-700 font-semibold py-5 rounded-2xl text-center transition-all text-lg flex items-center justify-center"
          >
            Xem chi tiết
          </Link>

          {/* Nút Mua ngay Shopee - Màu hồng nổi bật */}
          <a 
            href={shopeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-semibold py-5 rounded-2xl text-center transition-all text-lg flex items-center justify-center shadow-md"
          >
             Mua ngay
          </a>
        </div>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Hàng chính hãng • Giao hàng nhanh toàn quốc • Thanh toán an toàn qua Shopee
        </p>
      </div>
    </main>
  );
}