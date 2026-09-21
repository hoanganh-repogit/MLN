import React, { useState } from 'react';

interface TopNavBarProps {
  activeNav: string;
  onSelectNav: (nav: string) => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeNav,
  onSelectNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'state-origin', label: '1. Bản chất Nhà nước' },
    { id: 'state-features', label: '2. Đặc trưng Cơ bản' },
    { id: 'state-types', label: '3. Kiểu & Chức năng' },
    { id: 'revolution-nature', label: '4. Cách mạng Xã hội' },
    { id: 'revolution-methods', label: '5. Tình thế & Thời cơ' },
    { id: 'contemporary-era', label: '6. Thời đại & Việt Nam' },
  ];

  return (
    <header className="bg-[#ffffff]/95 backdrop-blur-md border-b border-[#c6c6cd]/70 sticky top-0 z-50 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo - Học phần Triết học Mác - Lênin */}
        <a
          href="#"
          className="flex items-center gap-3.5 focus:outline-none group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* Refined Academic Seal */}
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#191c1e] to-[#2d3133] text-[#ffdcc3] border border-[#904d00]/30 flex items-center justify-center font-serif text-2xl font-bold shadow-xs select-none transition-transform duration-300 group-hover:scale-105">
            <span className="material-symbols-outlined text-2xl text-[#ffdcc3]">menu_book</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-[18px] md:text-[20px] font-bold tracking-tight text-[#191c1e] leading-tight block group-hover:text-[#904d00] transition-colors">
              Triết Học Mác - Lênin
            </span>
            <span className="text-[10px] md:text-[11px] font-sans font-semibold tracking-[0.16em] text-[#904d00] uppercase block leading-tight mt-1">
              CHƯƠNG III: NHÀ NƯỚC &amp; CÁCH MẠNG XÃ HỘI
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Cleanly positioned on the right */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectNav(item.id)}
                className={`font-sans text-[13px] font-medium transition-all duration-200 py-1.5 relative cursor-pointer ${
                  isActive
                    ? 'text-[#904d00] font-semibold'
                    : 'text-[#45464d] hover:text-[#191c1e]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#904d00] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 text-[#45464d] hover:text-[#191c1e] hover:bg-[#f2f4f6] rounded-lg transition-colors cursor-pointer"
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#c6c6cd]/80 bg-white px-6 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectNav(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#ffdcc3]/40 text-[#904d00] font-bold'
                    : 'text-[#191c1e] hover:bg-[#f2f4f6]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
