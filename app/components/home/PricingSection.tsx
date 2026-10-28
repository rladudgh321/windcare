
type DiscountPriceProps = {
  originalPrice: number;
  salePrice: number;
  discountLabel?: string;
};

export default function DiscountPrice({
  originalPrice,
  salePrice,
  discountLabel = "30% 할인",
}: DiscountPriceProps) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-slate-400 line-through decoration-slate-400 decoration-1">
          {originalPrice.toLocaleString("ko-KR")}원
        </span>

        <span className="rounded bg-red-50 px-2 py-0.5 text-xs font-bold text-red-600">
          {discountLabel}
        </span>
      </div>

      <strong className="text-2xl font-extrabold tracking-tight text-sky-600">
        {salePrice.toLocaleString("ko-KR")}원
        <span className="ml-1 text-sm font-semibold">~</span>
      </strong>
    </div>
  );
}
