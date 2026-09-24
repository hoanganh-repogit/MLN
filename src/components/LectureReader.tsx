import React, { useState } from 'react';
import { LectureChapter, ReaderSettings } from '../types';
import { resolveAssetUrl } from '../utils/asset';

interface LectureReaderProps {
  chapters: LectureChapter[];
  activeChapterIndex: number;
  onSelectChapterIndex: (index: number) => void;
  onOpenLexiconModal: (term?: string) => void;
  onOpenReaderSettings: () => void;
  readerSettings: ReaderSettings;
  onShowToast: (msg: string) => void;
}

export const LectureReader: React.FC<LectureReaderProps> = ({
  chapters,
  activeChapterIndex,
  onSelectChapterIndex,
  onOpenLexiconModal,
  onOpenReaderSettings,
  readerSettings,
}) => {
  // Interactive diagram state: allows exploring 3 core Marxist models
  const [activeModelTab, setActiveModelTab] = useState<'origin' | 'functions' | 'situation'>('origin');
  const [selectedOriginStep, setSelectedOriginStep] = useState<'economic' | 'class' | 'state'>('class');
  const [selectedFunctionType, setSelectedFunctionType] = useState<'political' | 'social'>('political');
  const [selectedLeninSign, setSelectedLeninSign] = useState<1 | 2 | 3>(1);

  const currentChapter = chapters[activeChapterIndex] || chapters[0];
  const progressPercent = Math.round(((activeChapterIndex + 1) / chapters.length) * 100);

  // Typography styles based on reader settings
  const getFontSizeClass = () => {
    switch (readerSettings.fontSize) {
      case 'small':
        return 'text-[15px] leading-[25px]';
      case 'large':
        return 'text-[19px] leading-[32px]';
      case 'xlarge':
        return 'text-[21px] leading-[36px]';
      default:
        return 'text-[16px] md:text-[17px] leading-[29px]';
    }
  };

  const getFontFamilyClass = () => {
    return readerSettings.fontFamily === 'serif' ? 'font-serif' : 'font-sans';
  };

  const getThemeClasses = () => {
    switch (readerSettings.theme) {
      case 'sepia':
        return 'bg-[#fbf0d9] text-[#2c221e] border-[#dfd2be]';
      case 'dark':
        return 'bg-[#1a1d20] text-[#e3e6e8] border-[#363a3e]';
      default:
        return 'bg-[#ffffff] text-[#191c1e] border-[#c6c6cd]';
    }
  };

  return (
    <section className="py-16 bg-[#fcfcfd] border-y border-[#c6c6cd]" id="interactive-lecture">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-[11px] text-[#904d00] font-semibold tracking-wider uppercase">
            Không Gian Slide Thuyết Trình Tương Tác
          </span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#191c1e] mt-1 tracking-tight">
            Chuyên Đề Trực Quan: Nhà Nước &amp; Cách Mạng Xã Hội
          </h2>
          <p className="font-sans text-[14px] md:text-[15px] text-[#45464d] mt-2 leading-relaxed">
            Hệ thống hóa toàn bộ nội dung giáo trình qua 6 slide bài học tương tác. Bấm chọn mục lục, tương tác với các mô hình lý luận và tra cứu định nghĩa thuật ngữ tức thì.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Spine: Sticky Outline & Glossary Context */}
          <aside className="lg:col-span-4 bg-[#f2f4f6] border border-[#c6c6cd] rounded-lg p-6 space-y-6 lg:sticky lg:top-28">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-sans text-[12px] font-bold text-[#191c1e] uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#904d00]">view_carousel</span>
                  Mục lục 6 Slide Chuyên đề
                </h4>
                <span className="text-[11px] font-mono text-[#904d00] font-bold">
                  {activeChapterIndex + 1} / {chapters.length}
                </span>
              </div>
              <ul className="space-y-1.5 text-[13px] font-sans">
                {chapters.map((chap, idx) => {
                  const isActive = activeChapterIndex === idx;
                  return (
                    <li
                      key={chap.id}
                      onClick={() => onSelectChapterIndex(idx)}
                      className={`pl-3 border-l-2 cursor-pointer transition-all py-1.5 rounded-r ${
                        isActive
                          ? 'border-[#904d00] font-semibold text-[#904d00] bg-white shadow-xs'
                          : 'border-transparent text-[#45464d] hover:text-[#191c1e] hover:bg-white/60'
                      }`}
                    >
                      <div className="font-medium text-[13px]">{chap.title}</div>
                      <div className="text-[11px] text-[#76777d] truncate mt-0.5">{chap.subtitle}</div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Dynamic Lexicon preview */}
            <div className="pt-4 border-t border-[#c6c6cd]">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-sans text-[12px] font-bold text-[#191c1e] uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#904d00]">menu_book</span>
                  Thuật ngữ liên kết
                </h4>
                <button
                  onClick={() => onOpenLexiconModal(currentChapter.lexiconKey)}
                  className="text-[11px] text-[#904d00] hover:underline font-semibold cursor-pointer"
                >
                  Mở Từ điển
                </button>
              </div>
              <div
                onClick={() => onOpenLexiconModal(currentChapter.lexiconKey)}
                className="bg-[#ffffff] p-3.5 rounded border border-[#c6c6cd] space-y-1.5 cursor-pointer hover:border-[#904d00] transition-colors group shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[12px] font-bold text-[#191c1e] group-hover:text-[#904d00]">
                    {currentChapter.lexiconKey}
                  </span>
                  <span className="material-symbols-outlined text-sm text-[#76777d] group-hover:text-[#904d00]">
                    open_in_new
                  </span>
                </div>
                <p className="font-sans text-[12px] text-[#45464d] leading-relaxed line-clamp-3">
                  {currentChapter.lexiconDefinition}
                </p>
              </div>
            </div>

            {/* Presentation Navigation Helper */}
            <div className="pt-2 flex items-center justify-between border-t border-[#c6c6cd] text-xs">
              <button
                disabled={activeChapterIndex === 0}
                onClick={() => onSelectChapterIndex(activeChapterIndex - 1)}
                className="px-3 py-1.5 rounded border border-[#c6c6cd] bg-white text-[#191c1e] hover:bg-[#f2f4f6] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 font-medium"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>Slide trước</span>
              </button>
              <button
                disabled={activeChapterIndex === chapters.length - 1}
                onClick={() => onSelectChapterIndex(activeChapterIndex + 1)}
                className="px-3 py-1.5 rounded bg-[#904d00] text-white hover:bg-[#663500] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 font-medium"
              >
                <span>Slide kế tiếp</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </aside>

          {/* Right Main Column: Scholarly Reader Canvas */}
          <article className="lg:col-span-8 space-y-8">
            <div className={`rounded-xl border p-6 md:p-10 shadow-sm transition-all duration-300 ${getThemeClasses()}`}>
              {/* Reader Header Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-inherit mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#f2f4f6] text-[11px] font-mono uppercase tracking-wider text-[#904d00] border border-[#c6c6cd]">
                    {currentChapter.chapterNumber}
                  </span>
                  <span className="font-sans text-[12px] text-[#76777d] ml-2">
                    {currentChapter.readTime}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={onOpenReaderSettings}
                    className="p-2 rounded hover:bg-black/5 text-inherit transition-colors cursor-pointer"
                    title="Tùy chỉnh hiển thị (Phông chữ, cỡ chữ, nền đọc)"
                  >
                    <span className="material-symbols-outlined text-xl">tune</span>
                  </button>
                  <button
                    onClick={() => onOpenLexiconModal(currentChapter.lexiconKey)}
                    className="px-2.5 py-1 text-xs border border-inherit rounded hover:bg-black/5 flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <span className="material-symbols-outlined text-sm text-[#904d00]">menu_book</span>
                    <span>Từ điển</span>
                  </button>
                </div>
              </div>

              {/* Chapter Title & Subtitle */}
              <div className="space-y-3 mb-8">
                <h1 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] font-bold text-inherit leading-[1.22] tracking-tight">
                  {currentChapter.title}
                </h1>
                <p className="font-sans text-[14px] md:text-[16px] text-[#76777d] leading-relaxed">
                  {currentChapter.subtitle}
                </p>
              </div>

              {/* Classic Marxist Epigraph Quote */}
              <blockquote className="my-8 pl-5 border-l-4 border-[#904d00] bg-black/[0.02] py-4 pr-4 rounded-r">
                <div className="flex items-start gap-3.5">
                  {currentChapter.authorImageUrl && (
                    <img
                      src={resolveAssetUrl(currentChapter.authorImageUrl)}
                      alt={currentChapter.quoteAuthor}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top border-2 border-[#904d00]/30 shadow-xs shrink-0 mt-0.5"
                    />
                  )}
                  <div className="space-y-2 flex-1">
                    <p className="font-serif text-[15px] md:text-[17px] italic text-inherit leading-relaxed">
                      "{currentChapter.quote}"
                    </p>
                    <footer className="font-sans text-[12px] text-[#904d00] font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">menu_book</span>
                      <span>{currentChapter.quoteAuthor}</span>
                    </footer>
                  </div>
                </div>
              </blockquote>

              {/* Main Content Flow */}
              <div className={`space-y-4 ${getFontFamilyClass()} ${getFontSizeClass()} leading-relaxed`}>
                {currentChapter.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Interactive Visualized Argument Models Section */}
              <div className="mt-10 p-6 bg-black/[0.03] rounded-xl border border-inherit space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-inherit">
                  <div>
                    <span className="font-sans text-[11px] text-[#904d00] uppercase font-bold tracking-wider block">
                      Mô hình hoá luận điểm
                    </span>
                    <h3 className="font-serif text-[17px] font-bold text-[#191c1e]">
                      Sơ Đồ Biện Chứng Tương Tác
                    </h3>
                  </div>

                  {/* Model Selector Tabs */}
                  <div className="flex items-center gap-1 bg-white/80 p-1 rounded-lg border border-[#c6c6cd] text-xs">
                    <button
                      onClick={() => setActiveModelTab('origin')}
                      className={`px-2.5 py-1 rounded font-medium cursor-pointer transition-colors ${
                        activeModelTab === 'origin' ? 'bg-[#904d00] text-white' : 'text-[#45464d] hover:text-[#191c1e]'
                      }`}
                    >
                      Nguồn gốc Nhà nước
                    </button>
                    <button
                      onClick={() => setActiveModelTab('functions')}
                      className={`px-2.5 py-1 rounded font-medium cursor-pointer transition-colors ${
                        activeModelTab === 'functions' ? 'bg-[#904d00] text-white' : 'text-[#45464d] hover:text-[#191c1e]'
                      }`}
                    >
                      Chức năng Nhà nước
                    </button>
                    <button
                      onClick={() => setActiveModelTab('situation')}
                      className={`px-2.5 py-1 rounded font-medium cursor-pointer transition-colors ${
                        activeModelTab === 'situation' ? 'bg-[#904d00] text-white' : 'text-[#45464d] hover:text-[#191c1e]'
                      }`}
                    >
                      Tình thế Cách mạng
                    </button>
                  </div>
                </div>

                {/* Model 1: Nguồn gốc 2 tầng của Nhà nước */}
                {activeModelTab === 'origin' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#76777d]">
                      Bấm vào từng khối để xem phân tích nguyên nhân kinh tế sâu xa và nguyên nhân trực tiếp dẫn tới sự xuất hiện của nhà nước:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div
                        onClick={() => setSelectedOriginStep('economic')}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedOriginStep === 'economic'
                            ? 'bg-white border-[#904d00] ring-2 ring-[#904d00]/20 shadow-xs'
                            : 'bg-white/60 border-[#c6c6cd] hover:border-[#904d00]'
                        }`}
                      >
                        <span className="text-[10px] font-sans font-bold uppercase text-[#904d00] block mb-1">
                          Tầng 1 • Kinh tế sâu xa
                        </span>
                        <h4 className="font-serif text-[15px] font-bold text-[#191c1e]">
                          LLSX phát triển &amp; Chế độ Tư hữu
                        </h4>
                        <p className="text-xs text-[#45464d] mt-1 line-clamp-2">
                          Công cụ lao động cải tiến, xuất hiện của cải dư thừa tương đối, công xã nguyên thủy tan rã.
                        </p>
                      </div>

                      <div
                        onClick={() => setSelectedOriginStep('class')}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedOriginStep === 'class'
                            ? 'bg-white border-[#904d00] ring-2 ring-[#904d00]/20 shadow-xs'
                            : 'bg-white/60 border-[#c6c6cd] hover:border-[#904d00]'
                        }`}
                      >
                        <span className="text-[10px] font-sans font-bold uppercase text-[#904d00] block mb-1">
                          Tầng 2 • Xã hội trực tiếp
                        </span>
                        <h4 className="font-serif text-[15px] font-bold text-[#191c1e]">
                          Mâu thuẫn giai cấp gay gắt
                        </h4>
                        <p className="text-xs text-[#45464d] mt-1 line-clamp-2">
                          Xã hội phân hóa thành giai cấp bóc lột và bị bóc lột; xung đột đối kháng không thể điều hòa.
                        </p>
                      </div>

                      <div
                        onClick={() => setSelectedOriginStep('state')}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedOriginStep === 'state'
                            ? 'bg-[#191c1e] text-white border-[#191c1e] ring-2 ring-[#ffdcc3]/30 shadow-xs'
                            : 'bg-[#2d3133] text-white/90 hover:bg-[#191c1e]'
                        }`}
                      >
                        <span className="text-[10px] font-sans font-bold uppercase text-[#ffdcc3] block mb-1">
                          Kết quả lịch sử tất yếu
                        </span>
                        <h4 className="font-serif text-[15px] font-bold text-white">
                          Nhà nước Ra Đời
                        </h4>
                        <p className="text-xs text-white/80 mt-1 line-clamp-2">
                          Thiết lập công cụ bạo lực đứng trên xã hội để duy trì xung đột trong vòng "trật tự".
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-[#c6c6cd] text-xs leading-relaxed text-[#191c1e]">
                      {selectedOriginStep === 'economic' && (
                        <p>
                          <strong>Phân tích Nguyên nhân sâu xa:</strong> Cuối thời kỳ cộng sản nguyên thủy, sự phát triển của công cụ lao động bằng kim loại đã làm tăng năng suất lao động, dẫn đến có của cải dư thừa tương đối. Chế độ công hữu nguyên thủy bị phá vỡ, tư liệu sản xuất rơi vào tay một số ít người, xác lập chế độ tư hữu.
                        </p>
                      )}
                      {selectedOriginStep === 'class' && (
                        <p>
                          <strong>Phân tích Nguyên nhân trực tiếp:</strong> Chế độ tư hữu làm xã hội phân chia thành các giai cấp đối kháng: chủ nô và nô lệ. Sự bóc lột dẫn tới các cuộc khởi nghĩa của giai cấp bị trị. V.I. Lênin khẳng định: Sự tồn tại của nhà nước chứng tỏ rằng mâu thuẫn giai cấp là không thể điều hòa được.
                        </p>
                      )}
                      {selectedOriginStep === 'state' && (
                        <p>
                          <strong>Kết luận về Bản chất Nhà nước:</strong> Nhà nước ra đời không phải để hòa giải giai cấp mà để duy trì trật tự có lợi cho giai cấp thống trị về kinh tế. Đó là một bộ máy của một giai cấp dùng để trấn áp một giai cấp khác.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Model 2: Mối quan hệ Chức năng Thống trị & Chức năng Xã hội */}
                {activeModelTab === 'functions' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#76777d]">
                      Khám phá tính hai mặt hữu cơ giữa Chức năng Thống trị Chính trị và Chức năng Xã hội của nhà nước:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                        onClick={() => setSelectedFunctionType('political')}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedFunctionType === 'political'
                            ? 'bg-white border-[#904d00] ring-2 ring-[#904d00]/20'
                            : 'bg-white/60 border-[#c6c6cd] hover:border-[#904d00]'
                        }`}
                      >
                        <span className="text-[11px] font-sans font-bold uppercase text-[#904d00] block mb-1">
                          Vai trò quyết định, chi phối
                        </span>
                        <h4 className="font-serif text-[16px] font-bold text-[#191c1e]">
                          1. Chức năng Thống trị Chính trị
                        </h4>
                        <p className="text-xs text-[#45464d] mt-1.5 leading-relaxed">
                          Sử dụng bộ máy quyền lực (quân đội, cảnh sát, tòa án, pháp luật) để đàn áp sự phản kháng của giai cấp bị trị, bảo vệ địa vị và lợi ích của giai cấp cầm quyền.
                        </p>
                      </div>

                      <div
                        onClick={() => setSelectedFunctionType('social')}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedFunctionType === 'social'
                            ? 'bg-white border-[#904d00] ring-2 ring-[#904d00]/20'
                            : 'bg-white/60 border-[#c6c6cd] hover:border-[#904d00]'
                        }`}
                      >
                        <span className="text-[11px] font-sans font-bold uppercase text-[#904d00] block mb-1">
                          Cơ sở nền tảng tồn tại
                        </span>
                        <h4 className="font-serif text-[16px] font-bold text-[#191c1e]">
                          2. Chức năng Xã hội
                        </h4>
                        <p className="text-xs text-[#45464d] mt-1.5 leading-relaxed">
                          Nhân danh xã hội quản lý công việc chung: đê điều, thủy lợi, giao thông, y tế, giáo dục để duy trì trật tự cộng đồng.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-[#c6c6cd] text-xs leading-relaxed">
                      <strong className="text-[#904d00]">Luận chứng biện chứng của Ph.Ăngghen:</strong> "Chức năng xã hội là cơ sở của sự thống trị chính trị; và sự thống trị chính trị cũng chỉ kéo dài chừng nào nó còn thực hiện chức năng xã hội đó của nó." Nếu chính quyền nào không chăm lo chức năng xã hội (như các nền chuyên chế Ba Tư, Ấn Độ cổ đại bỏ bê tưới tiêu) thì sự thống trị chính trị tất yếu sẽ sụp đổ.
                    </div>
                  </div>
                )}

                {/* Model 3: Ba Dấu Hiệu Tình Thế Cách Mạng (V.I. Lênin) */}
                {activeModelTab === 'situation' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#76777d]">
                      Theo tác phẩm "Sự phá sản của Quốc tế II", V.I. Lênin chỉ rõ 3 dấu hiệu khách quan của Tình thế Cách mạng:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          onClick={() => setSelectedLeninSign(num as 1 | 2 | 3)}
                          className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                            selectedLeninSign === num
                              ? 'bg-white border-[#904d00] ring-2 ring-[#904d00]/20 shadow-xs'
                              : 'bg-white/60 border-[#c6c6cd] hover:border-[#904d00]'
                          }`}
                        >
                          <span className="text-[10px] font-sans font-bold text-[#904d00] block mb-1">
                            DẤU HIỆU {num}
                          </span>
                          <h4 className="font-serif text-[14px] font-bold text-[#191c1e]">
                            {num === 1 && 'Khủng hoảng Tầng lớp Trên'}
                            {num === 2 && 'Nỗi cùng khổ Tầng lớp Dưới'}
                            {num === 3 && 'Tính tích cực của Quần chúng'}
                          </h4>
                          <p className="text-[11px] text-[#45464d] mt-1">
                            {num === 1 && 'Giai cấp thống trị không thể giữ nguyên nền thống trị cũ.'}
                            {num === 2 && 'Nỗi khốn cùng của nhân dân nặng nề hơn bình thường.'}
                            {num === 3 && 'Quần chúng bị đẩy tới hành động lịch sử độc lập.'}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 bg-[#191c1e] text-white rounded-lg border border-[#45464d] text-xs leading-relaxed">
                      <strong className="text-[#ffdcc3]">Liên hệ thực tiễn Cách mạng Tháng Tám 1945 tại Việt Nam:</strong>
                      {selectedLeninSign === 1 && (
                        <p className="mt-1 text-white/90">
                          Nhật đảo chính Pháp (9/3/1945), sau đó phát xít Nhật đầu hàng quân Đồng minh. Bộ máy cai trị phát xít - thực dân bị rệu rã, tê liệt, không thể cai trị như cũ.
                        </p>
                      )}
                      {selectedLeninSign === 2 && (
                        <p className="mt-1 text-white/90">
                          Nạn đói khủng khiếp năm Ất Dậu làm hơn 2 triệu đồng bào miền Bắc chết đói. Nỗi khốn cùng của quần chúng bị đẩy lên đỉnh điểm không thể chịu đựng hơn nữa.
                        </p>
                      )}
                      {selectedLeninSign === 3 && (
                        <p className="mt-1 text-white/90">
                          Mặt trận Việt Minh phát động phong trào phá kho thóc Nhật cứu đói, thu hút hàng triệu quần chúng sẵn sàng đứng lên hưởng ứng lệnh Tổng khởi nghĩa giành độc lập.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Chapter Footer Navigation */}
              <div className="mt-8 pt-6 border-t border-inherit flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#76777d]">
                  Tiến độ bài học: <strong>{progressPercent}%</strong> hoàn thành
                </div>
                <div className="flex items-center gap-3">
                  <button
                    disabled={activeChapterIndex === 0}
                    onClick={() => {
                      onSelectChapterIndex(activeChapterIndex - 1);
                      document.getElementById('interactive-lecture')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 border border-inherit rounded text-xs font-semibold hover:bg-black/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Chuyên đề trước
                  </button>
                  <button
                    disabled={activeChapterIndex === chapters.length - 1}
                    onClick={() => {
                      onSelectChapterIndex(activeChapterIndex + 1);
                      document.getElementById('interactive-lecture')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-[#904d00] text-white rounded text-xs font-semibold hover:bg-[#663500] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                  >
                    Chuyên đề tiếp theo →
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
