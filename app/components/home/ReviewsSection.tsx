
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MessageSquareText,
} from "lucide-react";

type Review = {
  id: number;
  nickname: string;
  date: string;
  rating: number;
  service: string;
  content: string;
  image: string;
};

const reviews: Review[] = [
  {
    id: 1,
    nickname: "김**",
    date: "2026.10.20",
    rating: 5,
    service: "벽걸이 에어컨 청소",
    content:
      "예약부터 작업까지 친절하게 안내해 주셨습니다. 에어컨 내부까지 꼼꼼하게 청소해 주셔서 만족합니다.",
    image: "https://picsum.photos/seed/wind-review-01/240/240",
  },
  {
    id: 2,
    nickname: "박**",
    date: "2026.10.18",
    rating: 5,
    service: "스탠드 에어컨 청소",
    content:
      "청소 과정을 설명해 주셔서 안심이 됐습니다. 주변도 깔끔하게 정리해 주셔서 좋았어요.",
    image: "https://picsum.photos/seed/wind-review-02/240/240",
  },
  {
    id: 3,
    nickname: "이**",
    date: "2026.10.15",
    rating: 5,
    service: "시스템 에어컨 청소",
    content:
      "사무실 에어컨 여러 대를 맡겼는데 일정에 맞춰 작업해 주셨습니다. 다음에도 이용하고 싶습니다.",
    image: "https://picsum.photos/seed/wind-review-03/240/240",
  },
  {
    id: 4,
    nickname: "최**",
    date: "2026.10.12",
    rating: 5,
    service: "벽걸이 에어컨 청소",
    content:
      "상담이 빠르고 설명도 이해하기 쉬웠습니다. 작업 후 상태까지 확인해 주셔서 만족스러웠습니다.",
    image: "https://picsum.photos/seed/wind-review-04/240/240",
  },
  {
    id: 5,
    nickname: "정**",
    date: "2026.10.09",
    rating: 5,
    service: "스탠드 에어컨 청소",
    content:
      "에어컨을 오래 사용해서 걱정했는데 세척 전후 상태를 설명해 주셔서 좋았습니다.",
    image: "https://picsum.photos/seed/wind-review-05/240/240",
  },
  {
    id: 6,
    nickname: "윤**",
    date: "2026.10.06",
    rating: 5,
    service: "시스템 에어컨 청소",
    content:
      "시간 약속을 잘 지켜 주셨고 작업 공간도 깨끗하게 정리해 주셨습니다.",
    image: "https://picsum.photos/seed/wind-review-06/240/240",
  },
  {
    id: 7,
    nickname: "장**",
    date: "2026.10.03",
    rating: 5,
    service: "실외기 점검 및 청소",
    content:
      "어떤 부분을 관리해야 하는지 친절하게 설명해 주셨습니다. 문의 응대도 좋았습니다.",
    image: "https://picsum.photos/seed/wind-review-07/240/240",
  },
  {
    id: 8,
    nickname: "한**",
    date: "2026.09.28",
    rating: 5,
    service: "벽걸이 에어컨 청소",
    content:
      "처음 이용했는데 상담부터 마무리까지 차분하게 진행해 주셔서 편했습니다.",
    image: "https://picsum.photos/seed/wind-review-08/240/240",
  },
  {
    id: 9,
    nickname: "오**",
    date: "2026.09.25",
    rating: 5,
    service: "스탠드 에어컨 청소",
    content:
      "작업 전에 설명을 듣고 진행해서 좋았습니다. 궁금한 점도 친절하게 답변해 주셨습니다.",
    image: "https://picsum.photos/seed/wind-review-09/240/240",
  },
  {
    id: 10,
    nickname: "서**",
    date: "2026.09.20",
    rating: 5,
    service: "시스템 에어컨 청소",
    content:
      "여러 대를 한 번에 맡겼는데 일정과 작업 내용을 잘 안내해 주셨습니다.",
    image: "https://picsum.photos/seed/wind-review-10/240/240",
  },
];

const VISIBLE_COUNT = 4;
const AUTO_SLIDE_MS = 5000;

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const visibleReviews = Array.from(
    { length: Math.min(VISIBLE_COUNT, reviews.length) },
    (_, index) => reviews[(startIndex + index) % reviews.length]
  );

  const moveSlide = (direction: number) => {
    setStartIndex(
      (current) => (current + direction + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    if (isPaused || reviews.length <= VISIBLE_COUNT) return;

    const timer = window.setInterval(() => {
      moveSlide(1);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 제목 */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 sm:text-sm">
              Customer Reviews
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              고객님이 남겨주신
              <br className="sm:hidden" />{" "}
              <span className="text-sky-500">생생한 후기</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
              실제 이용 고객의 소중한 의견을 확인해 보세요.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-2 text-sm tabular-nums text-slate-500">
              {String(startIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="이전 리뷰"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sky-400 hover:text-sky-600"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="다음 리뷰"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sky-400 hover:text-sky-600"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 리뷰 목록 */}
        <div
          className="mt-10 space-y-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          {visibleReviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    <MessageSquareText size={17} />
                  </span>

                  <span className="text-sm font-semibold text-slate-800">
                    {review.nickname}
                  </span>

                  <span className="flex items-center gap-0.5 text-sm font-bold text-slate-900">
                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-amber-400"
                    />
                    {review.rating}
                  </span>

                  <time className="text-xs text-slate-400">
                    {review.date}
                  </time>
                </div>

                <p className="mt-3 text-xs font-medium text-slate-400">
                  서비스 · {review.service}
                </p>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                  {review.content}
                </p>
              </div>

              <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-28">
                <Image
                  src={review.image}
                  alt="고객 리뷰 첨부 이미지 예시"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>

        {/* 하단 */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-400">
            최근 리뷰 10개를 순환해서 보여줍니다.
          </p>

          <Link
            href="/reviews"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-400 hover:text-sky-600"
          >
            리뷰 더보기
            <ChevronRight size={17} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
