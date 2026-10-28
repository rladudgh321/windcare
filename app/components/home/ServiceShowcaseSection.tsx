
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";


const services = [
  {
    id: "system",
    title: "시스템 에어컨",
    category: "상업시설/사무실",
    description:
      "천장형 시스템 에어컨의 필터와 내부 주요 부위를 점검하고 설치 환경에 맞춰 세척합니다.",
    image: "https://picsum.photos/seed/windcare-system/800/520",
    tags: ["천장형", "분해세척"],
    href: "/services/system-aircon",
  },
  {
    id: "standing",
    title: "스탠드 에어컨",
    category: "거실/매장",
    description:
      "거실의 중심 스탠드 에어컨, 제품 구조와 오염 상태에 맞춰 세심하게 관리합니다.",
    image: "https://picsum.photos/seed/windcare-standing/800/520",
    tags: ["스마트/인버터", "정밀세척"],
    href: "/services/standing-aircon",
  },
  {
    id: "wall",
    title: "벽걸이 에어컨",
    category: "가정/원룸/오피스텔",
    description:
      "가정이나 원룸에서 많이 사용하는 벽걸이 에어컨, 좁은 틈새의 오염까지 꼼꼼하게 관리합니다.",
    image: "https://picsum.photos/seed/windcare-wall/800/520",
    tags: ["분해세척", "곰팡이제거"],
    href: "/services/wall-aircon",
  },
  {
    id: "outdoor",
    title: "실외기 및 기타",
    category: "실외기 관리",
    description:
      "실외기 주변과 열교환기 오염을 점검하고, 냉방 효율을 위한 관리 서비스를 제공합니다.",
    image: "https://picsum.photos/seed/windcare-outdoor/800/520",
    tags: ["실외기 점검", "주변 청소"],
    href: "/services/others",
  },
];


export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 380 : -380,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between gap-5 sm:mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-sky-600 sm:text-sm">
              Total Care Solution
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              공간별 맞춤
              <br />
              <span className="text-sky-500">클리닝 서비스</span>
            </h2>
          </div>

          <div className="mb-1 flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollCards("left")}
              aria-label="이전 서비스"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-sky-400 hover:text-sky-600 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={() => scrollCards("right")}
              aria-label="다음 서비스"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-sky-400 hover:text-sky-600 sm:h-12 sm:w-12"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        {/* Horizontal cards */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
        >
          {services.map((service) => (
            <article
              key={service.id}
              className="group w-[85%] min-w-0 shrink-0 snap-start overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Link
                href={service.href}
                className="block"
                aria-label={`${service.title} 자세히 보기`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={service.image}
                    alt={`${service.title} 서비스 이미지`}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    {service.category}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="my-5 border-t border-slate-100" />

                  <div className="flex min-h-9 items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition group-hover:bg-sky-500 group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
