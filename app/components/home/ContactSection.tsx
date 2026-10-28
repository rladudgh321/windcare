
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Phone,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
        {/* 왼쪽 이미지 */}
        <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-slate-800 sm:min-h-[360px]">
          <Image
            src="https://picsum.photos/seed/windcare-contact/1000/800"
            alt="에어컨 청소 및 관리 작업"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
              <Clock size={14} className="text-sky-400" />
              빠른 방문 예약 상담
            </div>

            <p className="mt-5 text-base font-semibold leading-7 text-white sm:text-lg">
              “전문가의 손길로 달라지는 공기,
              <br />
              지금 경험해 보세요.”
            </p>
          </div>
        </div>

        {/* 오른쪽 문의 영역 */}
        <div className="flex flex-col justify-center py-2 lg:pl-1">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            합리적인 비용으로
            <br />
            <span className="text-sky-500">완벽한 케어</span>를 받으세요
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            복잡한 절차 없이 간편하게 견적을 문의하세요.
            <br className="hidden sm:block" />
            궁금한 점이 있다면 언제든 편하게 문의해 주세요.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* 견적 문의 */}
            <Link
              href="/contact"
              className="group flex min-h-[74px] items-center gap-3 rounded-xl bg-sky-500 px-4 py-4 text-white shadow-lg shadow-sky-500/15 transition hover:bg-sky-600"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Calculator size={21} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-sky-100">
                  무료 견적 상담
                </span>
                <span className="mt-0.5 block text-sm font-bold sm:text-base">
                  간편 견적 문의
                </span>
              </span>

              <ArrowRight
                size={19}
                className="shrink-0 transition group-hover:translate-x-1"
              />
            </Link>

            {/* 전화 상담 */}
            <a
              href="tel:15227384"
              className="flex min-h-[74px] items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-4 transition hover:border-sky-200 hover:bg-sky-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sky-500 shadow-sm">
                <Phone size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-slate-500">
                  친절 전화 상담
                </span>
                <span className="mt-0.5 block text-sm font-bold text-slate-900 sm:text-base">
                  1522-7384
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
