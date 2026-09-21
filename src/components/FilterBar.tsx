import React from 'react';

interface FilterBarProps {
  activeLevel: string;
  onSelectLevel: (level: string) => void;
  activeDomain: string;
  onSelectDomain: (domain: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeLevel,
  onSelectLevel,
  activeDomain,
  onSelectDomain,
}) => {
  const levels = [
    'Nhập môn Cơ bản',
    'Chuyên sâu Đại học',
    'Tư tưởng Ứng dụng',
    'Đề cương & Tiểu luận',
  ];

  const domains = [
    'Bản thể luận',
    'Nhận thức luận',
    'Biện chứng',
    'Đạo đức học',
    'Thẩm mỹ học',
    'Triết học Chính trị',
  ];

  return (
    <section className="bg-[#f2f4f6] border-b border-[#c6c6cd] py-3.5 sticky top-16 z-40 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Quick Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0 custom-scrollbar">
          {levels.map((level) => {
            const isActive = activeLevel === level;
            return (
              <button
                key={level}
                onClick={() => onSelectLevel(level)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#000000] text-[#ffffff] shadow-xs'
                    : 'bg-[#ffffff] text-[#45464d] border border-[#c6c6cd] hover:border-[#76777d] hover:text-[#191c1e]'
                }`}
              >
                {level}
              </button>
            );
          })}
        </div>

        {/* Domain Chips Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 custom-scrollbar text-[#45464d]">
          <span className="text-[11px] text-[#76777d] hidden lg:inline mr-1 font-semibold uppercase tracking-wider">
            Chủ đề:
          </span>
          {domains.map((domain) => {
            const isActive = activeDomain === domain;
            return (
              <button
                key={domain}
                onClick={() => onSelectDomain(isActive ? '' : domain)}
                className={`px-2.5 py-1 text-xs rounded border transition-colors shrink-0 cursor-pointer ${
                  isActive
                    ? 'border-[#904d00] bg-[#ffdcc3] text-[#6e3900] font-semibold'
                    : 'border-[#c6c6cd] bg-[#ffffff] hover:border-[#904d00] hover:text-[#904d00]'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
