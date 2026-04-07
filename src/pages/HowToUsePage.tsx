import { Helmet } from "react-helmet-async";
import { CtaButton, CopyCodeButton } from "@/components/DiscountComponents";
import { Monitor, Smartphone, AlertTriangle, CreditCard, RefreshCw, Globe, ShieldCheck } from "lucide-react";
import mobileBooking from "@/assets/mobile-booking.jpg";
import checkoutProcess from "@/assets/checkout-process.jpg";
import creditCards from "@/assets/credit-cards.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import flightView from "@/assets/flight-view.jpg";

const AFFILIATE_LINK = "http://app.ac/9bMm1Dl83";

const HowToUsePage = () => (
  <>
    <Helmet>
      <title>사용방법 가이드 - 트립닷컴 할인코드</title>
      <meta name="description" content="트립닷컴 할인코드 적용 방법을 웹/앱별로 상세 안내합니다. 할인코드가 적용되지 않을 때 해결 방법, 결제 수수료 절약법, 결제 통화 설정까지 한 번에 확인하세요." />
      <link rel="canonical" href="https://trip.couponmonster.co.kr/how-to-use" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "트립닷컴 할인코드 사용 방법",
        "description": "트립닷컴 할인코드를 웹과 앱에서 적용하는 방법",
        "step": [
          { "@type": "HowToStep", "position": 1, "text": "프로모션 전용 링크로 접속합니다." },
          { "@type": "HowToStep", "position": 2, "text": "원하는 상품을 선택합니다." },
          { "@type": "HowToStep", "position": 3, "text": "로그인 후 개인정보를 입력합니다." },
          { "@type": "HowToStep", "position": 4, "text": "결제 페이지에서 할인코드를 입력하고 적용을 클릭합니다." },
          { "@type": "HowToStep", "position": 5, "text": "할인 반영을 확인하고 결제를 완료합니다." },
        ]
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="hero-gradient py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
          트립닷컴 할인코드 사용 방법
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          적용 안될 때 해결법까지 완벽 가이드
        </p>
      </div>
    </section>

    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* 웹 적용 방법 */}
      <section className="mb-16" aria-labelledby="web-method">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <Monitor className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="web-method" className="text-2xl font-bold">웹사이트 (PC) 적용 절차</h2>
        </div>

        <img src={checkoutProcess} alt="트립닷컴 결제 화면에서 할인코드 적용" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="space-y-4">
          {[
            { step: 1, title: "프로모션 전용 링크로 접속", desc: "반드시 해당 할인코드의 전용 링크를 통해 트립닷컴에 접속합니다. 일반 검색이나 직접 URL 입력으로 접속하면 코드가 작동하지 않을 수 있습니다." },
            { step: 2, title: "원하는 상품 선택", desc: "호텔, 항공권, 투어 등 예약할 상품을 선택하고 '예약' 버튼을 클릭합니다." },
            { step: 3, title: "로그인", desc: "트립닷컴 계정으로 로그인합니다. 비회원도 예약 가능하나 할인코드 적용 시 로그인 필수입니다." },
            { step: 4, title: "개인정보 입력", desc: "주문 페이지에서 예약자 정보를 입력합니다." },
            { step: 5, title: "할인코드 입력", desc: "결제(체크아웃) 페이지 하단의 '예약 혜택' 영역에서 '할인코드 선택/입력' 토글을 클릭하여 입력란을 활성화합니다." },
            { step: 6, title: "코드 붙여넣기 → '적용' 클릭", desc: "복사한 할인코드를 입력란에 붙여넣고 '적용' 버튼을 누릅니다." },
            { step: 7, title: "할인 반영 확인", desc: "정상 적용 시 입력란 하단에 쿠폰 정보(할인율, 적용 기간 등)가 표시됩니다. 총 결제 금액에서 할인액이 차감된 것을 확인합니다." },
            { step: 8, title: "결제 완료", desc: "결제수단을 선택하고 '결제하기'를 클릭하여 결제를 완료합니다." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="section-card flex gap-4">
              <span className="step-number">{step}</span>
              <div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3 flex-wrap">
          <CopyCodeButton code="LPHOTEL6" label="호텔 코드 복사" />
          <CtaButton text="지금 할인 적용하기" className="text-sm" />
        </div>
      </section>

      {/* 앱 적용 */}
      <section className="mb-16" aria-labelledby="app-method">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="app-method" className="text-2xl font-bold">모바일 앱 적용 절차</h2>
        </div>

        <img src={mobileBooking} alt="모바일 앱에서 할인코드 적용" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="space-y-4">
          {[
            { step: 1, title: "전용 링크 클릭 → 앱 자동 연동", desc: "프로모션 전용 링크를 클릭하면 트립닷컴 앱이 자동으로 열립니다." },
            { step: 2, title: "앱에서 상품 선택 → 예약 진행", desc: "호텔/항공권/투어 등을 선택합니다." },
            { step: 3, title: "결제 화면에서 할인코드 입력", desc: "결제 화면 하단의 '프로모션 코드' 입력란에 코드를 입력합니다." },
            { step: 4, title: "'적용' 버튼 클릭", desc: "할인 금액이 즉시 반영됩니다." },
            { step: 5, title: "결제 완료", desc: "결제수단을 선택하고 결제를 완료합니다." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="section-card flex gap-4">
              <span className="step-number">{step}</span>
              <div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-card mt-6 border-l-4 border-accent">
          <p className="text-sm font-medium">⚠️ 주의: 앱 전용 코드는 PC 웹에서 입력창이 보이지 않을 수 있습니다. 앱 전용 코드는 반드시 모바일 앱에서 사용하세요.</p>
        </div>

        <div className="section-card mt-4">
          <h3 className="font-bold mb-3">📱 쿠폰함에서 쿠폰 적용하는 방법</h3>
          <ol className="space-y-2 text-sm list-decimal list-inside text-muted-foreground">
            <li>트립닷컴 메인 페이지 우측 상단 "내 정보" 아이콘 클릭</li>
            <li>"할인코드" 페이지로 이동</li>
            <li>복사한 할인코드를 추가하거나, 이미 발급된 쿠폰은 "내 쿠폰함"에서 선택하여 적용</li>
          </ol>
        </div>
      </section>

      {/* 트러블슈팅 */}
      <section className="mb-16" aria-labelledby="troubleshooting">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-destructive flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 id="troubleshooting" className="text-2xl font-bold">할인코드 적용 안 될 때 — 트러블슈팅 가이드</h2>
            <p className="text-sm text-muted-foreground">오류 원인 TOP 7 & 해결법</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { num: 1, title: "프로모션 전용 링크로 접속하지 않은 경우", symptom: '"프로모션 채널 인증에 실패했습니다" 오류 메시지 표시', solution: "해당 코드가 발급된 전용 페이지(제휴 링크)를 먼저 열어 채널 인증을 거친 후 결제를 진행합니다." },
            { num: 2, title: "포털 사이트 '광고'/'스폰서' 링크를 통해 접속한 경우", symptom: "할인코드가 정상적으로 적용되지 않음", solution: "광고 링크가 아닌 프로모션 전용 페이지를 통해 접속하세요." },
            { num: 3, title: "결합상품(항공권+호텔 패키지)에 코드를 적용하려는 경우", symptom: "할인코드 적용 불가", solution: "호텔과 항공권을 각각 따로 예약하고, 각 예약에 맞는 할인코드를 별도로 적용하세요." },
            { num: 4, title: "결제 통화 설정 불일치", symptom: "코드 입력은 되지만 할인이 적용되지 않음", solution: "카드사별 요구 통화 확인: USD(KB국민, 우리, 신한, VISA, Mastercard, 네이버웨일) / KRW(BC카드)" },
            { num: 5, title: "결제수단 불일치 (간편결제 사용 시)", symptom: "카드사 할인코드가 적용되지 않음", solution: "카드사 할인코드 사용 시에는 간편결제가 아닌 해당 카드 번호를 직접 입력하여 결제하세요." },
            { num: 6, title: "유효기간 만료 또는 선착순 소진", symptom: '"유효하지 않은 코드입니다" 또는 "프로모션이 종료되었습니다"', solution: "할인코드의 유효기간을 다시 확인하세요. 선착순 코드는 매월 초에 리셋되는 경우가 많으므로 월초에 시도해보세요." },
            { num: 7, title: "적용 대상 상품 불일치", symptom: "코드 입력 후 할인 미적용", solution: '할인코드의 상세 조건(적용 대상, 최소 결제금액, 숙박일수, 지역 제한 등)을 꼼꼼히 확인하세요. "현장결제(Pay at hotel)" 객실은 쿠폰 적용 불가.' },
          ].map(({ num, title, symptom, solution }) => (
            <details key={num} className="faq-item group">
              <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-secondary transition-colors">
                <span className="step-number text-xs w-7 h-7">{num}</span>
                <span className="font-semibold text-sm flex-1">{title}</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-border">
                <p className="text-sm mb-2"><strong className="text-destructive">증상:</strong> {symptom}</p>
                <p className="text-sm"><strong className="text-primary">해결법:</strong> {solution}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="section-card">
            <h3 className="font-bold mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> 브라우저 문제</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• IE에서는 할인코드 입력 불가 → 크롬/엣지 사용</li>
              <li>• 캐시 문제 → 시크릿 모드(Ctrl+Shift+N) 사용</li>
              <li>• 애드블로커가 프로모션 페이지를 차단할 수 있음</li>
            </ul>
          </div>
          <div className="section-card">
            <h3 className="font-bold mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> 언어/국가 설정</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• 한국어/대한민국 설정으로 두어야 국내 할인코드 참여 가능</li>
              <li>• 일부 프로모션은 결제 통화 변경 필요</li>
            </ul>
          </div>
          <div className="section-card">
            <h3 className="font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> 중복 적용 불가</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• 1회 1건에 할인코드 1개만 사용 가능</li>
              <li>• 트립코인은 할인코드와 동시 사용 가능(일부)</li>
              <li>• 간편결제 프로모션과 중복 적용 불가</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 결제 수수료 절약 */}
      <section className="mb-16" aria-labelledby="fee-saving">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="fee-saving" className="text-2xl font-bold">결제 수수료 절약 가이드</h2>
        </div>

        <img src={creditCards} alt="결제 카드 비교" className="rounded-xl w-full h-48 md:h-64 object-cover mb-8" loading="lazy" width={800} height={600} />

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">⚠️ 트립닷컴은 해외 가맹점</h3>
          <p className="text-sm text-muted-foreground mb-4">아무런 설정 없이 결제하면 카드사 해외 이용 수수료 + 이중 환전 수수료가 발생하여 <strong className="text-destructive">최대 8%까지 추가 비용</strong>이 발생할 수 있습니다.</p>

          <h4 className="font-semibold mb-3">이중 환전(DCC) 수수료란?</h4>
          <div className="bg-secondary rounded-lg p-4 mb-4">
            <p className="text-sm font-mono">원화(결제) → 달러(환전) → 원화(청구) = 약 3~8% 추가 수수료</p>
          </div>

          <h4 className="font-semibold mb-3">결제 방식별 수수료 비교</h4>
          <div className="responsive-table-wrapper">
            <table className="responsive-table table-as-cards">
              <thead><tr><th>결제 방식</th><th>통화</th><th>해외결제 수수료</th><th>이중환전 수수료</th><th>총 추가 비용</th><th>평가</th></tr></thead>
              <tbody>
                <tr>
                  <td data-label="결제 방식">신용/체크카드 USD 결제</td>
                  <td data-label="통화">USD</td>
                  <td data-label="해외결제">약 1~2%</td>
                  <td data-label="이중환전">없음</td>
                  <td data-label="총 추가"><strong className="text-primary">약 1~2%</strong></td>
                  <td><span className="badge-recommended">추천</span></td>
                </tr>
                <tr>
                  <td data-label="결제 방식">신용/체크카드 KRW 결제</td>
                  <td data-label="통화">KRW</td>
                  <td data-label="해외결제">없음</td>
                  <td data-label="이중환전">약 3~8%</td>
                  <td data-label="총 추가"><strong className="text-destructive">약 3~8%</strong></td>
                  <td><span className="badge-hot">비추천</span></td>
                </tr>
                <tr>
                  <td data-label="결제 방식">간편결제 KRW 결제</td>
                  <td data-label="통화">KRW</td>
                  <td data-label="해외결제">없음</td>
                  <td data-label="이중환전">없음</td>
                  <td data-label="총 추가"><strong className="text-primary">0%</strong></td>
                  <td><span className="badge-recommended">추천</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-card mb-6">
          <h3 className="font-bold text-lg mb-4">💡 수수료 절약 방법 4가지</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "USD 결제 설정", desc: "트립닷컴 홈페이지/앱에서 통화를 USD로 변경 후 결제" },
              { title: "DCC 차단 설정", desc: "카드사에 DCC 차단 요청하여 실수로 KRW 결제하는 것 방지" },
              { title: "간편결제 활용", desc: "카카오페이/네이버페이 사용 시 국내 결제로 처리되는 경우 있음" },
              { title: "수수료 무료 카드", desc: "해외결제 수수료가 면제되는 카드 사용" },
            ].map((item) => (
              <div key={item.title} className="bg-secondary rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">💡 결제창에 "국내 결제" 또는 "KCP", "KG이니시스" 등의 문구가 보이면 수수료 없는 국내 결제입니다.</p>
        </div>
      </section>

      {/* 취소/변경 규정 */}
      <section className="mb-16" aria-labelledby="cancel-policy">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 id="cancel-policy" className="text-2xl font-bold">할인코드 취소/변경 시 처리 규정</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="section-card">
            <h3 className="font-bold mb-3">🏨 호텔 할인코드</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>예약 취소 시:</strong> 할인코드는 계정으로 자동 재발행 → 프로모션 기간 내 재사용 가능</li>
              <li><strong>예약 변경 시:</strong> 사용된 할인코드는 더 이상 유효하지 않음 → 취소 후 재예약 필요</li>
              <li><strong>환불 규정:</strong> 상품 옵션(무료 취소 가능 여부)에 따라 다름</li>
            </ul>
          </div>
          <div className="section-card">
            <h3 className="font-bold mb-3">✈️ 항공권 할인코드</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>예약 취소 시:</strong> 항공권의 변경/환불 규정에 따라 할인코드 재사용 가능 여부가 달라짐</li>
              <li>항공권마다 조건이 상이하므로 반드시 해당 항공권의 규정을 먼저 확인</li>
            </ul>
          </div>
        </div>
      </section>

      <img src={hotelRoom} alt="호텔 예약" className="hidden" loading="lazy" width={800} height={600} />
      <img src={flightView} alt="항공 여행" className="hidden" loading="lazy" width={800} height={600} />

      {/* CTA */}
      <section className="mb-8">
        <div className="hero-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">이제 할인코드를 적용해보세요!</h2>
          <p className="text-primary-foreground/80 mb-6">위의 방법대로 전용 링크를 통해 접속하면 할인이 바로 적용됩니다.</p>
          <CtaButton text="지금 할인 적용하기" className="text-lg px-8 py-4" />
        </div>
      </section>
    </main>
  </>
);

export default HowToUsePage;
