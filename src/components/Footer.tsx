import { Link } from "react-router-dom";
import { Plane, Mail, ExternalLink } from "lucide-react";

const AFFILIATE_LINK = "http://app.ac/9bMm1Dl83";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground mt-16" role="contentinfo">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-4">
            <Plane className="w-5 h-5" />
            트립닷컴 할인쿠폰
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            트립닷컴의 모든 할인코드, 쿠폰, 프로모션, 카드사 제휴 정보를 한 곳에서 확인하세요. 
            매월 최신 정보로 업데이트됩니다.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">빠른 링크</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">할인코드 총정리</Link></li>
            <li><Link to="/how-to-use" className="hover:opacity-100 transition-opacity">사용 방법 & 트러블슈팅</Link></li>
            <li><Link to="/guide" className="hover:opacity-100 transition-opacity">할인 가이드 & 비교분석</Link></li>
            <li><Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ & 꿀팁 위키</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">트립닷컴 바로가기</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                트립닷컴 할인 적용하기 <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li className="flex items-center gap-1">
              <Mail className="w-3 h-3" /> 고객센터: 1666-0060 (24시간)
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-50">
        <p>© 2026 트립닷컴 할인쿠폰 | couponmonster.co.kr</p>
        <p className="mt-1">이 사이트는 트립닷컴 제휴 프로그램을 통해 운영됩니다. 일부 링크를 통해 예약 시 수수료를 지급받을 수 있습니다.</p>
        <p className="mt-1">최종 업데이트: 2026년 5월 7일</p>
      </div>
    </div>
  </footer>
);

export default Footer;
