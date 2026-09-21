import React from 'react';

interface HeroSectionProps {
  onStartLesson: () => void;
  onExploreMap: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLesson,
  onExploreMap,
}) => {
  return (
    <section className="relative bg-[#ffffff] border-b border-[#c6c6cd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Intellectual Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f2f4f6] border border-[#c6c6cd] rounded-full text-[#904d00]">
              <span className="material-symbols-outlined text-sm">menu_book</span>
              <span className="font-sans text-[11px] tracking-wider uppercase font-semibold">
                Chương III: Chủ nghĩa Duy vật Lịch sử • Phần III
              </span>
            </div>

            <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] text-[#191c1e] leading-[1.18] tracking-tight">
              Học Thuyết Về Nhà Nước &amp;{' '}
              <span className="italic text-[#904d00] font-serif">
                Cách Mạng Xã Hội
              </span>
            </h1>

            <p className="font-sans text-[16px] md:text-[17px] text-[#45464d] leading-[1.65] max-w-xl">
              Nền tảng slide web tương tác trực quan hoá hệ thống luận điểm triết học Mác - Lênin. Phân tích nguyên nhân kinh tế sâu xa và trực tiếp của sự ra đời nhà nước, 3 đặc trưng, 4 kiểu nhà nước lịch sử, cùng quy luật vận động, tình thế và thời cơ của cách mạng xã hội.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onStartLesson}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#904d00] text-white rounded font-sans text-[14px] font-semibold hover:bg-[#663500] transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Bắt đầu xem Slide tương tác</span>
                <span className="material-symbols-outlined text-lg">play_circle</span>
              </button>
              <button
                onClick={onExploreMap}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#c6c6cd] rounded font-sans text-[14px] font-semibold text-[#191c1e] hover:bg-[#f2f4f6] transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg text-[#904d00]">timeline</span>
                <span>Dòng chảy Tư tưởng &amp; Lịch sử</span>
              </button>
            </div>
          </div>

          {/* Right: Visual Anchor Artwork with Classic Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#c6c6cd] shadow-md group bg-gradient-to-br from-[#191c1e] to-[#2d3133]">
              <img
                alt="Ba nhà kinh điển triết học Mác, Ăngghen và Lênin"
                className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-105 opacity-90"
                src="/images/marxism_hero.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#ffdcc3]/20 text-[11px] font-sans text-[#ffdcc3] uppercase tracking-wider font-semibold border border-[#ffdcc3]/30">
                    Luận điểm kinh điển cốt lõi
                  </span>
                </div>
                <p className="font-serif text-[16px] md:text-[18px] italic font-light leading-snug">
                  "Nhà nước là một cơ quan thống trị giai cấp, là một cơ quan áp bức của một giai cấp này đối với một giai cấp khác; đó là sự kiến lập một trật tự, trật tự này hợp pháp hóa và củng cố sự áp bức kia bằng cách làm dịu xung đột giai cấp."
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
                  <span className="font-sans text-[12px] text-[#ffdcc3] font-medium">
                    — Nhà nước và cách mạng
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
