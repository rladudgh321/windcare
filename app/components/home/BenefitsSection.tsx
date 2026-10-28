
import {
  Microscope,
  Wrench,
  ShieldCheck,
  Wind,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "정밀 오염 진단",
    description:
      "육안으로 확인하기 힘든 내부의 미세 곰팡이와 유해 세균 오염도를 정밀하게 진단하여 오염원에 맞는 최적의 세척 솔루션을 설계합니다.",
    Icon: Microscope,
  },
  {
    number: "02",
    title: "초고압 핀 세척",
    description:
      "일반 세척기로 닿지 않는 열교환기 핀 사이의 미세 틈새까지 세척 장비로 꼼꼼하게 세정하여 먼지와 오염물을 제거합니다.",
    Icon: Wrench,
  },
  {
    number: "03",
    title: "3단계 안심 살균",
    description:
      "세척과 헹굼, 마무리 살균까지 체계적인 공정으로 관리합니다. 현장과 장비 상태에 맞는 위생 관리로 쾌적한 환경을 지향합니다.",
    Icon: ShieldCheck,
  },
  {
    number: "04",
    title: "에코 건조 시스템",
    description:
      "세척 후 남은 수분을 꼼꼼하게 제거하고 건조 상태를 확인합니다. 내부 습기로 인한 불쾌한 냄새를 줄이고 쾌적한 사용 환경을 유지합니다.",
    Icon: Wind,
  },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-sky-50/40 py-20 sm:py-24 lg:py-28"
    >
      {/* 은은한 배경 장식 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* 섹션 헤더 */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-600 sm:text-sm">
            <span className="h-px w-6 bg-sky-500" />
            Air Care Technology
            <span className="h-px w-6 bg-sky-500" />
          </span>

          <h2
            id="benefits-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            단순한 청소를 넘어
            <br />
            <span className="text-sky-500">공기의 질</span>을 혁신합니다
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            윈드케어는 단순한 물청소가 아닙니다. 에어컨의 구조와 오염
            상태를 고려한 체계적인 관리로 쾌적한 실내 환경을 만들어 갑니다.
          </p>
        </div>

        {/* 핵심 서비스 카드 */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {benefits.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_20px_45px_rgba(14,165,233,0.10)] sm:p-8"
            >
              {/* 카드 상단 번호 */}
              <div className="flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 ring-1 ring-sky-100/80 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-500">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <span className="font-mono text-sm font-semibold tracking-wider text-slate-300 transition-colors group-hover:text-sky-400">
                  {number}
                </span>
              </div>

              {/* 카드 설명 */}
              <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>

              <p className="mt-4 flex-1 break-keep text-sm leading-7 text-slate-500">
                {description}
              </p>

              {/* 하단 장식 */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-xs font-semibold tracking-wide text-slate-400 transition-colors group-hover:text-sky-600">
                  WINDCARE STANDARD
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-500"
                />
              </div>
            </article>
          ))}
        </div>

        {/* 하단 보조 문구 */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <ShieldCheck
            size={18}
            className="shrink-0 text-sky-500"
            aria-hidden="true"
          />
          <p className="text-sm leading-6 text-slate-500">
            공간의 특성과 장비 상태를 고려한
            <span className="font-semibold text-slate-700">
              {" "}맞춤형 냉난방기 관리
            </span>
            를 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
