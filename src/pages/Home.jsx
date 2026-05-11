import React from "react";

export default function Home() {
  return (
    <div className="bg-[#0f172a] selection:bg-emerald-200">
      {/* 1. 히어로 섹션 (고정 레이어) */}
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-0">
        {/* 배경 디테일: 움직이는 그래디언트 느낌 */}
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-900/30 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-lime-900/20 blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="inline-block text-emerald-400 font-bold tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-down">
            PIONEERING REINFORCED CONCRETE
          </span>
          <h2 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            TAEIL <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">C&T</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl font-light text-slate-300 mb-12 leading-relaxed">
            철근·콘크리트 공학의 <span className="text-white font-medium">새로운 패러다임</span>을 제시하며,<br className="hidden md:block" /> 
            우리는 지속 가능한 미래의 골조를 세웁니다.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="group relative px-10 py-4 bg-emerald-500 text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">사업 실적 보기</span>
              <div className="absolute inset-0 bg-lime-400 transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
            </button>
            <button className="px-10 py-4 border border-white/20 text-white rounded-full font-bold backdrop-blur-sm hover:bg-white hover:text-slate-900 transition-all">
              기술 혁신 리포트
            </button>
          </div>
        </div>
        
        {/* 스크롤 유도 아이콘 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. 콘텐츠 섹션 (덮으면서 올라오는 레이어) */}
      {/* rounded-t 속성과 shadow를 통해 레이어 분리감을 강조합니다. */}
      <section className="relative z-10 bg-slate-50 rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Core Expertise</h3>
              <p className="text-slate-500 text-lg">태일 C&T가 선도하는 전문 건설 솔루션</p>
            </div>
            <div className="h-[2px] flex-1 bg-slate-200 ml-10 mb-4 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Engineering", 
                desc: "최적화된 구조 설계와 정밀한 시공으로 완벽한 품질을 실현합니다.",
                color: "from-emerald-600 to-emerald-800",
                icon: "01"
              },
              { 
                title: "R&D Center", 
                desc: "차세대 콘크리트 공법과 신소재 연구를 통해 한계를 극복합니다.",
                color: "from-lime-500 to-emerald-700",
                icon: "02"
              },
              { 
                title: "Maintenance", 
                desc: "구조물의 생애주기를 고려한 체계적인 유지관리 솔루션을 제공합니다.",
                color: "from-slate-700 to-slate-900",
                icon: "03"
              }
            ].map((item) => (
              <div key={item.title} className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                  <span className="text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                  <div>
                    <h4 className="text-3xl font-bold mb-4">{item.title}</h4>
                    <p className="text-white/80 leading-relaxed translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {item.desc}
                    </p>
                    <div className="mt-6 w-12 h-1 bg-white/50 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}