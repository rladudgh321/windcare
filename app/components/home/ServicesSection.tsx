
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Wind,
  Snowflake,
  Fan,
  Settings,
} from "lucide-react";

const services = [
  {
    id: "system",
    title: "시스템 에어컨",
    subtitle: "System Air Conditioner",
    description:
      "천장형 시스템 에어컨의 내부 오염을 확인하고 주요 부품을 분해하여 세척하는 서비스입니다.",
    image: "https://picsum.photos/seed/windcare-system/900/650",
    icon: Wind,
    features: [
      "천장형 에어컨 분해 세척",
      "필터 및 열교환기 오염 관리",
      "세척 후 조립 및 작동 확인",
    ],
    href: "/services/system-aircon",
  },
  {
    id: "wall",
    title: "벽걸이 에어컨",
    subtitle: "Wall-mounted Air Conditioner",
    description:
      "가정과 사무실에서 사용하는 벽걸이 에어컨을 점검하고 내부 오염을 관리합니다.",
    image: "https://picsum.photos/seed/windcare-wall/900/650",
    icon: Snowflake,
    features: [
      "제품 상태 및 오염도 확인",
      "필터와 내부 주요 부위 세척",
      "주변 오염 방지 및 마무리",
    ],
    href: "/services/wall-aircon",
  },
  {
    id: "standing",
    title: "스탠드 에어컨",
    subtitle: "Standing Air Conditioner",
    description:
      "거실과 사무실에 설치된 스탠드형 에어컨의 구조와 상태에 맞춰 세척을 진행합니다.",
    image: "https://picsum.photos/seed/windcare-standing/900/650",
    icon: Fan,
    features: [
      "제품 구조 및 오염 상태 점검",
      "분리 가능한 부품 세척",
      "조립 후 작동 상태 확인",
    ],
    href: "/services/standing-aircon",
  },
  {
    id: "etc",
    title: "실외기 및 기타",
    subtitle: "Outdoor Unit & Others",
    description:
      "실외기와 기타 냉방 설비의 상태를 확인하고 설치 환경에 맞는 관리 방법을 안내합니다.",
    image: "https://picsum.photos/seed/windcare-outdoor/900/650",
    icon: Settings,
    features: [
      "실외기 주변 및 상태 점검",
      "접근 가능한 부위의 오염 관리",
      "현장 조건에 따른 작업 안내",
    ],
    href: "/services/others",
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);

  const activeService =
    services.find((service) => service.id === activeId) ?? services[0];

  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            공간과 제품에 맞는
            <br className="sm:hidden" /> 에어컨 케어
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500">
            제품의 종류와 설치 환경을 고려해 필요한 세척 서비스를 안내합니다.
          </p>
        </div>

        {/* Service category tabs */}
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeId === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                aria-pressed={isActive}
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-4 text-sm font-bold transition sm:text-base ${
                  isActive
                    ? "border-sky-600 bg-sky-600 text-white shadow-lg shadow-sky-600/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50"
                }`}
              >
                <Icon size={19} />
                {service.title}
              </button>
            );
          })}
        </div>

        {/* Selected service */}
        <div
          className="grid overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-sm lg:grid-cols-2"
          key={activeService.id}
        >
          <div className="relative min-h-[280px] sm:min-h-[400px]">
            <Image
              src={activeService.image}
              alt={`${activeService.title} 서비스 이미지`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                {activeService.subtitle}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                {activeService.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <ActiveIcon size={25} />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
              {activeService.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {activeService.description}
            </p>

            <ul className="mt-7 space-y-4">
              {activeService.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-slate-700 sm:text-base"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-sky-600"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={activeService.href}
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-700"
            >
              서비스 자세히 보기
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
