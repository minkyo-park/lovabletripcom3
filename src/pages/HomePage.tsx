import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Plane, Hotel, Ticket, Car, MapPin, CreditCard, Gift, Clock, ChevronRight, Star, Users, TrendingUp, Shield } from "lucide-react";
import { DiscountCard, CtaButton, CopyCodeButton } from "@/components/DiscountComponents";
import heroTravel from "@/assets/hero-travel.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import flightView from "@/assets/flight-view.jpg";
import creditCards from "@/assets/credit-cards.jpg";
import japanTravel from "@/assets/japan-travel.jpg";
import resortPool from "@/assets/resort-pool.jpg";

const AFFILIATE_LINK = "http://app.ac/9bMm1Dl83";

const HomePage = () => (
  <>
    <Helmet>
      <title>트립닷컴 할인쿠폰</title>
      <meta name="description" content="트립닷컴 할인쿠폰 6월 총정리! 쿠폰부터 항공권 할인코드, 호텔 할인코드까지 지금 바로 적용 가능한 할인쿠폰이 업데이트 되었습니다." />
      <link rel="canonical" href="https://trip.couponmonster.co.kr/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="트립닷컴 할인쿠폰" />
      <meta property="og:description" content="트립닷컴 할인쿠폰 6월 총정리! 쿠폰부터 항공권 할인코드, 호텔 할인코드까지 지금 바로 적용 가능한 할인쿠폰이 업데이트 되었습니다." />
      <meta property="og:url" content="https://trip.couponmonster.co.kr/" />
      <meta property="og:image" content="https://trip.couponmonster.co.kr/images/og-image.jpg" />
      <meta property="og:site_name" content="트립닷컴 할인쿠폰" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="트립닷컴 할인쿠폰" />
      <meta name="twitter:description" content="트립닷컴 할인쿠폰 6월 총정리! 쿠폰부터 항공권 할인코드, 호텔 할인코드까지 지금 바로 적용 가능한 할인쿠폰이 업데이트 되었습니다." />
      <meta name="twitter:image" content="https://trip.couponmonster.co.kr/images/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "트립닷컴 할인쿠폰",
        "description": "트립닷컴 할인쿠폰 6월 총정리! 쿠폰부터 항공권 할인코드, 호텔 할인코드까지 지금 바로 적용 가능한 할인쿠폰이 업데이트 되었습니다.",
        "url": "https://trip.couponmonster.co.kr/",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "호텔 할인코드 LPHOTEL6 - 6% 할인", "url": AFFILIATE_LINK },
            { "@type": "ListItem", "position": 2, "name": "카카오페이 호텔 할인 KAKAO12 - 12% 할인", "url": AFFILIATE_LINK },
          ]
        }
      })}</script>
    </Helmet>

    {/* Hero Section */}
    <section className="relative overflow-hidden" aria-label="메인 배너">
      <div className="absolute inset-0">
        <img src={heroTravel} alt="여행 풍경" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
          <Clock className="w-4 h-4" /> 2026년 6월 최신 업데이트
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-primary-foreground mb-4 leading-tight">
          트립닷컴 할인코드<br />
          <span className="text-accent">최대 20% 할인</span> 총정리
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          호텔·항공권·액티비티 할인코드부터 카드사 제휴, 신규회원 쿠폰팩, 월별 프로모션까지 한눈에 확인하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton text="지금 할인 적용하기" className="text-lg px-8 py-4" />
          <a href="#discount-codes" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-primary-foreground border-2 border-primary-foreground/40 hover:bg-primary-foreground/10 transition-colors">
            할인코드 보기 <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { icon: Hotel, label: "호텔", value: "최대 20% 할인" },
            { icon: Plane, label: "항공권", value: "최대 4% 할인" },
            { icon: Ticket, label: "액티비티", value: "최대 5% 할인" },
            { icon: CreditCard, label: "카드사 제휴", value: "6개 카드사" },
          ].map((item) => (
            <div key={item.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-primary-foreground">
              <item.icon className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">{item.label}</div>
              <div className="text-xs opacity-75">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <main className="max-w-6xl mx-auto px-4 py-12" id="discount-codes">
      {/* 기본 할인코드 */}
      <section className="mb-16" aria-labelledby="basic-codes">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <Star className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 id="basic-codes" className="text-2xl md:text-3xl font-bold">누구나 사용 가능한 할인코드</h2>
            <p className="text-sm text-muted-foreground">별도 조건 없이 신규+기존 회원 모두 사용 가능</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img src={hotelRoom} alt="트립닷컴 호텔 할인" className="rounded-xl w-full h-48 object-cover" loading="lazy" width={800} height={600} />
          <img src={flightView} alt="트립닷컴 항공권 할인" className="rounded-xl w-full h-48 object-cover" loading="lazy" width={800} height={600} />
        </div>

        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Hotel className="w-5 h-5 text-primary" /> 호텔 할인코드</h3>
        <div className="card-grid mb-8">
          <DiscountCard title="호텔 전용 할인" code="LPHOTEL6" discount="6% 할인" target="전 세계 호텔 (체인호텔 포함)" badge="recommended" note="메리어트, 힐튼, 하얏트, 어코르 등 체인호텔 적용 가능. 전용 링크 접속 필수." />
          <DiscountCard title="인플루언서 호텔 할인" discount="5~12% 할인" target="전 세계 호텔" badge="hot" note="전용 링크 접속 필수. KRW 결제." />
        </div>

        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Plane className="w-5 h-5 text-primary" /> 항공권 할인코드</h3>
        <div className="card-grid mb-8">
          <DiscountCard title="항공권 할인" discount="3% 할인" target="모든 항공권 (순수 항공운임 기준)" badge="recommended" note="세금/유류세 제외. 전용 링크 접속 필수." />
        </div>

        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Ticket className="w-5 h-5 text-primary" /> 액티비티·렌터카 할인코드</h3>
        <div className="card-grid mb-8">
          <DiscountCard title="투어·티켓 할인" code="GO5" discount="5% 할인" target="전 세계 투어·티켓·입장권" note="최대 4,000원 할인. 신규회원 첫 예약 시." />
          <DiscountCard title="렌터카 첫 예약" discount="최대 12% 할인" target="렌터카 (앱 전용)" badge="new" note="앱에서만 쿠폰 수령 가능. 주행거리 제한 없음." />
          <DiscountCard title="공항픽업 할인" discount="최대 12% 할인" target="공항픽업/샌딩 (앱 전용)" note="항공편 지연 시 추가 비용 없이 기사 대기." />
        </div>
      </section>

      {/* 신규회원 전용 */}
      <section className="mb-16" aria-labelledby="new-member">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <Gift className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 id="new-member" className="text-2xl md:text-3xl font-bold">신규회원 전용 할인</h2>
            <p className="text-sm text-muted-foreground">가입 즉시 12,800원 쿠폰팩 + 최대 10% 추가 할인</p>
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">🎁 신규회원 웰컴 쿠폰팩</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> 가입 시 12,800원 상당의 쿠폰팩 즉시 지급</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> 항공권, 호텔, 액티비티, 렌터카 등 다양한 카테고리</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> 가입 후 7일 이내 사용 필수</li>
          </ul>
          <CtaButton text="신규 가입하고 쿠폰 받기" className="text-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="section-card">
            <h3 className="font-bold mb-3">🏨 호텔 첫 예약 할인</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• 최대 10% 할인 (앱 다운로드 후 신규 가입 시)</li>
              <li>• 45만원 이상 결제 시 최대 3만원 할인 쿠폰</li>
              <li>• 3연박 이상 예약 시 5% 추가 할인 (최대 18,500원)</li>
            </ul>
          </div>
          <div className="section-card">
            <h3 className="font-bold mb-3">✈️ 항공권 첫 예약 할인</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• 210,000원 이상 결제 → 5,000원 할인</li>
              <li>• 520,000원 이상 결제 → 21,000원 할인</li>
              <li>• 결제 직전 할인코드 입력란에 코드 입력 → 즉시 적용</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 카드사 제휴 */}
      <section className="mb-16" aria-labelledby="card-deals">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 id="card-deals" className="text-2xl md:text-3xl font-bold">카드사 제휴 할인코드</h2>
            <p className="text-sm text-muted-foreground">KB국민·신한·우리·BC·VISA·Mastercard 등 6개 카드사 제휴</p>
          </div>
        </div>

        <img src={creditCards} alt="카드사 제휴 할인" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        {/* KB국민카드 */}
        <div className="section-card mb-4">
          <h3 className="font-bold text-lg mb-4">🏦 KB국민카드</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>할인코드</th><th>할인율</th><th>대상</th><th>기간</th><th>통화</th><th>복사</th></tr></thead>
              <tbody>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">KBTPH6</span></td>
                  <td data-label="할인율"><span className="discount-rate">최대 6%</span></td>
                  <td data-label="대상">호텔</td>
                  <td data-label="기간">~2026.12.31</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="KBTPH6" /></td>
                </tr>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">KBTP3</span></td>
                  <td data-label="할인율"><span className="discount-rate">최대 3%</span></td>
                  <td data-label="대상">항공권</td>
                  <td data-label="기간">~2026.12.31</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="KBTP3" /></td>
                </tr>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">KBTP4</span></td>
                  <td data-label="할인율"><span className="discount-rate">4%</span></td>
                  <td data-label="대상">액티비티</td>
                  <td data-label="기간">~2026.12.31</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="KBTP4" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">※ KB국민 개인 신용/체크 국내외겸용 카드 전용. 기업카드, BC카드, 마에스트로카드 제외.</p>
          <CtaButton text="KB국민카드 할인 적용" className="mt-4 text-sm" />
        </div>

        {/* 신한카드 */}
        <div className="section-card mb-4">
          <h3 className="font-bold text-lg mb-4">🏦 신한카드</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>할인코드</th><th>할인율</th><th>대상</th><th>기간</th><th>통화</th><th>복사</th></tr></thead>
              <tbody>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">VISASHINHAN06</span></td>
                  <td data-label="할인율"><span className="discount-rate">6~8%</span></td>
                  <td data-label="대상">호텔</td>
                  <td data-label="기간">~2026.12.31</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="VISASHINHAN06" /></td>
                </tr>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">SHINHAN7</span></td>
                  <td data-label="할인율"><span className="discount-rate">7%</span></td>
                  <td data-label="대상">호텔</td>
                  <td data-label="기간">기간별 상이</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="SHINHAN7" /></td>
                </tr>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">VISASHINHAN3</span></td>
                  <td data-label="할인율"><span className="discount-rate">3~4%</span></td>
                  <td data-label="대상">항공권</td>
                  <td data-label="기간">~2026.12.31</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="VISASHINHAN3" /></td>
                </tr>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">VISASHINHAN5</span></td>
                  <td data-label="할인율"><span className="discount-rate">3~5%</span></td>
                  <td data-label="대상">액티비티</td>
                  <td data-label="기간">~2026.12.31</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="VISASHINHAN5" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">※ 신한BC, 법인카드, 선불카드, 기프트카드 제외. 이중 환전 수수료 발생 가능.</p>
          <CtaButton text="신한카드 할인 적용" className="mt-4 text-sm" />
        </div>

        {/* 우리카드 */}
        <div className="section-card mb-4">
          <h3 className="font-bold text-lg mb-4">🏦 우리카드</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>할인코드</th><th>할인율</th><th>대상</th><th>기간</th><th>통화</th><th>복사</th></tr></thead>
              <tbody>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">WOORICARD06</span></td>
                  <td data-label="할인율"><span className="discount-rate">6%</span></td>
                  <td data-label="대상">호텔</td>
                  <td data-label="기간">~2026.06.30</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="WOORICARD06" /></td>
                </tr>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">WOORICARD03</span></td>
                  <td data-label="할인율"><span className="discount-rate">3%</span></td>
                  <td data-label="대상">항공권</td>
                  <td data-label="기간">~2026.06.30</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="WOORICARD03" /></td>
                </tr>
                <tr>
                  <td data-label="할인코드"><span className="discount-code-badge">WOORICARDTNT4</span></td>
                  <td data-label="할인율"><span className="discount-rate">4%</span></td>
                  <td data-label="대상">액티비티</td>
                  <td data-label="기간">~2026.06.30</td>
                  <td data-label="통화">USD</td>
                  <td><CopyCodeButton code="WOORICARDTNT4" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <CtaButton text="우리카드 할인 적용" className="mt-4 text-sm" />
        </div>

        {/* BC·VISA·Mastercard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="section-card">
            <h3 className="font-bold text-lg mb-4">💳 BC카드 <span className="badge-hot">KRW 결제</span></h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="discount-code-badge">BCBOOC6</span>
                  <span className="discount-rate ml-2">호텔 6%</span>
                </div>
                <CopyCodeButton code="BCBOOC6" />
              </div>
              <p className="text-xs text-muted-foreground">⚡ BC카드는 KRW(원화) 결제 필수 — 다른 카드사와 반대!</p>
            </div>
            <CtaButton text="BC카드 할인 적용" className="mt-4 text-sm" />
          </div>

          <div className="section-card">
            <h3 className="font-bold text-lg mb-4">💳 VISA카드</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="discount-code-badge">VISAF3</span>
                  <span className="discount-rate ml-2">항공 3%</span>
                </div>
                <CopyCodeButton code="VISAF3" />
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="discount-code-badge">VISATOUR4</span>
                  <span className="discount-rate ml-2">액티비티 4%</span>
                </div>
                <CopyCodeButton code="VISATOUR4" />
              </div>
            </div>
            <CtaButton text="VISA 할인 적용" className="mt-4 text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="section-card">
            <h3 className="font-bold text-lg mb-4">💳 Mastercard <span className="badge-recommended">최대 20%</span></h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="discount-code-badge">MATRIP3</span>
                  <span className="discount-rate ml-2">항공 3%</span>
                </div>
                <CopyCodeButton code="MATRIP3" />
              </div>
              <p className="text-xs text-muted-foreground">앱에서 Mastercard USD 결제 시 호텔 최대 20% 할인</p>
            </div>
            <CtaButton text="Mastercard 할인 적용" className="mt-4 text-sm" />
          </div>

          <div className="section-card">
            <h3 className="font-bold text-lg mb-4">🌐 네이버 웨일 브라우저</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="discount-rate">호텔 7%</span> (~2026.06.30)</p>
              <p className="text-xs text-muted-foreground">네이버 웨일 브라우저에서 접속 필수. USD 결제.</p>
            </div>
            <CtaButton text="웨일에서 할인 적용" className="mt-4 text-sm" />
          </div>
        </div>
      </section>

      {/* 카카오페이 */}
      <section className="mb-16" aria-labelledby="kakaopay">
        <div className="section-card border-2 border-accent/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 id="kakaopay" className="text-xl font-bold">카카오페이 호텔 할인 <span className="badge-hot">12% 할인</span></h2>
              <p className="text-sm text-muted-foreground">2026.05.01 ~ 06.30 한정</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="discount-code-badge text-base">KAKAO12</span>
            <span className="discount-rate text-base">12% 할인 (최대 3만원)</span>
            <CopyCodeButton code="KAKAO12" />
          </div>
          <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
            <li>• 카카오페이 결제 시, 전용 프로모션 페이지 접속 필수, KRW 결제</li>
            <li>• 숙박기간: 2026.08.31까지</li>
            <li>• <strong>타임드롭:</strong> 매일 오전 10시 & 오후 6시 선착순 최대 4만원 할인쿠폰</li>
            <li>• 적용 지역: 국내/일본/대만/홍콩/마카오/싱가포르/태국/베트남/인도네시아/말레이시아</li>
          </ul>
          <CtaButton text="카카오페이 할인 적용하기" />
        </div>
      </section>

      {/* 토스페이 */}
      <section className="mb-16" aria-labelledby="tosspay">
        <div className="section-card border-2 border-primary/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 id="tosspay" className="text-xl font-bold">토스페이 항공·호텔 할인 <span className="badge-hot">각 5% 할인</span></h2>
              <p className="text-sm text-muted-foreground">토스페이 결제 시 항공 &amp; 호텔 각각 5% 할인 (최대 6만원, 최소 사용금액 없음)</p>
            </div>
          </div>

          <div className="card-grid mb-4">
            <DiscountCard
              title="토스페이 항공 할인"
              code="TOSSF05"
              discount="5% 할인 (최대 6만원)"
              target="항공권 (최소 사용금액 없음)"
              badge="hot"
              note="할인·예약 ~2026.06.30 / 이륙 ~2026.09.30. 계정당 1일 1회 선착순. 전용 링크 접속 후 결제 시 코드 입력."
              href="http://app.ac/cEMTKrS53"
            />
            <DiscountCard
              title="토스페이 호텔 할인"
              code="TOSSH05"
              discount="5% 할인 (최대 6만원)"
              target="호텔 (최소 사용금액 없음)"
              badge="hot"
              note="할인·예약 ~2026.06.30 / 숙박 ~2026.09.30. 계정당 1일 1회 선착순. 전용 링크 접속 후 결제 시 코드 입력."
              href="http://app.ac/cEMTKrS53"
            />
          </div>

          <CtaButton text="토스페이 할인 적용하기" href="http://app.ac/cEMTKrS53" />
        </div>
      </section>

      {/* 현재 프로모션 */}
      <section className="mb-16" aria-labelledby="promos">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 id="promos" className="text-2xl md:text-3xl font-bold">현재 진행중인 프로모션</h2>
            <p className="text-sm text-muted-foreground">2026년 6월 기준</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <img src={japanTravel} alt="일본 벚꽃 여행 특가" className="rounded-xl w-full h-48 object-cover" loading="lazy" width={800} height={600} />
          <img src={resortPool} alt="리조트 휴양 특가" className="rounded-xl w-full h-48 object-cover" loading="lazy" width={800} height={600} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="section-card">
            <span className="badge-hot mb-2 inline-block">HOT</span>
            <h3 className="font-bold text-lg mb-2">🎪 트립찬스 프로모션</h3>
            <p className="text-xs text-muted-foreground mb-3">2026.06.01 ~ 06.30</p>
            <ul className="space-y-1 text-sm">
              <li>• 일본 2박 3일 항공+호텔 19.9만원 특가</li>
              <li>• 도쿄 편도 항공권 1만원 특가</li>
              <li>• 호텔 1+1 / 테마파크 1+1 특가</li>
            </ul>
            <CtaButton text="트립찬스 보기" className="mt-4 text-sm" />
          </div>

          <div className="section-card">
            <span className="badge-new mb-2 inline-block">일본</span>
            <h3 className="font-bold text-lg mb-2">🌸 일본 여행 특가</h3>
            <p className="text-xs text-muted-foreground mb-3">2026.06.01 ~ 06.30</p>
            <ul className="space-y-1 text-sm">
              <li>• 일본 항공권 최대 3만원 할인코드</li>
              <li>• 일본 호텔 20% 할인 (최대 2만원)</li>
              <li>• 인기 투어 & 티켓 1+1 특가</li>
            </ul>
            <CtaButton text="일본 특가 보기" className="mt-4 text-sm" />
          </div>

          <div className="section-card">
            <h3 className="font-bold text-lg mb-2">🏨 호텔 데일리/위클리 특가</h3>
            <p className="text-xs text-muted-foreground mb-3">2026.05.01 ~ 12.31 (상시)</p>
            <ul className="space-y-1 text-sm">
              <li>• 매일 새로운 호텔 특가</li>
              <li>• 선착순 쿠폰 (오전 10시, 오후 6시)</li>
            </ul>
            <CtaButton text="데일리 특가 보기" className="mt-4 text-sm" />
          </div>

          <div className="section-card">
            <h3 className="font-bold text-lg mb-2">🌴 태국·마카오·중국 특가</h3>
            <p className="text-xs text-muted-foreground mb-3">상시 진행</p>
            <ul className="space-y-1 text-sm">
              <li>• 태국 항공권/호텔 10% 할인코드</li>
              <li>• 마카오 호텔 최대 4만원 할인</li>
              <li>• 중국 항공+호텔 5만원 할인코드</li>
            </ul>
            <CtaButton text="특가 보기" className="mt-4 text-sm" />
          </div>
        </div>
      </section>

      {/* 항공사 제휴 */}
      <section className="mb-16" aria-labelledby="airline-promos">
        <h2 id="airline-promos" className="text-2xl font-bold mb-6 flex items-center gap-2"><Plane className="w-6 h-6 text-primary" /> 항공사 제휴 프로모션</h2>
        <div className="section-card">
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>항공사</th><th>할인코드</th><th>혜택</th><th>복사</th></tr></thead>
              <tbody>
                <tr>
                  <td data-label="항공사">이스타항공</td>
                  <td data-label="할인코드"><span className="discount-code-badge">RUCBBQTHPR</span></td>
                  <td data-label="혜택">항공권 1만원 할인</td>
                  <td><CopyCodeButton code="RUCBBQTHPR" /></td>
                </tr>
                <tr>
                  <td data-label="항공사">이스타항공</td>
                  <td data-label="할인코드"><span className="discount-code-badge">CUXIWIBFGJ</span></td>
                  <td data-label="혜택">전 지역 호텔 5% 할인</td>
                  <td><CopyCodeButton code="CUXIWIBFGJ" /></td>
                </tr>
                <tr>
                  <td data-label="항공사">이스타항공</td>
                  <td data-label="할인코드"><span className="discount-code-badge">JPBS10SALEZE</span></td>
                  <td data-label="혜택">전 지역 10% 호텔+항공권 할인</td>
                  <td><CopyCodeButton code="JPBS10SALEZE" /></td>
                </tr>
                <tr>
                  <td data-label="항공사">티웨이항공</td>
                  <td data-label="할인코드"><span className="discount-code-badge">WVHICJIDBG</span></td>
                  <td data-label="혜택">항공권 1만원 할인</td>
                  <td><CopyCodeButton code="WVHICJIDBG" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <CtaButton text="항공사 제휴 할인 적용" className="mt-4 text-sm" />
        </div>
      </section>

      {/* 친구 추천 & 가격 동결 */}
      <section className="mb-16" aria-labelledby="extras">
        <h2 id="extras" className="text-2xl font-bold mb-6">추가 혜택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="section-card">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-lg">친구 추천 프로그램</h3>
            </div>
            <ul className="space-y-1.5 text-sm">
              <li>• <strong>본인 혜택:</strong> 2만원 (친구 첫 예약 완료 시)</li>
              <li>• <strong>친구 혜택:</strong> 12,800원 웰컴 쿠폰팩</li>
              <li>• 최대 10명 초대 가능 (초대당 2,000 트립코인)</li>
              <li>• 💡 여러 예약 건을 친구와 나누면 최소 3만원 이상 절약!</li>
            </ul>
            <CtaButton text="친구 추천하기" className="mt-4 text-sm" />
          </div>

          <div className="section-card">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-lg">가격 동결 서비스 (Price Lock)</h3>
            </div>
            <ul className="space-y-1.5 text-sm">
              <li>• 소액 보증금으로 항공권 요금 14일간 동결</li>
              <li>• 가격 상승 시 → 트립닷컴이 차액 보전</li>
              <li>• 가격 하락 시 → 자동으로 더 낮은 금액 적용</li>
              <li>• 💡 성수기 인기 노선, 좌석 한정 특가에 유용!</li>
            </ul>
            <CtaButton text="가격 동결 신청" className="mt-4 text-sm" />
          </div>
        </div>
      </section>

      {/* 다른 페이지 안내 */}
      <section className="mb-8">
        <div className="hero-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">더 많은 할인 정보가 필요하신가요?</h2>
          <p className="text-primary-foreground/80 mb-6">사용 방법, 카드사별 비교 분석, FAQ까지 확인하세요</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/how-to-use" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
              사용 방법 보기
            </Link>
            <Link to="/guide" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              할인 가이드 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default HomePage;
