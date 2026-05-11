import { Link } from "react-router-dom";
import { useState } from "react";
import OptimizedImage from "./OptimizedImage"; 
import Navbar from "./Navbar";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isHovered ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1600px] mx-auto px-12 relative">
        <div className="flex justify-between items-center h-24">
          
          {/* 로고 영역 */}
          <Link to="/" className="flex items-center w-48">
            <div className="h-40 flex items-center"> 
              <OptimizedImage 
                src="태일-로고-removebg-preview.webp" 
                alt="태일씨앤티" 
                className="h-full w-auto object-contain" 
              />
            </div>
          </Link>

          {/* 분리한 Navbar 컴포넌트 (드롭다운까지 이 안에 다 있음) */}
          <Navbar isHovered={isHovered} onMenuClick={() => setIsHovered(false)} />

          {/* 우측 유틸리티 */}
          <div className="hidden lg:flex items-center justify-end gap-6 w-48 text-[15px] font-light text-slate-300">
            <button className="hover:text-slate-900 transition-colors uppercase">KR</button>
            <span>|</span>
            <button className="hover:text-slate-900 transition-colors uppercase">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;