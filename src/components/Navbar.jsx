import { Link } from "react-router-dom";

const navigation = [
  { 
    name: '회사소개', href: '/about', 
    sub: [
      { name: '인사말', href: '/about' },
      { name: '경영이념', href: '/philosophy' },
      { name: '회사연혁', href: '/history' },
      { name: '주거래 시공사', href: '/partners' },
      { name: '인증현황', href: '/cert' },
      { name: '오시는길', href: '/location' }
    ] 
  },
  { 
    name: '사업실적', href: '/business/housing', 
    sub: [
      { name: '주택', href: '/business/housing' },
      { name: '업무시설', href: '/business/office' },
      { name: '교육의료', href: '/business/medical' },
      { name: '플랜트', href: '/business/plant' },
      { name: '초고층', href: '/business/highrise' },
      { name: '판매시설', href: '/business/retail' },
      { name: '기타', href: '/business/etc' }
    ] 
  },
  { name: '홍보센터', href: '/pr', sub: [{ name: 'News', href: '/pr/news' }, { name: '유튜브', href: '/pr/youtube' }] },
  { name: 'ESG경영', href: '/esg', sub: [{ name: '윤리경영', href: '/esg/management' }] },
  { 
    name: '인재채용', href: '/recruit', 
    sub: [
      { name: '직무소개', href: '/recruit/job' }, 
      { name: '인사제도', href: '/recruit/hrsystem' },
      { name: '복리후생', href: '/recruit/welfare' },
      { name: '채용FAQ', href: '/recruit/faq' }
    ] 
  },
];

function Navbar({ isHovered, onMenuClick }) {
  return (
    <>
      {/* 메인 네비게이션 */}
      <nav className="hidden lg:flex items-center h-full">
        <ul className="flex gap-20">
          {navigation.map((item) => (
            <li key={item.name} className="relative h-24 flex items-center group">
              <Link 
                to={item.href}
                className={`text-[24px] font-normal tracking-[-0.06em] transition-colors duration-300 ${
                  // 마우스 호버 여부에 따라 흰색 <-> 진한 회색 전환
                  isHovered ? "text-slate-800" : "text-white"
                } hover:text-emerald-600`}
              >
                {item.name}
              </Link>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-emerald-500 transition-all duration-300 ${isHovered ? "w-0 group-hover:w-full" : "w-0"}`} />
            </li>
          ))}
        </ul>
      </nav>

      {/* 메가 드롭다운 패널 (Navbar 내부에 포함) */}
      <div 
        className={`absolute top-24 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isHovered ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-center">
          <div className="flex gap-20">
            {navigation.map((item) => (
              <div key={item.name} className="w-[100px] flex flex-col gap-5 text-center"> 
                {item.sub?.map((s) => (
                  <Link 
                    key={s.name} 
                    to={s.href} 
                    onClick={onMenuClick}
                    className="text-[17px] font-light text-slate-400 hover:text-emerald-600 transition-all whitespace-nowrap"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;