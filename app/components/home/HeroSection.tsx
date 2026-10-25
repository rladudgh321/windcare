
"use client";

import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    eyebrow: "전문가의 손길",
    title: "냉난방기 전문가",
    highlight: "윈드케어",
    description: "최고의 실력과 최신 장비로 최선의 결과를 만듭니다.",
    image: "/images/hero/hero-1.jpg",
  },
  {
    eyebrow: "깨끗한 공간을 위한 선택",
    title: "보이지 않는 곳까지",
    highlight: "꼼꼼하게",
    description: "체계적인 세척 과정으로 쾌적한 실내 환경을 만듭니다.",
    image: "/images/hero/hero-2.jpg",
  },
  {
    eyebrow: "기업과 공간을 위한 전문 서비스",
    title: "냉난방기 관리의 기준",
    highlight: "윈드케어",
    description: "가정부터 상업 공간까지 전문적인 관리 서비스를 제공합니다.",
    image: "/images/hero/hero-3.jpg",
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const moveSlide = (direction: number) => {
    setActiveIndex(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden bg-slate-950 md:min-h-[760px]">
      {/* 배경 이미지 */}
      {slides.map((item, index) => (
        <div
          key={item.image}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${item.image}")` }}
        />
      ))}

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

      {/* 메인 카피 */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-28 lg:px-8">
        <div
          key={activeIndex}
          className="max-w-4xl animate-[heroFadeIn_500ms_ease-out]"
        >
          <p className="mb-5 text-sm font-semibold tracking-wide text-sky-400 md:text-base">
            {slide.eyebrow}
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}{" "}
            <span className="text-sky-500">{slide.highlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-xl">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-sky-500 px-8 py-4 font-bold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              무료 견적 상담
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              서비스 알아보기
            </Link>
          </div>
        </div>
      </div>

      {/* 슬라이드 조작 버튼 */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3 md:bottom-12 md:right-12">
        <button
          type="button"
          aria-label="이전 슬라이드"
          onClick={() => moveSlide(-1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/20 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          ‹
        </button>

        <button
          type="button"
          aria-label="다음 슬라이드"
          onClick={() => moveSlide(1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/20 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          ›
        </button>
      </div>

      {/* 현재 슬라이드 표시 */}
      <div className="absolute bottom-12 left-6 z-20 flex gap-2 md:left-12">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={`${index + 1}번 슬라이드`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-sky-400"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
