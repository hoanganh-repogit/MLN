import React, { useRef } from 'react';
import { Philosopher } from '../types';

interface PhilosopherTimelineProps {
  philosophers: Philosopher[];
  onSelectPhilosopher: (philosopher: Philosopher) => void;
}

export const PhilosopherTimeline: React.FC<PhilosopherTimelineProps> = ({
  philosophers,
  onSelectPhilosopher,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-6 md:px-12" id="timeline">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <span className="font-sans text-[11px] text-[#904d00] font-semibold uppercase tracking-wider">
            Lý Luận Kinh Điển &amp; Thực Tiễn Lịch Sử
          </span>
          <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-[#191c1e] mt-1 tracking-tight">
            Các Nhà Kinh Điển &amp; Lãnh Tụ Cách Mạng
          </h2>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <p className="font-sans text-[13px] text-[#45464d] max-w-sm hidden sm:block">
            Bấm vào từng tác giả để xem tác phẩm kinh điển và luận điểm cốt lõi.
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-[#c6c6cd] bg-white flex items-center justify-center text-[#45464d] hover:text-[#904d00] hover:border-[#904d00] transition-colors cursor-pointer"
              title="Cuộn sang trái"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-[#c6c6cd] bg-white flex items-center justify-center text-[#45464d] hover:text-[#904d00] hover:border-[#904d00] transition-colors cursor-pointer"
              title="Cuộn sang phải"
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Timeline Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-6 custom-scrollbar scroll-smooth"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophers.map((phil) => (
            <div
              key={phil.id}
              onClick={() => onSelectPhilosopher(phil)}
              className="bg-[#ffffff] border border-[#c6c6cd] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#904d00] hover:shadow-lg transition-all cursor-pointer group"
            >
              <div>
                {/* Visual Portrait Anchor */}
                <div className="relative h-48 w-full bg-[#191c1e] overflow-hidden">
                  {phil.imageUrl ? (
                    <img
                      src={phil.imageUrl}
                      alt={phil.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-3xl font-bold text-[#ffdcc3]">
                      {phil.symbol}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[#ffdcc3] border border-[#ffdcc3]/30 font-mono">
                      {phil.era}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[11px] text-white/80 block font-sans">
                      {phil.location}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h4 className="font-serif text-[18px] font-bold text-[#191c1e] group-hover:text-[#904d00] transition-colors leading-tight">
                    {phil.name}
                  </h4>
                  <span className="font-sans text-[11px] text-[#76777d] block mb-2 font-medium">
                    {phil.school}
                  </span>
                  <p className="font-serif text-[13px] text-[#45464d] italic line-clamp-3 leading-relaxed">
                    "{phil.quote}"
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <div className="pt-3 border-t border-[#c6c6cd] text-[11px] text-[#76777d] flex items-center justify-between">
                  <span className="line-clamp-1 font-medium text-[#191c1e]">
                    Tác phẩm: {phil.masterpiece.split(',')[0]}
                  </span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 text-[#904d00] transition-opacity">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
