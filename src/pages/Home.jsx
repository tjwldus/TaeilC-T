import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef(null);

  // 카운트업 관련
  const [count, setCount] = useState(0);
  const countCardRef = useRef(null);
  const hasAnimated = useRef(false); // 한 번만 실행되도록

  // 패럴랙스 스크롤 효과
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / windowHeight, 1);

      if (videoRef.current) {
        videoRef.current.style.opacity = Math.max(0, 1 - scrollY / (windowHeight * 1.8));
        videoRef.current.style.transform = `scale(${1 + progress * 0.15})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 카운트업 애니메이션
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const target = 31;     // 목표 숫자
            const duration = 3000; // 3초
            const start = performance.now();

            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutQuart - 처음엔 빠르고 끝에 살짝 느려짐
              const eased = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(eased * target));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target); // 정확히 마무리
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 } // 카드가 30% 보이면 시작
    );

    if (countCardRef.current) {
      observer.observe(countCardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-[#111827] selection:bg-[#4E9F6D]/20">

      {/* ================= HERO VIDEO ================= */}
      <section className="sticky top-0 h-screen min-h-[800px] overflow-hidden z-0">

        <div
          ref={videoRef}
          className="absolute inset-0 will-change-transform"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/assets/video/태일씨앤티 회사 소개영상 최종본.webm"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[28px] h-[48px] border border-white/70 rounded-full flex justify-center pt-2">
            <div className="w-[4px] h-[10px] rounded-full bg-white animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ================= 다음 섹션들 ================= */}
      <div className="relative z-10">

        {/* ================= COMPANY ================= */}
        <section className="py-28 md:py-40 bg-white">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

              <div>
                <span className="text-[#4E9F6D] text-sm tracking-[0.35em] font-bold">
                  COMPANY
                </span>

                <h2 className="mt-8 text-4xl md:text-6xl font-black tracking-[-0.05em] leading-tight text-[#111827]">
                  신뢰를 기반으로
                  <br />
                  미래를 건설합니다.
                </h2>

                <div className="mt-12 space-y-8 text-slate-600 text-lg leading-relaxed">
                  <p>
                    태일 C&T는 첨단 건설 기술과 정밀한 시공 역량을 바탕으로
                    인프라·플랜트·스마트 건설 분야의 혁신을 선도합니다.
                  </p>

                  <p>
                    설계부터 시공, 유지관리까지 모든 과정에서
                    최고의 안전성과 품질 기준을 준수하며
                    지속 가능한 미래 가치를 창조합니다.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                    alt="company"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>

                {/* FLOAT CARD - 카운트업 적용 */}
                <div
                  ref={countCardRef}
                  className="absolute -bottom-10 right-0 bg-white border border-black/5 p-8 md:p-10 rounded-[1.5rem] shadow-2xl"
                >
                  <h4 className="text-5xl md:text-6xl font-black text-[#4E9F6D] tabular-nums">
                    {count}+
                  </h4>

                  <p className="mt-4 text-slate-500 text-sm leading-relaxed tracking-wide">
                    YEARS OF EXPERIENCE IN
                    CONSTRUCTION & ENGINEERING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BUSINESS ================= */}
        <section className="py-28 md:py-40 bg-[#F7F9FA]">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

              <div>
                <span className="text-[#4E9F6D] text-sm tracking-[0.35em] font-bold">
                  BUSINESS AREA
                </span>

                <h3 className="mt-8 text-4xl md:text-6xl font-black tracking-[-0.05em] leading-tight text-[#111827]">
                  핵심 사업 분야
                </h3>
              </div>

              <p className="max-w-xl text-slate-500 text-lg leading-relaxed">
                첨단 기술과 스마트 건설 시스템을 기반으로
                다양한 산업 분야에서 최적의 건설 솔루션을 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                { title: "Infrastructure", desc: "도시 인프라 및 복합시설 구축" },
                { title: "Industrial Plant", desc: "산업 플랜트 및 생산시설 시공" },
                { title: "Smart Construction", desc: "BIM 기반 스마트 건설 기술" },
                { title: "Maintenance", desc: "유지관리 및 안전 진단" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-black/5 rounded-[2rem] p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                >
                  <span className="text-[#4E9F6D] text-sm tracking-[0.3em] font-bold">
                    0{idx + 1}
                  </span>

                  <h4 className="mt-8 text-3xl font-black tracking-tight text-[#111827]">
                    {item.title}
                  </h4>

                  <p className="mt-6 text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-10 w-12 h-[2px] bg-[#4E9F6D] group-hover:w-24 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="py-28 md:py-40 bg-white">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10">

            <div className="mb-20">
              <span className="text-[#4E9F6D] text-sm tracking-[0.35em] font-bold">
                PROJECTS
              </span>

              <h3 className="mt-8 text-4xl md:text-6xl font-black tracking-[-0.05em] text-[#111827]">
                대표 프로젝트
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Complex Infrastructure",
                  loc: "SEOUL",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
                },
                {
                  title: "Industrial Plant",
                  loc: "INCHEON",
                  img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
                },
                {
                  title: "Smart Factory",
                  loc: "BUSAN",
                  img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-[2rem] bg-white border border-black/5 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>

                  <div className="p-8 md:p-10">
                    <span className="text-[#4E9F6D] text-sm tracking-[0.25em] font-bold">
                      {item.loc}
                    </span>

                    <h4 className="mt-5 text-3xl font-black tracking-tight text-[#111827]">
                      {item.title}
                    </h4>

                    <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-slate-500 group-hover:text-[#4E9F6D] transition-colors duration-300">
                      VIEW DETAIL
                      <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ESG ================= */}
        <section className="py-28 md:py-40 bg-[#F7F9FA]">

          <div className="max-w-[1600px] mx-auto px-6 md:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              <div>
                <span className="text-[#4E9F6D] text-sm tracking-[0.35em] font-bold">
                  ESG MANAGEMENT
                </span>

                <h3 className="mt-8 text-4xl md:text-6xl font-black tracking-[-0.05em] leading-tight text-[#111827]">
                  지속 가능한
                  <br />
                  미래 건설.
                </h3>

                <p className="mt-10 max-w-xl text-slate-500 text-lg leading-relaxed">
                  태일 C&T는 친환경 건설과 안전 경영,
                  그리고 투명한 기업 운영을 통해
                  지속 가능한 미래 도시를 구축합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "ENVIRONMENT", value: "E", desc: "친환경 건설 및 탄소 저감 기술" },
                  { title: "SOCIAL", value: "S", desc: "안전 중심 경영과 사회적 책임" },
                  { title: "GOVERNANCE", value: "G", desc: "투명한 기업 운영 및 윤리 경영" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-black/5 rounded-[2rem] p-10 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="text-7xl font-black text-[#4E9F6D]">
                      {item.value}
                    </div>

                    <p className="mt-6 text-[#111827] text-sm tracking-[0.25em] font-bold">
                      {item.title}
                    </p>

                    <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}