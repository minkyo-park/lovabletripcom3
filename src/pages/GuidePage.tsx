import { Helmet } from "react-helmet-async";
import { CtaButton } from "@/components/DiscountComponents";
import { BarChart3, Target, Trophy, Zap, Star, TrendingUp, Clock } from "lucide-react";
import creditCards from "@/assets/credit-cards.jpg";
import comparisonChart from "@/assets/comparison-chart.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import resortPool from "@/assets/resort-pool.jpg";
import japanTravel from "@/assets/japan-travel.jpg";

const AFFILIATE_LINK = "http://app.ac/9bMm1Dl83";

const GuidePage = () => (
  <>
    <Helmet>
      <title>할인 완벽 가이드 - 트립닷컴 할인코드</title>
      <meta name="description" content="트립닷컴 카드사별 할인코드 비교, 아고다·호텔스닷컴과의 가격 비교, 회원등급별 혜택 분석, 할인 극대화 조합 전략까지. 다른 곳에서 볼 수 없는 독보적인 할인 가이드." />
      <link rel="canonical" href="https://trip.couponmonster.co.kr/guide" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "트립닷컴 할인 완벽 가이드",
        "description": "카드사별 비교, OTA 비교, 할인 극대화 전략",
        "url": "https://trip.couponmonster.co.kr/guide",
        "datePublished": "2026-04-07",
        "dateModified": "2026-04-07"
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="hero-gradient py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
          트립닷컴 할인 완벽 가이드
        </h1>
        <p className="text-lg text-primary-foreground/80">카드사별 비교 · OTA 비교 · 할인 극대화 전략</p>
      </div>
    </section>

    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* 카드사 비교 */}
      <section className="mb-16" aria-labelledby="card-comparison">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="card-comparison" className="text-2xl font-bold">카드사별 할인코드 비교 분석</h2>
        </div>

        <img src={creditCards} alt="카드사별 할인 비교" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">🏨 호텔 할인코드 비교표</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>카드사</th><th>할인율</th><th>결제 통화</th><th>예약기간</th><th>추천도</th></tr></thead>
              <tbody>
                {[
                  { card: "Mastercard", rate: "최대 20%", currency: "USD", period: "기간별 상이", stars: "★★★★★", badge: "최대 할인" },
                  { card: "신한카드", rate: "6~8%", currency: "USD", period: "~2026.12.31", stars: "★★★★★", badge: "최대 할인율" },
                  { card: "네이버웨일", rate: "7%", currency: "USD", period: "~2026.06.30", stars: "★★★★★", badge: null },
                  { card: "KB국민카드", rate: "최대 6%", currency: "USD", period: "~2026.12.31", stars: "★★★★☆", badge: null },
                  { card: "우리카드", rate: "6%", currency: "USD", period: "~2026.06.30", stars: "★★★★☆", badge: null },
                  { card: "BC카드", rate: "6%", currency: "KRW", period: "~2026.06.30", stars: "★★★★☆", badge: "KRW 가능" },
                  { card: "VISA", rate: "6~8%", currency: "USD", period: "~2026.12.31", stars: "★★★★☆", badge: null },
                  { card: "인플루언서 코드", rate: "5~12%", currency: "KRW", period: "상시", stars: "★★★★☆", badge: "조건 없음" },
                ].map((row) => (
                  <tr key={row.card}>
                    <td data-label="카드사" className="font-medium">{row.card} {row.badge && <span className="badge-recommended ml-1">{row.badge}</span>}</td>
                    <td data-label="할인율"><span className="discount-rate">{row.rate}</span></td>
                    <td data-label="통화" className={row.currency === "KRW" ? "font-bold text-primary" : ""}>{row.currency}</td>
                    <td data-label="기간">{row.period}</td>
                    <td data-label="추천도" className="text-accent">{row.stars}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">✈️ 항공권 할인코드 비교표</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>카드사</th><th>할인율</th><th>결제 통화</th><th>비고</th></tr></thead>
              <tbody>
                {[
                  { card: "신한카드", rate: "3~4%", currency: "USD", note: "순수 항공운임 기준" },
                  { card: "KB국민카드", rate: "최대 3%", currency: "USD", note: "순수 항공운임 기준" },
                  { card: "우리카드", rate: "3%", currency: "USD", note: "순수 항공운임 기준" },
                  { card: "BC카드", rate: "3%", currency: "KRW", note: "순수 항공운임 기준" },
                  { card: "VISA", rate: "3%", currency: "USD", note: "순수 항공운임 기준" },
                  { card: "Mastercard", rate: "3%", currency: "USD", note: "순수 항공운임 기준" },
                  { card: "인플루언서 코드", rate: "3%", currency: "KRW", note: "한도 없이 제공" },
                ].map((row) => (
                  <tr key={row.card}>
                    <td data-label="카드사" className="font-medium">{row.card}</td>
                    <td data-label="할인율"><span className="discount-rate">{row.rate}</span></td>
                    <td data-label="통화">{row.currency}</td>
                    <td data-label="비고" className="text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-card">
          <h3 className="font-bold text-lg mb-4">🎯 카드 선택 가이드 (상황별 추천)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "원화(KRW) 결제가 편한 분", rec: "BC카드(호텔 6%) 또는 인플루언서 코드(5~12%)", icon: "💳" },
              { title: "최대 할인을 원하는 분", rec: "Mastercard(호텔 최대 20%) 또는 신한카드(호텔 8%)", icon: "🏆" },
              { title: "해외결제 수수료를 피하고 싶은 분", rec: "간편결제(카카오페이/네이버페이) + 인플루언서 코드 조합", icon: "💰" },
              { title: "항공+호텔 모두 할인받고 싶은 분", rec: "KB국민카드 또는 신한카드 (호텔+항공+액티비티 모두 코드 제공)", icon: "✈️" },
            ].map((item) => (
              <div key={item.title} className="bg-secondary rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-2">{item.icon} {item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.rec}</p>
              </div>
            ))}
          </div>
          <CtaButton text="지금 할인 적용하기" className="mt-6 text-sm" />
        </div>
      </section>

      {/* OTA 비교 */}
      <section className="mb-16" aria-labelledby="ota-comparison">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="ota-comparison" className="text-2xl font-bold">트립닷컴 vs 다른 OTA 비교</h2>
        </div>

        <img src={comparisonChart} alt="OTA 비교 분석" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">트립닷컴의 차별화 포인트</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>비교 항목</th><th>트립닷컴</th><th>아고다</th><th>호텔스닷컴</th><th>부킹닷컴</th></tr></thead>
              <tbody>
                <tr>
                  <td data-label="항목" className="font-medium">체인호텔 할인코드 적용</td>
                  <td data-label="트립닷컴"><span className="badge-recommended">✅ 가능</span></td>
                  <td data-label="아고다">❌ 불가</td>
                  <td data-label="호텔스닷컴">❌ 불가</td>
                  <td data-label="부킹닷컴">❌ 불가</td>
                </tr>
                <tr>
                  <td data-label="항목" className="font-medium">회원 등급별 숙소 특가</td>
                  <td data-label="트립닷컴"><span className="badge-recommended">✅ 최대 34%</span></td>
                  <td data-label="아고다">✅ VIP 딜</td>
                  <td data-label="호텔스닷컴">✅ 10박=1박</td>
                  <td data-label="부킹닷컴">✅ Genius</td>
                </tr>
                <tr>
                  <td data-label="항목" className="font-medium">카드사 제휴 할인코드</td>
                  <td data-label="트립닷컴"><span className="badge-recommended">✅ 6개 이상</span></td>
                  <td data-label="아고다">✅ 일부</td>
                  <td data-label="호텔스닷컴">제한적</td>
                  <td data-label="부킹닷컴">제한적</td>
                </tr>
                <tr>
                  <td data-label="항목" className="font-medium">기차/교통편 예약</td>
                  <td data-label="트립닷컴"><span className="badge-recommended">✅ 한국 기차 포함</span></td>
                  <td data-label="아고다">❌</td>
                  <td data-label="호텔스닷컴">❌</td>
                  <td data-label="부킹닷컴">❌</td>
                </tr>
                <tr>
                  <td data-label="항목" className="font-medium">가격 동결 기능</td>
                  <td data-label="트립닷컴"><span className="badge-recommended">✅ 14일</span></td>
                  <td data-label="아고다">❌</td>
                  <td data-label="호텔스닷컴">❌</td>
                  <td data-label="부킹닷컴">❌</td>
                </tr>
                <tr>
                  <td data-label="항목" className="font-medium">무료 취소 정책</td>
                  <td data-label="트립닷컴">상품별 상이</td>
                  <td data-label="아고다">상품별 상이</td>
                  <td data-label="호텔스닷컴">상품별 상이</td>
                  <td data-label="부킹닷컴"><span className="badge-recommended">✅ 유연</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "체인호텔 예약 시 트립닷컴이 유리", desc: "다른 OTA에서는 체인호텔(메리어트, 힐튼 등)에 할인코드를 적용할 수 없지만, 트립닷컴은 체인호텔에도 할인코드 적용이 가능합니다.", icon: "🏨" },
            { title: "회원 등급에 따른 가격 차이", desc: "비로그인 상태와 골드 회원 상태의 가격 차이가 최대 34%까지 날 수 있으므로 반드시 로그인 후 가격을 비교해야 합니다.", icon: "👤" },
            { title: "무료 취소가 절대적으로 필요하다면", desc: "정책이 유연한 부킹닷컴을 추천합니다. 트립닷컴도 무료 취소 옵션이 있지만 부킹닷컴이 더 유연합니다.", icon: "🔄" },
            { title: "동남아·일본 지역 숙소", desc: "결제 전 아고다 특가와 최종 금액을 비교해보는 것을 추천합니다. 동남아에서는 아고다가 강세인 경우가 있습니다.", icon: "🌏" },
          ].map((item) => (
            <div key={item.title} className="section-card">
              <h3 className="font-bold text-sm mb-2">{item.icon} {item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 회원등급 가이드 */}
      <section className="mb-16" aria-labelledby="membership">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <Trophy className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="membership" className="text-2xl font-bold">트립닷컴 회원등급(리워드) 완벽 가이드</h2>
        </div>

        <img src={resortPool} alt="트립닷컴 회원 등급별 혜택" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">등급 체계 (6단계)</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>등급</th><th>승급 조건</th><th>트립코인 추가</th><th>공항 라운지</th><th>eSIM</th></tr></thead>
              <tbody>
                {[
                  { grade: "실버", condition: "가입 즉시", coin: "기본 적립", lounge: "—", esim: "—" },
                  { grade: "골드", condition: "적격 예약 1건", coin: "20% 추가", lounge: "—", esim: "—" },
                  { grade: "플래티넘", condition: "적격 예약 3건 (1년)", coin: "50% 추가", lounge: "1회/년", esim: "1GB/3일" },
                  { grade: "다이아몬드", condition: "8건 + US$1,000", coin: "100% 추가", lounge: "2회/년", esim: "3GB/5일" },
                  { grade: "다이아몬드+", condition: "US$10,000+", coin: "150% 추가", lounge: "4회/년", esim: "3GB/5일 ×2" },
                  { grade: "블랙다이아몬드", condition: "초대 전용", coin: "200% 추가", lounge: "8회/년", esim: "3GB/5일 ×8" },
                ].map((row) => (
                  <tr key={row.grade}>
                    <td data-label="등급" className="font-bold">{row.grade}</td>
                    <td data-label="조건">{row.condition}</td>
                    <td data-label="트립코인">{row.coin}</td>
                    <td data-label="라운지">{row.lounge}</td>
                    <td data-label="eSIM">{row.esim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">등급별 호텔 할인율</h3>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>등급</th><th>할인율 범위</th><th>비고</th></tr></thead>
              <tbody>
                <tr><td data-label="등급">비로그인</td><td data-label="할인율">할인 없음</td><td data-label="비고">일반가</td></tr>
                <tr><td data-label="등급">실버</td><td data-label="할인율"><span className="discount-rate">5~27%</span></td><td data-label="비고">회원 전용 특가</td></tr>
                <tr><td data-label="등급" className="font-bold">골드</td><td data-label="할인율"><span className="discount-rate">10~34%</span></td><td data-label="비고"><span className="badge-recommended">체감 할인 최대</span></td></tr>
                <tr><td data-label="등급">플래티넘</td><td data-label="할인율"><span className="discount-rate">골드 유사~추가</span></td><td data-label="비고">부가 혜택이 핵심</td></tr>
                <tr><td data-label="등급">다이아몬드+</td><td data-label="할인율"><span className="discount-rate">최대 할인</span></td><td data-label="비고">VIP 서비스 포함</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">🚀 등급 빠르게 올리는 실전 전략 5가지</h3>
          <div className="space-y-4">
            {[
              { title: "저가 기차표로 등급업", desc: "서울→수원 기차 티켓(2,700원)만 예약해도 1건으로 인정됩니다. 골드 등급은 예약 1건이면 즉시 승급!" },
              { title: "항공+호텔 별도 예약으로 건수 늘리기", desc: "패키지가 아닌 따로 예약하면 각각 1건씩 인정됩니다." },
              { title: "3박 이상 숙박은 1박씩 쪼개서 예약", desc: "누적 실적으로 인정됩니다." },
              { title: "가족/지인 여행 대표 예약자로 모으기", desc: "예약자는 본인, 숙박자는 다르게 설정 가능합니다." },
              { title: "시즌별 등급 2배 이벤트 활용", desc: "연휴, 블랙프라이데이 등 등급 포인트 2배 이벤트 시 집중 예약" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="step-number">{i + 1}</span>
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">🪙 트립코인 시스템</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary rounded-xl p-4">
              <h4 className="font-semibold text-sm mb-2">가치</h4>
              <p className="text-2xl font-bold text-primary">100 트립코인 = US $1</p>
            </div>
            <div className="bg-secondary rounded-xl p-4">
              <h4 className="font-semibold text-sm mb-2">사용처</h4>
              <p className="text-xs text-muted-foreground">호텔, 항공권, 기차표, 렌터카, 공항 픽업, 투어&티켓 예약 시 즉시 할인</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">💡 할인코드와 트립코인 동시 사용 가능 (일부 예약)</p>
        </div>
      </section>

      {/* 할인 극대화 조합 전략 */}
      <section className="mb-16" aria-labelledby="maximize">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="maximize" className="text-2xl font-bold">할인 극대화 조합 전략</h2>
        </div>

        <img src={japanTravel} alt="여행 할인 극대화" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "전략 1: 기본 코드 + 회원특가 + 트립코인", steps: ["회원 등급을 골드로 올려서 전용 특가 적용", "인플루언서 할인코드로 추가 5% 할인", "적립된 트립코인으로 추가 할인"], result: "체감 할인율 20~30% 가능", icon: <Star className="w-5 h-5" /> },
            { title: "전략 2: 카드사 할인 + USD + 수수료 절약", steps: ["카드사 할인코드(6~8%) 적용", "결제 통화를 USD로 설정", "해외결제 수수료 무료 카드 사용"], result: "순수 할인율 극대화 + 수수료 0%", icon: <TrendingUp className="w-5 h-5" /> },
            { title: "전략 3: 친구 추천 + 신규회원 쿠폰 + 할인코드", steps: ["친구 추천 링크로 가입 → 12,800원 웰컴 쿠폰팩", "첫 예약 시 신규회원 할인코드 적용 (최대 10%)", "카드사 할인코드 추가 적용"], result: "신규 가입자 최대 할인 조합", icon: <Trophy className="w-5 h-5" /> },
            { title: "전략 4: 카카오페이 타임드롭 + 호텔 특가", steps: ["매일 오전 10시 또는 오후 6시에 타임드롭 참여", "선착순 최대 4만원 할인쿠폰 수령", "데일리/위클리 호텔 특가와 함께 적용"], result: "특정 시간대 집중 공략으로 최대 할인", icon: <Clock className="w-5 h-5" /> },
          ].map((strategy) => (
            <div key={strategy.title} className="section-card">
              <div className="flex items-center gap-2 mb-3 text-primary">{strategy.icon}<h3 className="font-bold">{strategy.title}</h3></div>
              <ol className="space-y-1.5 text-sm list-decimal list-inside text-muted-foreground mb-3">
                {strategy.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
              <div className="bg-primary/10 rounded-lg p-3 text-sm font-semibold text-primary">→ {strategy.result}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <CtaButton text="지금 할인 전략 적용하기" className="text-lg px-8 py-4" />
        </div>
      </section>

      {/* 예약기간 vs 숙박기간 */}
      <section className="mb-16" aria-labelledby="period-concept">
        <h2 id="period-concept" className="text-2xl font-bold mb-6">예약기간 vs 숙박기간 — 핵심 개념 정리</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="section-card border-l-4 border-primary">
            <h3 className="font-bold mb-2">📅 예약기간 (프로모션 기간)</h3>
            <p className="text-sm text-muted-foreground">할인코드를 입력하여 호텔을 실제 예약할 수 있는 기간. 이 기간 동안만 할인 혜택이 제공됩니다.</p>
          </div>
          <div className="section-card border-l-4 border-accent">
            <h3 className="font-bold mb-2">🏨 숙박기간</h3>
            <p className="text-sm text-muted-foreground">예약한 호텔에 실제로 체크인하여 머무를 수 있는 날짜. 숙박기간을 벗어나면 예약 불가.</p>
          </div>
          <div className="section-card border-l-4 border-primary">
            <h3 className="font-bold mb-2">✈️ 출발기간</h3>
            <p className="text-sm text-muted-foreground">항공권 할인코드의 경우 실제 항공편 출발일이 이 기간 안에 있어야 할인 적용.</p>
          </div>
        </div>
        <div className="section-card mt-4 bg-secondary">
          <h4 className="font-semibold text-sm mb-2">📝 예시</h4>
          <p className="text-xs text-muted-foreground">예약기간: 7월 1일 ~ 7월 31일 / 숙박기간: 8월 1일 ~ 12월 31일<br />→ 반드시 7월 중에 할인코드를 입력하여 예약 완료해야 합니다.<br />→ 7월 31일 이후에는 할인코드 사용 예약 불가.</p>
        </div>
      </section>

      <img src={hotelRoom} alt="호텔 객실" className="hidden" loading="lazy" width={800} height={600} />

      {/* CTA */}
      <section className="mb-8">
        <div className="cta-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">할인 전략을 적용할 준비가 되셨나요?</h2>
          <p className="text-primary-foreground/80 mb-6">전용 링크를 통해 접속하면 모든 할인이 자동 활성화됩니다</p>
          <CtaButton text="지금 할인 적용하기" className="text-lg px-8 py-4 bg-primary-foreground text-accent border-0" />
        </div>
      </section>
    </main>
  </>
);

export default GuidePage;
