// app/san-pham/[slug]/page.tsx
import ImageSlider from '../../components/ImageSlider';
import Link from 'next/link';

export default function ProductDetail() {
  const shopeeLink = "https://s.shopee.vn/1gEnAKqvZC"; 

  return (
    <main className="min-h-screen bg-white pb-12">
      {/* Header với nút quay lại */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-zinc-500 hover:text-black">← Quay lại</Link>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4">
        {/* Slide ảnh */}
        <div className="pt-6 pb-8">
          <ImageSlider />
        </div>

        {/* Thông tin sản phẩm */}
        <h1 className="text-3xl font-bold leading-tight mb-2">
          Bánh Xe Thủ Dâm Silicon Kín Đáo Mềm Mại
        </h1>
        <div className="prose text-zinc-600 mb-10">
          <p>CHÍNH HÃNG – Đồ Chơi Xả Stress Vòng Tay Bóp Đàn Hồi Cho Nam, Đồ Chơi Thư Giãn, Tập Cơ Tay, Siêu Mềm ( Tặng Kèm Quà )</p>
        </div>

        {/* Nút mua ngay lớn */}
        <a 
          href={shopeeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-black hover:bg-zinc-800 text-white text-center py-6 rounded-3xl text-2xl font-semibold active:scale-[0.98] transition-all shadow-lg"
        >
          🛒 Mua ngay trên Shopee
        </a>

        <p className="text-center text-xs text-zinc-500 mt-6">
          Link được mở từ TikTok Bio • Thanh toán an toàn qua Shopee
        </p>
      </div>
    </main>
  );
}