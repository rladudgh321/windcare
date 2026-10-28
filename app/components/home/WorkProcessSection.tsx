
import {
  ClipboardCheck,
  UserRound,
  SprayCan,
  WandSparkles,
  Smile,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "예약 및 상담",
    description: "전문 상담원과 일정을 조율 후 맞춤 견적을 제공합니다.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "전문가 방문",
    description: "약속된 시간에 담당 전문가가 방문합니다.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "분해 및 세척",
    description: "주변을 보호한 후 분해하여 오염 부위를 세척합니다.",
    icon: SprayCan,
  },
  {
    number: "04",
    title: "살균 및 조립",
    description: "세척 후 부품을 조립하고 작동 상태를 확인합니다.",
    icon: WandSparkles,
  },
  {
    number: "05",
    title: "고객 검수",
    description: "작업 결과를 확인하고 관리 방법을 안내해 드립니다.",
    icon: Smile,
  },
];

export default function WorkProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* 제목 */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 sm:text-sm">
            Process
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            바람길케어{" "}
            <span className="text-sky-500">표준 케어 프로세스</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            체계적인 5단계 매뉴얼로 어느 현장에서나 일관된 서비스를 제공합니다.
          </p>
        </div>

        {/* 5단계 프로세스 */}
        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-5">
          {/* 데스크톱 연결선 */}
          <div className="absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-slate-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* 원형 아이콘 */}
                <div className="relative flex h-[86px] w-[86px] items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_4px_14px_rgba(15,23,42,0.09)]">
                  <Icon
                    size={27}
                    strokeWidth={2}
                    className="text-slate-300"
                  />

                  <span className="absolute -right-2 -top-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white shadow-sm">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[230px] text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
