import React from 'react';

interface FooterProps {
  onOpenLexicon: () => void;
  onExploreMap: () => void;
  onShowToast?: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLexicon,
  onExploreMap,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191c1e] text-[#e2e2e6] border-t border-[#45464d]/60 full-width selection:bg-[#904d00] selection:text-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
          {/* Cột 1: Nhận diện & Mục đích slide tương tác */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2d3133] to-[#45464d] text-[#ffdcc3] border border-[#ffdcc3]/30 flex items-center justify-center font-serif text-lg font-bold shadow-sm select-none">
                Σ
              </div>
              <div>
                <span className="font-serif text-[18px] font-bold text-white block leading-tight">
                  Triết Học Mác - Lênin
                </span>
                <span className="text-[10px] font-sans font-semibold tracking-[0.18em] text-[#ffb77d] uppercase block leading-tight mt-0.5">
                  Web Slide Thuyết Trình Tương Tác
                </span>
              </div>
            </div>

            <p className="font-sans text-[13px] text-[#c6c6cd] leading-relaxed max-w-lg">
              Tài liệu trực quan hoá phục vụ thuyết trình và học tập học phần Triết học Mác - Lênin. Hỗ trợ hệ thống hoá luận điểm, tra cứu thuật ngữ và sơ đồ biện chứng.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenLexicon}
                className="inline-flex items-center gap-1.5 text-xs text-[#ffb77d] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">menu_book</span>
                Tra cứu Thuật ngữ
              </button>
              <span className="text-[#76777d]">•</span>
              <button
                onClick={onExploreMap}
                className="inline-flex items-center gap-1.5 text-xs text-[#ffb77d] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">account_tree</span>
                Phả hệ Triết gia
              </button>
            </div>
          </div>

          {/* Cột 2: Sơ lược thông tin môn học */}
          <div className="space-y-3 md:pl-8 md:border-l border-[#45464d]/60">
            <span className="font-sans text-[11px] text-[#ffb77d] uppercase tracking-wider font-bold block">
              Thông tin học phần
            </span>

            <div className="space-y-2 text-[13px] font-sans text-[#c6c6cd]">
              <div className="flex items-center gap-2">
                <span className="text-[#909094] w-28 shrink-0 text-xs">Môn học:</span>
                <span className="text-white font-medium">Triết học Mác - Lênin (MLN111 / MLN122)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#909094] w-28 shrink-0 text-xs">Chuyên đề:</span>
                <span className="text-white">Chương III: Nhà nước &amp; Cách mạng xã hội</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#909094] w-28 shrink-0 text-xs">Đơn vị đào tạo:</span>
                <span className="text-white">Trường Đại học FPT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thanh bản quyền & Nút trở về đầu trang */}
        <div className="pt-6 border-t border-[#45464d]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#909094]">
          <p>
            © 2026 Trường Đại học FPT • Học phần Triết học Mác - Lênin
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#ffdcc3] hover:text-white transition-colors cursor-pointer py-1 px-3 rounded hover:bg-[#2d3133]"
          >
            <span>Trở về đầu trang</span>
            <span className="text-sm">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
