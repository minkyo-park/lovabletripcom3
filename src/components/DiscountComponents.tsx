import { useCallback, useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

const AFFILIATE_LINK = "http://app.ac/9bMm1Dl83";

interface CopyCodeButtonProps {
  code: string;
  label?: string;
}

export const CopyCodeButton = ({ code, label }: CopyCodeButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <button onClick={handleCopy} className="copy-button" aria-label={`${code} 할인코드 복사`}>
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "복사됨!" : label || code}
    </button>
  );
};

interface CtaButtonProps {
  text?: string;
  className?: string;
  href?: string;
}

export const CtaButton = ({ text = "할인 적용하기", className = "", href }: CtaButtonProps) => (
  <a
    href={href || AFFILIATE_LINK}
    target="_blank"
    rel="noopener noreferrer nofollow"
    className={`cta-button ${className}`}
  >
    {text} <ExternalLink className="w-4 h-4" />
  </a>
);

interface DiscountCardProps {
  title: string;
  code?: string;
  discount: string;
  target: string;
  badge?: "recommended" | "hot" | "new";
  note?: string;
  href?: string;
}

export const DiscountCard = ({ title, code, discount, target, badge, note, href }: DiscountCardProps) => (
  <div className="section-card hover:card-hover-shadow transition-shadow duration-300">
    <div className="flex items-start justify-between mb-3">
      <h3 className="font-bold text-base">{title}</h3>
      {badge === "recommended" && <span className="badge-recommended">추천</span>}
      {badge === "hot" && <span className="badge-hot">인기</span>}
      {badge === "new" && <span className="badge-new">신규</span>}
    </div>
    <div className="discount-rate mb-3">{discount}</div>
    <p className="text-sm text-muted-foreground mb-3">{target}</p>
    {note && <p className="text-xs text-muted-foreground mb-3">{note}</p>}
    <div className="flex flex-wrap gap-2">
      {code && <CopyCodeButton code={code} />}
      <CtaButton text="바로 적용" className="text-sm px-4 py-2" href={href} />
    </div>
  </div>
);

export default DiscountCard;
