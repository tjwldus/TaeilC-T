export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-white text-2xl font-bold mb-6 italic">
              TAEIL <span className="text-emerald-500">CNT</span>
            </h2>
            <p className="max-w-sm mb-6 leading-relaxed text-sm">
              우리는 정직과 신뢰를 바탕으로 사람을 위한 가치를 짓습니다.
              건설 그 이상의 감동을 선사하겠습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-2">
                <li>TEL: 070-8897-0761</li>
                <li>FAX: 02-2101-2141</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Office</h4>
              <p>서울시 금천구 가산디지털2로 101</p>
              <p>한라원앤원타워 B동 17층 1701호</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} TAEILCNT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-emerald-400 cursor-pointer">개인정보처리방침</span>
            <span className="hover:text-emerald-400 cursor-pointer">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
