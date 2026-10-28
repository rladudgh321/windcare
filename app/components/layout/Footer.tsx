
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const serviceLinks = [
  { label: "시스템 에어컨", href: "/services/system-aircon" },
  { label: "벽걸이 에어컨", href: "/services/wall-aircon" },
  { label: "스탠드 에어컨", href: "/services/standing-aircon" },
  { label: "실외기 및 기타", href: "/services/others" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101827] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 상단 푸터 */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.6fr_1fr] lg:gap-8 lg:py-12">
          {/* 브랜드 */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-tight text-white"
            >
              SoomClean
            </Link>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              공간의 가치를 높이는 프리미엄 케어.
              <br />
              보이지 않는 곳까지 건강하게.
            </p>
          </div>

          {/* 서비스 */}
          <nav aria-label="서비스 메뉴">
            <h2 className="text-sm font-bold text-white">Service</h2>

            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 transition hover:text-sky-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 브랜드 */}
          <div>
            <h2 className="text-sm font-bold text-white">Brand</h2>
          </div>

          {/* 회사 */}
          <nav aria-label="회사 메뉴">
            <h2 className="text-sm font-bold text-white">Company</h2>

            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-xs text-slate-400 transition hover:text-sky-400"
                >
                  회사 소개
                </Link>
              </li>
            </ul>
          </nav>

          {/* 문의 및 고객센터 */}
          <div>
            <h2 className="mb-3 text-xs font-medium text-slate-400">
              CUSTOMER CENTER
            </h2>

            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Phone size={14} className="text-sky-400" />
                대표전화
              </div>

              <a
                href="tel:15227384"
                className="mt-1.5 block text-base font-bold text-white transition hover:text-sky-400"
              >
                1522-7384
              </a>

              <p className="mt-1 text-[10px] text-slate-500">
                평일 09:00 - 18:00
              </p>

              <div className="my-3 border-t border-white/10" />

              <a
                href="https://pf.kakao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
              >
                <MessageCircle size={14} className="text-yellow-400" />
                카카오톡
              </a>

              <p className="mt-2 text-xs font-semibold text-white">
                ID · 바람길케어
              </p>
            </div>
          </div>
        </div>

        {/* 하단 푸터 */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <nav
            aria-label="법적 안내"
            className="flex items-center gap-5 text-xs"
          >
            <Link
              href="/terms"
              className="text-slate-400 transition hover:text-white"
            >
              이용약관
            </Link>

            <Link
              href="/privacy"
              className="font-semibold text-white transition hover:text-sky-400"
            >
              개인정보처리방침
            </Link>
          </nav>

          <p className="text-xs text-slate-500">
            © 2026 SoomClean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
