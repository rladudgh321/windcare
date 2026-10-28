
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Leaf,
  Handshake,
} from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "책임감 있는 전문 시공",
    description:
      "작업 과정을 꼼꼼하게 확인하고, 고객이 안심할 수 있도록 책임감 있게 시공합니다.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Wrench,
    title: "전문 장비와 도구",
    description:
      "에어컨 종류와 오염 상태에 적합한 장비와 도구를 사용해 세척 품질을 높입니다.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Leaf,
    title: "꼼꼼한 주변 관리",
    description:
      "작업 공간과 주변 가구를 보호하고, 세척 후 주변 정리까지 신경 씁니다.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Handshake,
    title: "투명한 서비스 안내",
    description:
      "작업 범위와 비용을 사전에 안내하고, 궁금한 점을 친절하게 설명합니다.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 text-white sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(14,165,233,0.10),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left content */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400 sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl lg:text-[56px]">
            숨클린만의
            <br />
            <span className="text-sky-400">특별한 약속</span>
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            보이지 않는 곳까지 꼼꼼하게 살핍니다.
            <br className="hidden sm:block" />
            고객님의 쾌적한 공간을 위해 세척 과정부터
            마무리까지 세심하게 관리합니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
            >
              브랜드 스토리 보기
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              견적 문의하기
            </Link>
          </div>
        </div>

        {/* Right promise cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <article
                key={promise.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07] sm:min-h-[215px] sm:p-7"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${promise.bg} ${promise.color} transition group-hover:scale-105`}
                >
                  <Icon size={25} strokeWidth={2.4} />
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight">
                  {promise.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {promise.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
