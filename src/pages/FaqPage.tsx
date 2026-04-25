import { Helmet } from "react-helmet-async";
import { CtaButton } from "@/components/DiscountComponents";
import { HelpCircle, Book, Shield, Phone, Lightbulb, Calendar, AlertTriangle } from "lucide-react";
import customerService from "@/assets/customer-service.jpg";
import thailandTravel from "@/assets/thailand-travel.jpg";
import macauTravel from "@/assets/macau-travel.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import { useState } from "react";

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 p-4 text-left hover:bg-secondary transition-colors" aria-expanded={open}>
        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="font-semibold text-sm flex-1">{q}</span>
        <span className="text-muted-foreground text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-2 border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const FaqPage = () => (
  <>
    <Helmet>
      <title>FAQ & 꿀팁 위키 - 트립닷컴 할인쿠폰</title>
      <meta name="description" content="트립닷컴 자주 묻는 질문 총정리. 할인쿠폰 FAQ, 예약·결제·환불 가이드, 서비스 보장제, 고객센터 연락처, 결제수단, 용어 사전까지 한 곳에서 확인하세요." />
      <link rel="canonical" href="https://trip.couponmonster.co.kr/faq" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="FAQ & 꿀팁 위키 - 트립닷컴 할인쿠폰" />
      <meta property="og:description" content="트립닷컴 자주 묻는 질문 총정리. 할인쿠폰 FAQ, 예약·결제·환불 가이드, 서비스 보장제, 고객센터 연락처, 결제수단, 용어 사전까지 한 곳에서 확인하세요." />
      <meta property="og:url" content="https://trip.couponmonster.co.kr/faq" />
      <meta property="og:image" content="https://trip.couponmonster.co.kr/images/og-image.jpg" />
      <meta property="og:site_name" content="트립닷컴 할인쿠폰" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FAQ & 꿀팁 위키 - 트립닷컴 할인쿠폰" />
      <meta name="twitter:description" content="트립닷컴 자주 묻는 질문 총정리. 할인쿠폰 FAQ, 예약·결제·환불 가이드, 서비스 보장제, 고객센터 연락처, 결제수단, 용어 사전까지 한 곳에서 확인하세요." />
      <meta name="twitter:image" content="https://trip.couponmonster.co.kr/images/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "트립닷컴 할인코드는 어떻게 적용하나요?", "acceptedAnswer": { "@type": "Answer", "text": "예약 진행 중 결제 단계의 프로모션 코드 영역에서 코드를 입력하거나, 내 쿠폰함에서 선택하여 적용할 수 있습니다." } },
          { "@type": "Question", "name": "두 개 이상의 할인코드를 동시에 사용할 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "일반적으로 할인코드는 1회 1건에만 사용 가능하며, 다른 코드와 중복 적용은 어렵습니다. 단, 트립코인은 할인코드와 함께 사용 가능한 경우가 있습니다." } },
          { "@type": "Question", "name": "할인코드 사용 후 예약을 취소하면 다시 사용할 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "호텔 할인코드의 경우, 예약을 취소하면 해당 할인코드는 트립닷컴 계정으로 자동 반환되며 프로모션 기간 내라면 다시 사용 가능합니다." } },
          { "@type": "Question", "name": "결제 방법은 어떤 것들을 지원하나요?", "acceptedAnswer": { "@type": "Answer", "text": "신용카드/체크카드, 내통장결제, 간편결제(네이버페이, 카카오페이, 삼성페이), 기프트카드/트립코인, 할부 결제를 지원합니다." } },
        ]
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="hero-gradient py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
          트립닷컴 FAQ & 꿀팁 위키
        </h1>
        <p className="text-lg text-primary-foreground/80">예약부터 환불까지 모든 궁금증 해결</p>
      </div>
    </section>

    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* 할인코드 FAQ */}
      <section className="mb-16" aria-labelledby="discount-faq">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="discount-faq" className="text-2xl font-bold">할인코드 관련 FAQ</h2>
        </div>

        <img src={mobileBooking} alt="트립닷컴 예약 FAQ" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="space-y-3">
          <FAQItem q="트립닷컴 할인코드(프로모션 코드/쿠폰)는 어떻게 적용하나요?" a="예약 진행 중 결제(체크아웃) 단계의 '프로모션 코드' 영역에서 코드를 입력하거나, 미리 받은 쿠폰은 '내 쿠폰함'에서 선택하여 적용할 수 있습니다. 쿠폰/코드마다 조건이 달라서 일부 상품에는 적용이 제한될 수 있고, '현장결제(Pay at hotel)' 객실 타입은 쿠폰이 제외됩니다." />
          <FAQItem q="하나의 예약에 두 개 이상의 할인코드를 사용할 수 있나요?" a="일반적으로 할인코드는 1회 1건에만 사용 가능하며, 다른 코드와 중복 적용은 어렵습니다. 단, 트립코인은 할인코드와 함께 사용 가능한 경우가 있습니다." />
          <FAQItem q="할인코드 사용 후 예약을 취소하면 다시 사용할 수 있나요?" a="호텔 할인코드의 경우, 예약을 취소하면 해당 할인코드는 트립닷컴 계정으로 자동 반환되며 프로모션 기간 내라면 다시 사용 가능합니다. 항공권 할인코드의 경우, 항공권의 변경/환불 규정에 따라 재사용 가능 여부가 달라집니다." />
          <FAQItem q="간편결제로 결제해도 카드사 할인코드가 적용되나요?" a="카드사 제휴 코드는 해당 카드의 카드번호를 직접 입력해야 적용됩니다. 간편결제(네이버페이, 카카오페이 등) 사용 시 카드사 코드가 적용되지 않을 수 있습니다. 단, 카카오페이/네이버페이 자체 프로모션은 별도 적용됩니다." />
          <FAQItem q="트립닷컴 할인코드는 어디서 찾을 수 있나요?" a="트립닷컴 메인 페이지, 앱 이벤트 영역, 제휴 카드사 프로모션 페이지, 카카오톡 채널 추가 시 제공되는 코드, 인플루언서 제휴 링크 등에서 찾을 수 있습니다. 저희 사이트에서 매월 최신 할인코드를 업데이트하여 제공합니다." />
          <FAQItem q="트립닷컴 주말 특가가 있나요?" a="네, 국내외 인기 호텔, 항공권, 액티비티를 목요일~일요일까지 특가 세일로 할인된 가격에 예약할 수 있습니다." />
          <FAQItem q="크리스마스/블랙프라이데이 시즌에 특별 할인이 있나요?" a="네, 11~12월 크리스마스 시즌에 트립닷컴 특가로 최대 50% 할인된 가격으로 인기 호텔을 예약할 수 있습니다. 블랙프라이데이 시즌에도 특별 프로모션이 진행됩니다." />
          <FAQItem q="카카오톡 채널 추가 시 혜택이 있나요?" a="네, 트립닷컴 카카오톡 채널을 추가하면 트립닷컴 할인코드를 받아 저렴하게 호텔 및 항공권을 예약할 수 있습니다." />
        </div>
      </section>

      {/* 예약·결제 FAQ */}
      <section className="mb-16" aria-labelledby="booking-faq">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <Book className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="booking-faq" className="text-2xl font-bold">예약·결제 관련 FAQ</h2>
        </div>

        <div className="space-y-3">
          <FAQItem q="결제 방법은 어떤 것들을 지원하나요?" a="신용카드/체크카드(VISA, Mastercard, 국내 주요 카드사), 내통장결제(카드 없이 계좌이체, 현금영수증 30% 공제 가능), 간편결제(네이버페이, 카카오페이, 삼성페이, 앱카드), 기프트카드/트립코인, 할부 결제(국민·신한·하나·현대 등)를 지원합니다." />
          <FAQItem q="회원 가입 없이도 예약이 가능한가요?" a="비회원으로도 예약 가능한 경우가 있지만, 예약 조회·변경·취소 등 관리가 번거롭습니다. 회원으로 이용하면 예약 관리가 편리하고 적립/할인 등 회원 혜택이 제공되므로 가입 후 이용을 추천합니다." />
          <FAQItem q="예약 후 호텔 바우처(확정서)는 어떻게 받나요?" a="예약이 완료되면 입력한 이메일로 예약 확정 메일이 발송됩니다. 앱에서도 예약 내역을 확인할 수 있습니다." />
          <FAQItem q="노쇼(No-Show)가 되면 어떻게 되나요?" a="노쇼는 체크인 예정일에 투숙객이 나타나지 않는 경우를 말하며, 숙소/요금제에 따라 첫날 요금 또는 전액이 청구될 수 있습니다. 취소 불가 요금제라면 전날 취소해도 환불이 어렵습니다." />
        </div>
      </section>

      {/* 서비스 보장제 */}
      <section className="mb-16" aria-labelledby="guarantee">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="guarantee" className="text-2xl font-bold">트립닷컴 서비스 보장제</h2>
        </div>

        <img src={customerService} alt="트립닷컴 고객 서비스" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "🏨 호텔 예약 보장제", desc: "체크인에 문제 발생 시 동급 객실 또는 업그레이드된 객실 배정. 트립닷컴의 실수로 취소 시 동급 이상 대체 서비스 또는 차액 보상." },
            { title: "✈️ 항공권 가격/예약 보장제", desc: "결제 확정 후 항공권 발권에 문제 발생 시 대체 항공편 또는 보상 제공. (결제 실패, 항공편 운항 변동, 고객 과실 제외)" },
            { title: "🚂 기차표 예약 보장제", desc: "트립닷컴 또는 서비스 공급업체의 과실로 탑승 불가 시 보상. (고객 과실, 운행 변경, 불가항력 제외)" },
            { title: "🚗 렌터카 보장제", desc: "결제 후 렌터카 업체에서 서비스 불가 시 차량 배정 조율. 최종 불가 시 일일 평균 대여 요금 한도까지 보상금 지급." },
            { title: "✈️🏨 항공+호텔 패키지", desc: "항공편 운항 변동으로 체크인 당일 호텔 이용 불가 시 호텔 예약 무료 취소 가능." },
            { title: "🆘 여행 중 긴급상황 지원", desc: "연중무휴 24시간 긴급상황 지원. 수하물/신분증 분실, 사고/질병으로 인한 일정 차질 시 지원." },
          ].map((item) => (
            <div key={item.title} className="section-card">
              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 용어 사전 */}
      <section className="mb-16" aria-labelledby="glossary">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <Book className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="glossary" className="text-2xl font-bold">용어 사전</h2>
        </div>

        <div className="section-card">
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>용어</th><th>설명</th></tr></thead>
              <tbody>
                {[
                  { term: "할인코드 (프로모션 코드)", desc: "결제 시 입력하면 즉시 할인이 적용되는 영숫자 코드" },
                  { term: "쿠폰", desc: "쿠폰함에 저장되어 예약 시 선택하여 적용하는 할인 수단" },
                  { term: "트립코인", desc: "트립닷컴 자체 리워드 포인트. 100 트립코인 = US $1" },
                  { term: "DCC (이중환전)", desc: "해외 가맹점에서 자국 통화로 결제 시 발생하는 이중 환전. 약 3~8% 추가 수수료" },
                  { term: "예약기간", desc: "할인코드를 사용하여 예약을 완료할 수 있는 기간" },
                  { term: "숙박기간", desc: "예약한 호텔에 실제로 체크인하여 투숙할 수 있는 기간" },
                  { term: "전용 링크", desc: "특정 할인코드가 활성화되기 위해 반드시 접속해야 하는 전용 웹 페이지 주소" },
                  { term: "채널 인증", desc: "프로모션 전용 링크를 통해 접속하여 할인코드 사용 자격을 얻는 과정" },
                  { term: "현장결제 (Pay at hotel)", desc: "호텔 도착 후 직접 결제. 대부분의 할인코드/쿠폰 적용 불가" },
                  { term: "적격 예약", desc: "회원 등급 산정에 반영되는 예약. 기프트카드 구매 등은 제외" },
                  { term: "트립찬스", desc: "트립닷컴에서 진행하는 기간 한정 대규모 프로모션 이벤트" },
                  { term: "타임드롭", desc: "특정 시간에 선착순으로 쿠폰을 지급하는 이벤트 (매일 오전 10시, 오후 6시)" },
                ].map((item) => (
                  <tr key={item.term}>
                    <td data-label="용어" className="font-semibold whitespace-nowrap">{item.term}</td>
                    <td data-label="설명" className="text-muted-foreground">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 고객센터 */}
      <section className="mb-16" aria-labelledby="contact">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="contact" className="text-2xl font-bold">고객센터 & 연락처</h2>
        </div>

        <div className="section-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-bold mb-1">전화</h3>
              <p className="text-2xl font-bold text-primary">1666-0060</p>
              <p className="text-xs text-muted-foreground">국내</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-bold mb-1">운영시간</h3>
              <p className="text-lg font-bold text-primary">연중무휴 24시간</p>
            </div>
            <div className="text-center">
              <HelpCircle className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-bold mb-1">문의 채널</h3>
              <p className="text-sm text-muted-foreground">전화, 이메일, 앱 내 실시간 채팅</p>
            </div>
          </div>
        </div>
      </section>

      {/* 꿀팁 모음 */}
      <section className="mb-16" aria-labelledby="tips">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="tips" className="text-2xl font-bold">결제 관련 꿀팁 모음</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img src={thailandTravel} alt="태국 여행 꿀팁" className="rounded-xl w-full h-48 object-cover" loading="lazy" width={800} height={600} />
          <img src={macauTravel} alt="마카오 여행 꿀팁" className="rounded-xl w-full h-48 object-cover" loading="lazy" width={800} height={600} />
        </div>

        <div className="space-y-4">
          {[
            { title: "꿀팁 1: 2,700원으로 골드 회원 되는 법", desc: "서울→수원 기차 티켓(2,700원)을 예약하면 적격 예약 1건이 인정되어 골드 회원으로 즉시 승급! 골드 회원이 되면 호텔 가격이 상당히 저렴해집니다." },
            { title: "꿀팁 2: 체인호텔 공홈 vs 트립닷컴 비교", desc: "호텔 체인의 공식 홈페이지 가격과 트립닷컴 회원 특가+할인코드 가격을 비교해보세요. 베이직 레벨 회원이라면 트립닷컴이 더 저렴한 경우가 많습니다." },
            { title: "꿀팁 3: 조식 포함 여부 비교", desc: "트립닷컴 회원은 조식 포함 요금이 상당히 저렴합니다. 2인 기준 차이가 2만원대라면 포함하는 것이 확실히 이득!" },
            { title: "꿀팁 4: 항공권 + 호텔 동시 예약 시 추가 할인", desc: "항공권을 먼저 예약한 후 호텔을 예약하면 '항공권 예약 전용 가격'이 적용됩니다. 단, 패키지가 아닌 별도 예약으로 진행해야 합니다." },
            { title: "꿀팁 5: 네이버페이 포인트 추가 적립", desc: "네이버페이로 결제 시 0.5% 추가 적립. 인플루언서 할인코드(KRW 결제) + 네이버페이 결제 조합이면 할인+적립 동시에!" },
            { title: "꿀팁 6: 허위 할인 사이트 주의", desc: "'자동 할인 적용' 또는 과장된 할인율을 광고하는 사이트를 주의하세요. 트립닷컴 공식 할인코드는 반드시 코드 입력 후 수동으로 적용해야 합니다." },
            { title: "꿀팁 7: 시크릿 모드로 가격 비교", desc: "시크릿 모드(Ctrl+Shift+N)에서 비로그인 가격을 확인하고, 로그인 후 회원 특가를 비교해보세요." },
            { title: "꿀팁 8: 월별 할인코드 리셋 활용", desc: "카드사 제휴 할인코드는 매월 선착순입니다. 매월 1일에 수량이 리셋되므로 월초에 사용하면 확률이 높습니다." },
          ].map((tip, i) => (
            <div key={i} className="section-card">
              <h3 className="font-bold text-sm mb-2">{tip.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 월별 프로모션 패턴 */}
      <section className="mb-16" aria-labelledby="monthly-pattern">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="monthly-pattern" className="text-2xl font-bold">월별 프로모션 패턴 (연간 달력)</h2>
        </div>

        <div className="section-card">
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>월</th><th>주요 프로모션 패턴</th></tr></thead>
              <tbody>
                {[
                  { m: "1월", p: "신년 특가, 설 연휴 항공/호텔 할인, 신규회원 대규모 쿠폰팩" },
                  { m: "2월", p: "봄 여행 얼리버드, 벚꽃 시즌 일본 특가 시작" },
                  { m: "3월", p: "벚꽃 시즌 일본 집중 프로모션, 동남아 우기 전 특가, 트립찬스" },
                  { m: "4월", p: "일본 벚꽃 마무리 특가, 마카오/태국/베트남 강화, 카카오페이 호텔" },
                  { m: "5월", p: "어린이날/가정의달 국내 호텔 특가, 여름 여행 얼리버드" },
                  { m: "6월", p: "여름 휴가 사전 예약, 괌/사이판/하와이 특가" },
                  { m: "7월", p: "여름 성수기 특가 (선착순 빠르게 소진), 국내 호캉스" },
                  { m: "8월", p: "여름 막바지 라스트미닛, 가을 여행 얼리버드" },
                  { m: "9월", p: "추석 연휴 항공/호텔, 가을 단풍 시즌 일본/한국 특가" },
                  { m: "10월", p: "가을 여행 절정기, 동남아 건기 시즌 특가 시작" },
                  { m: "11월", p: "블랙프라이데이 대규모 할인 (최대 50%), 크리스마스 얼리버드" },
                  { m: "12월", p: "크리스마스 시즌 특가 (최대 50%), 연말연시, 신년 여행 사전 예약" },
                ].map((row) => (
                  <tr key={row.m}>
                    <td data-label="월" className="font-bold whitespace-nowrap">{row.m}</td>
                    <td data-label="프로모션" className="text-muted-foreground">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="mb-16" aria-labelledby="cautions">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-destructive flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="cautions" className="text-2xl font-bold">주의사항 총정리</h2>
        </div>

        <div className="section-card">
          <ol className="space-y-3 list-decimal list-inside text-sm">
            <li><strong>전용 링크 접속 필수:</strong> 대부분의 할인코드는 전용 프로모션 링크를 통해 접속해야만 적용됩니다.</li>
            <li><strong>중복 적용 불가:</strong> 하나의 예약에 두 개 이상의 할인코드 사용 불가. (트립코인은 일부 중복 가능)</li>
            <li><strong>선착순 소진:</strong> 일부 프로모션은 예산 소진 시 조기 종료.</li>
            <li><strong>결제 통화 확인:</strong> 카드사별로 USD/KRW 결제 조건이 다릅니다.</li>
            <li><strong>현장결제 제외:</strong> "현장결제(Pay at hotel)" 객실은 대부분 할인코드 적용 불가.</li>
            <li><strong>항공권 할인 기준:</strong> 세금/유류세를 제외한 순수 항공운임 기준.</li>
            <li><strong>최종 해석권:</strong> 프로모션 관련 논쟁 시 트립닷컴에 최종 해석 권한이 있습니다.</li>
            <li><strong>허위매물 주의:</strong> "자동할인" 또는 과장된 할인율을 광고하는 타 사이트를 주의하세요.</li>
            <li><strong>사기성 예약 취소:</strong> 사기성 계정이나 불법적 방법을 이용한 예약은 사전 통지 없이 취소될 수 있습니다.</li>
          </ol>
        </div>
      </section>

      {/* 트립닷컴 기본 정보 */}
      <section className="mb-16" aria-labelledby="about-tripcom">
        <h2 id="about-tripcom" className="text-2xl font-bold mb-6">트립닷컴 기본 정보</h2>
        <div className="section-card">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              { label: "설립", value: "1999년" },
              { label: "나스닥 상장", value: "2003년" },
              { label: "회원 수", value: "4억 명+" },
              { label: "숙소", value: "140만 개+" },
              { label: "항공편", value: "200만 개+" },
              { label: "고객센터", value: "24시간" },
            ].map((item) => (
              <div key={item.label} className="bg-secondary rounded-xl p-4">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-lg font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img src={hotelRoom} alt="호텔" className="hidden" loading="lazy" width={800} height={600} />

      {/* CTA */}
      <section className="mb-8">
        <div className="hero-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">이제 할인코드를 적용해보세요!</h2>
          <p className="text-primary-foreground/80 mb-6">전용 링크를 통해 접속하면 할인이 바로 활성화됩니다</p>
          <CtaButton text="지금 할인 적용하기" className="text-lg px-8 py-4" />
        </div>
      </section>
    </main>
  </>
);

export default FaqPage;
