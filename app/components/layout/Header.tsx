
"use client";

import Link from "next/link";
import { useState } from "react";

const serviceLinks = [
  { label: "시스템 에어컨", href: "/services/system-aircon" },
  { label: "벽걸이 에어컨", href: "/services/wall-aircon" },
  { label: "스탠드 에어컨", href: "/services/standing-aircon" },
  { label: "실외기 및 기타", href: "/services/others" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* 로고 */}
        <Link
          href="/"
          aria-label="윈드케어 홈"
          className="shrink-0 text-2xl font-bold tracking-tight text-sky-400"
        >
          <span className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-sky-400 text-lg">
            숨
          </span>
          윈드케어
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {serviceLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-sky-400"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/about"
            className="whitespace-nowrap transition hover:text-sky-400"
          >
            회사 소개
          </Link>

          <Link
            href="/contact"
            className="whitespace-nowrap transition hover:text-sky-400"
          >
            견적 문의
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          type="button"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 text-2xl lg:hidden"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-slate-950/95 px-5 py-4 shadow-xl backdrop-blur-md lg:hidden">
          <div className="flex flex-col">
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-semibold transition hover:text-sky-400"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="py-3 font-semibold transition hover:text-sky-400"
            >
              회사 소개
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-3 font-semibold transition hover:text-sky-400"
            >
              견적 문의
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
