
import Link from "next/link";
import { ArrowRight, BadgePercent, CheckCircle2 } from "lucide-react";
import DiscountPrice from "./PricingSection";

const promotions = [
  {
    id: "standing",
    title: "스탠드 에어컨",
    subtitle: "거실 · 매장",
    originalPrice: 157000,
    salePrice: 110000,
    description: "스탠드 에어컨 1대 기준",
    featured: false,
  },
  {
    id: "wall",
    title: "벽걸이 에어컨",
    subtitle: "가정 · 원룸",
    originalPrice: 86000,
    salePrice: 60000,
    description: "벽걸이 에어컨 1대 기준",
    featured: false,
  },
  {
    id: "combo",
    title: "스탠드 + 벽걸이",
    subtitle: "가정용 세트",
    originalPrice: 214000,
    salePrice: 150000,
    description: "스탠드 1대 + 벽걸이 1대",
    featured: false,
  },
  {
    id: "system",
    title: "천장형 시스템",
    subtitle: "1~2대 작업",
    originalPrice: 100000,
    salePrice: 70000,
    description: "시스템 에어컨 대당 가격",
    featured: false,
  },
  {
    id: "system-bulk",
    title: "시스템 에어컨 3대 이상",
    subtitle: "다량 작업 할인",
    originalPrice: 86000,
    salePrice: 60000,
    description: "3대 이상 작업 시 대당 가격",
    featured: false,
  },
];

export default function DiscountPromoSection() {
  return (
    <section
      id="discount-promotion"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 섹션 제목 */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-sky-700 sm:text-sm">
            <BadgePercent size={17} />
            Special Price
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            에어컨 청소 특별 할인
            <br />
            <span className="text-sky-500">합리적인 가격으로 만나보세요</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            바람길케어의 전문 분해세척 서비스를
            <br className="sm:hidden" />
            합리적인 가격으로 경험해 보세요.
          </p>
        </div>

        {/* 할인 가격 카드 */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {promotions.map((item) => (
            <article
              key={item.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                item.featured
                  ? "border-sky-400 shadow-lg shadow-sky-100"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {item.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-sky-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                  인기 서비스
                </span>
              )}

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-sky-600">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <BadgePercent size={23} />
                </div>
              </div>

              <div className="my-6 border-t border-dashed border-slate-200" />

              <div className="mt-auto">
                <DiscountPrice
                  originalPrice={item.originalPrice}
                  salePrice={item.salePrice}
                  discountLabel="30% 할인"
                />

                <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 size={15} className="shrink-0 text-sky-500" />
                  <span>상담 후 작업 일정 확정</span>
                </div>
              </div>

              <Link
                href="/contact"
                className={`mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${
                  item.featured
                    ? "bg-sky-500 text-white hover:bg-sky-600"
                    : "bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                견적 문의하기
                <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>

        {/* 기타 서비스 안내 */}
        <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:px-7">
          <div>
            <h3 className="font-bold text-slate-900">
              기타 에어컨 및 특수 장비
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              덕트형, 특수 모델 및 기타 작업은 별도 상담해 드립니다.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-sky-200 px-5 py-3 text-sm font-bold text-sky-700 transition hover:bg-sky-50"
          >
            가격 문의하기
            <ArrowRight size={16} />
          </Link>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-400">
          가격은 기본 작업 기준이며, 제품 구조와 현장 상황에 따라 달라질 수 있습니다.
        </p>
      </div>
    </section>
  );
}
