import React from 'react';
import { Tradition } from '../types';

interface BentoTraditionsProps {
  traditions: Tradition[];
  onSelectTradition: (tradition: Tradition) => void;
  filterDomain?: string;
}

export const BentoTraditions: React.FC<BentoTraditionsProps> = ({
  traditions,
  onSelectTradition,
  filterDomain,
}) => {
  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-6 md:px-12" id="schools">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="font-sans text-[11px] text-[#904d00] font-semibold uppercase tracking-wider">
            Khung Chương Trình Học Phần Chuẩn Hóa
          </span>
          <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-[#191c1e] mt-1 tracking-tight">
            Các Trụ Cột Lý Luận Trọng Tâm (Chương III - Phần III)
          </h2>
        </div>
      </div>

      {filterDomain && (
        <div className="mb-6 flex items-center gap-2 px-3 py-1.5 bg-[#ffdcc3] text-[#6e3900] rounded-md text-xs font-medium w-fit">
          <span className="material-symbols-outlined text-sm">filter_alt</span>
          <span>Đang lọc theo chuyên đề: <strong>{filterDomain}</strong></span>
        </div>
      )}

      {/* Dynamic Bento Grid Structure for 6 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {traditions.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="bg-[#ffffff] border border-[#c6c6cd] rounded-lg p-6 relative flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#904d00] transition-colors rounded-t-lg"></div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-2.5 py-0.5 rounded bg-[#f2f4f6] text-[11px] font-sans font-medium text-[#904d00] border border-[#c6c6cd]">
                  {item.era}
                </span>
                <span className="material-symbols-outlined text-[#76777d] group-hover:text-[#904d00] transition-colors">
                  {item.icon || 'menu_book'}
                </span>
              </div>
              <h3 className="font-serif text-[19px] md:text-[21px] font-bold text-[#191c1e] mb-2 leading-tight group-hover:text-[#904d00] transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-[13px] text-[#45464d] mb-4 leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <div className="text-xs text-[#76777d] space-y-1.5 py-3 border-y border-[#c6c6cd]/70 mb-4 bg-[#fcfcfd] px-3 rounded">
                <div>
                  <strong className="text-[#191c1e]">Nhà kinh điển:</strong> {item.representatives.join(', ')}
                </div>
                <div>
                  <strong className="text-[#191c1e]">Từ khóa cốt lõi:</strong> {item.keyConcepts.join(' • ')}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#f2f4f6]">
              <span className="text-[11px] text-[#76777d] font-mono">
                {item.syllabus?.length || 5} mục luận điểm
              </span>
              <button
                onClick={() => onSelectTradition(item)}
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#904d00] hover:text-[#663500] group-hover:underline cursor-pointer"
              >
                <span>Xem luận giải</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
