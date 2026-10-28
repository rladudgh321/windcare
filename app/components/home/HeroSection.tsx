
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Wind,
} from "lucide-react";

const slides = [
  {
    eyebrow: "전문가의 손길",
    title: "냉난방기 전문가",
    highlight: "바람길케어",
    description:
      "최고의 실력과 전문 장비로 에어컨을 꼼꼼하게 관리합니다.",
    image: "https://picsum.photos/seed/windcare-hero-1/1920/1080",
    imageAlt: "바람길케어 첫 번째 배경 이미지",
  },
  {
    eyebrow: "깨끗한 공간을 위한 선택",
    title: "보이지 않는 곳까지",
    highlight: "꼼꼼하게",
    description:
      "체계적인 세척 과정으로 쾌적한 실내 환경을 만들어 갑니다.",
    image: "https://picsum.photos/seed/windcare-hero-2/1920/1080",
    imageAlt: "바람길케어 두 번째 배경 이미지",
  },
  {
    eyebrow: "기업과 공간을 위한 전문 서비스",
    title: "냉난방기 관리의 기준",
    highlight: "바람길케어",
    description:
      "가정부터 사무실과 상업 공간까지 맞춤형 관리 서비스를 제공합니다.",
    image: "https://picsum.photos/seed/windcare-hero-3/1920/1080",
    imageAlt: "바람길케어 세 번째 배경 이미지",
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
      {/* 배경 이미지 슬라이드 */}
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
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent" />

      {/* 메인 카피 */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-8">
        <div
          key={activeIndex}
          className="max-w-4xl animate-[heroFadeIn_500ms_ease-out]"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <ShieldCheck size={17} className="text-sky-400" />
            {slide.eyebrow}
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
            <br />
            <span className="text-sky-400">{slide.highlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg md:text-xl md:leading-9">
            {slide.description}
          </p>

          {/* CTA 버튼 */}
          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-4 font-bold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 sm:px-8"
            >
              <Wind size={19} />
              무료 견적 상담
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-8"
            >
              서비스 알아보기
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* 보조 안내 */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-sky-400" />
              꼼꼼한 작업 과정
            </span>
            <span className="inline-flex items-center gap-2">
              <Wind size={16} className="text-sky-400" />
              공간별 맞춤 케어
            </span>
          </div>
        </div>
      </div>

      {/* 슬라이드 컨트롤 */}
      <div className="absolute bottom-8 right-5 z-20 flex items-center gap-3 sm:bottom-12 sm:right-8 lg:right-12">
        <span className="mr-2 text-sm font-semibold tabular-nums text-white/80">
          0{activeIndex + 1}
          <span className="mx-2 text-white/40">/</span>
          0{slides.length}
        </span>

        <button
          type="button"
          aria-label="이전 슬라이드"
          onClick={() => moveSlide(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          aria-label="다음 슬라이드"
          onClick={() => moveSlide(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/20 sm:h-12 sm:w-12"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-12 left-5 z-20 flex items-center gap-2 sm:left-8 lg:left-12">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={`${index + 1}번 슬라이드`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-9 bg-sky-400"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
