// app/page.tsx
import Image from 'next/image';

export default function Landing() {
  const shopeeLink = "https://s.shopee.vn/10zKbSGoo6";

  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between">
      
      {/* Header */}
      <header className="text-center pt-10 px-5">
        <h1 className="text-3xl font-bold leading-tight mb-3">
          Bánh Xe Thủ Dâm Silicon
        </h1>
        <p className="text-zinc-600">
          Siêu mềm • Kín đáo • Giao nhanh toàn quốc
        </p>
      </header>

      {/* CTA chính */}
      <div className="flex-1 flex flex-col justify-center items-center px-5 text-center">
        
        <a
          href={shopeeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md bg-black hover:bg-zinc-800 text-white py-6 rounded-3xl text-2xl font-bold active:scale-[0.97] transition-all mb-10"
        >
          🛍️ MUA NGAY
        </a>

        <div>
          <p className="font-medium mb-4">Hoặc quét QR để mua nhanh</p>
          <div className="mx-auto w-56 h-64 bg-white p-3 rounded-2xl shadow-sm border">
            <Image
              src="/images/qr.png"
              alt="QR Code mua hàng"
              width={200}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-zinc-400 pb-6">
        © 2026 Shop TikTok
      </footer>
    </main>
  );
}
