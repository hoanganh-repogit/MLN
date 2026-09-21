import React from 'react';

// =====================================================================
// 📌 BẠN CÓ THỂ CHỈNH SỬA THÔNG TIN NHÓM & MÔN HỌC TRỰC TIẾP TẠI ĐÂY:
// =====================================================================
export const PROJECT_CONFIG = {
  // 1. Thông tin Môn học & Trường
  subject: {
    courseName: 'Triết học Mác - Lênin',
    courseCode: 'MLN111 / MLN122',
    institution: 'Trường Đại học FPT',
    semester: 'Học kỳ Spring 2026',
    instructor: 'TS. Giảng viên Bộ môn Triết học',
    topic: 'Chương III - Phần III: Nhà nước và Cách mạng xã hội',
  },

  // 2. Thông tin Nhóm thực hiện
  team: {
    name: 'Nhóm 01 — Sophia Project Team',
    classId: 'Lớp MLN - SE / IA',
    members: [
      { name: 'Nguyễn Văn A', role: 'Nhóm trưởng / Thuyết trình', studentId: 'QE180001' },
      { name: 'Trần Thị B', role: 'Biên soạn Luận điểm & Nội dung', studentId: 'QE180002' },
      { name: 'Lê Hoàng C', role: 'Nghiên cứu Tư liệu & Bản đồ Triết gia', studentId: 'QE180003' },
      { name: 'Phạm Minh D', role: 'Trực quan hoá & Tương tác Web', studentId: 'QE180004' },
    ],
  },
};

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

  const { subject, team } = PROJECT_CONFIG;

  return (
    <footer className="bg-[#191c1e] text-[#e2e2e6] border-t border-[#45464d]/60 full-width selection:bg-[#904d00] selection:text-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Cột 1: Nhận diện & Mục đích Slide tương tác */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2d3133] to-[#45464d] text-[#ffdcc3] border border-[#ffdcc3]/30 flex items-center justify-center font-serif text-xl font-bold shadow-sm select-none">
                Σ
              </div>
              <div>
                <span className="font-serif text-[20px] font-bold text-white block leading-tight">
                  Sophia Academy
                </span>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#ffb77d] uppercase block leading-tight mt-1">
                  VIỆN TRIẾT HỌC KHAI PHÓNG
                </span>
              </div>
            </div>

            <p className="font-sans text-[13px] text-[#c6c6cd] leading-relaxed">
              Sản phẩm trực quan hoá học phần dưới dạng website slide tương tác. Giúp người xem dễ dàng tiếp cận, tra cứu các trường phái tư tưởng và sơ đồ luận chứng biện chứng mà không cần tạo tài khoản.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2d3133] border border-[#45464d] text-xs text-[#ffdcc3] font-sans">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                Web Slide Tương Tác
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#2d3133] border border-[#45464d] text-xs text-[#c6c6cd] font-sans">
                {subject.institution}
              </span>
            </div>
          </div>

          {/* Cột 2: Thông tin Học phần & Môn học */}
          <div className="md:col-span-4 space-y-4 border-t md:border-t-0 md:border-l border-[#45464d]/60 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] text-[#ffb77d] uppercase tracking-wider font-bold block">
                Thông tin Môn học &amp; Đề tài
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#45464d]/60 text-white font-mono">
                {subject.courseCode}
              </span>
            </div>

            <div className="space-y-2.5 text-[13px] font-sans">
              <div>
                <span className="text-[#909094] block text-[11px]">Tên môn học:</span>
                <strong className="text-white font-medium text-[14px]">
                  {subject.courseName}
                </strong>
              </div>

              <div>
                <span className="text-[#909094] block text-[11px]">Đề tài báo cáo:</span>
                <p className="text-[#e2e2e6] text-[13px] leading-snug">
                  {subject.topic}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-[12px]">
                <div>
                  <span className="text-[#909094] block text-[11px]">Giảng viên hướng dẫn:</span>
                  <span className="text-white">{subject.instructor}</span>
                </div>
                <div>
                  <span className="text-[#909094] block text-[11px]">Học kỳ:</span>
                  <span className="text-white">{subject.semester}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 border-t border-[#45464d]/40">
              <button
                onClick={onOpenLexicon}
                className="text-[12px] text-[#ffb77d] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
              >
                Tra cứu Thuật ngữ (Lexicon)
              </button>
              <span className="text-[#76777d]">•</span>
              <button
                onClick={onExploreMap}
                className="text-[12px] text-[#ffb77d] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
              >
                Cây Phả hệ Triết gia
              </button>
            </div>
          </div>

          {/* Cột 3: Đội ngũ Thực hiện (Team) */}
          <div className="md:col-span-4 space-y-4 border-t md:border-t-0 md:border-l border-[#45464d]/60 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] text-[#ffb77d] uppercase tracking-wider font-bold block">
                Đội ngũ Thực hiện
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#ffdcc3]/20 text-[#ffdcc3] font-semibold">
                {team.classId}
              </span>
            </div>

            <div>
              <strong className="text-white font-serif text-[15px] block">
                {team.name}
              </strong>
            </div>

            {/* Danh sách thành viên */}
            <div className="space-y-2 pt-1">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#242729] px-3 py-2 rounded border border-[#45464d]/50 text-xs hover:border-[#ffb77d]/50 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-white text-[13px]">
                      {member.name}
                    </span>
                    <span className="text-[#909094] text-[11px]">
                      {member.role}
                    </span>
                  </div>
                  {member.studentId && (
                    <span className="font-mono text-[11px] text-[#ffb77d] bg-[#191c1e] px-2 py-0.5 rounded border border-[#45464d]/70">
                      {member.studentId}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thanh bản quyền & Nút trở về đầu trang */}
        <div className="pt-8 border-t border-[#45464d]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#909094]">
          <p>
            © 2026 {subject.institution} • Dự án học phần {subject.courseName} ({subject.courseCode}).
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#ffdcc3] hover:text-white transition-colors cursor-pointer py-1 px-3 rounded hover:bg-[#2d3133]"
          >
            <span>Trở về đầu slide</span>
            <span className="text-sm">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
