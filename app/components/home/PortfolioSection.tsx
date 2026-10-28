
import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "대기업 사무실 시스템 에어컨",
    date: "2025.03.15",
    tags: ["대규모 작업", "업무 환경"],
    image: "https://picsum.photos/seed/windcare-portfolio-1/1200/900",
    featured: true,
  },
  {
    id: 2,
    title: "댄스 스튜디오",
    date: "2025.07.06",
    tags: ["연습실", "정밀 케어"],
    image: "https://picsum.photos/seed/windcare-portfolio-2/800/500",
  },
  {
    id: 3,
    title: "관공서 정기 유지보수",
    date: "2024.03.10",
    tags: ["조달 현장", "연간 계약"],
    image: "https://picsum.photos/seed/windcare-portfolio-3/800/500",
  },
  {
    id: 4,
    title: "전문 병원 위생 관리",
    date: "2025.03.08",
    tags: ["위생 관리", "안심 케어"],
    image: "https://picsum.photos/seed/windcare-portfolio-4/700/500",
  },
  {
    id: 5,
    title: "대형 교회",
    date: "2024.03.05",
    tags: ["대형 시설", "정기 청소"],
    image: "https://picsum.photos/seed/windcare-portfolio-5/700/500",
  },
  {
    id: 6,
    title: "대형 카페 & 라운지",
    date: "2024.03.01",
    tags: ["매장 관리", "공간 케어"],
    image: "https://picsum.photos/seed/windcare-portfolio-6/700/500",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-9 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600 sm:text-sm">
              Portfolio
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              숨클린 <span className="text-sky-500">현장 스케치</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-700 sm:text-sm"
          >
            <Camera size={17} />
            <span className="hidden sm:inline">더 많은 시공사례 보기</span>
            <span className="sm:hidden">더 보기</span>
          </Link>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[210px_210px_210px]">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio#project-${project.id}`}
              className={`group relative isolate min-h-[230px] overflow-hidden rounded-2xl bg-slate-200 ${
                project.featured
                  ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes={
                  project.featured
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent transition group-hover:from-black/85" />

              {/* Project details */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-sky-500/95 px-2 py-1 text-[10px] font-bold text-white sm:text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex items-end justify-between gap-3">
                  <div>
                    <h3
                      className={`font-bold text-white ${
                        project.featured
                          ? "text-xl sm:text-2xl"
                          : "text-base sm:text-lg"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/70">
                      {project.date}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
