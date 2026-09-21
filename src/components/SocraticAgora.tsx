import React, { useState } from 'react';
import { AgoraComment } from '../types';

interface SocraticAgoraProps {
  comments: AgoraComment[];
  onAddComment: (comment: { author: string; role: string; content: string }) => void;
  onLikeComment: (id: string) => void;
  onShowToast?: (msg: string) => void;
}

export const SocraticAgora: React.FC<SocraticAgoraProps> = ({
  comments,
  onAddComment,
  onLikeComment,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Sinh viên FPT');
  const [content, setContent] = useState('');
  const [totalAgreed, setTotalAgreed] = useState(85);
  const [hasAgreedTopic, setHasAgreedTopic] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    onAddComment({
      author: author.trim() || 'Sinh viên Đại học FPT',
      role: role.trim() || 'Nhóm nghiên cứu MLN',
      content: content.trim(),
    });

    setContent('');
    setAuthor('');
    setIsFormOpen(false);
  };

  const handleSupportTopic = () => {
    if (!hasAgreedTopic) {
      setTotalAgreed(totalAgreed + 1);
      setHasAgreedTopic(true);
    } else {
      setTotalAgreed(totalAgreed - 1);
      setHasAgreedTopic(false);
    }
  };

  return (
    <section className="py-16 bg-[#f2f4f6] border-t border-[#c6c6cd]" id="discussion">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="font-sans text-[11px] text-[#904d00] font-semibold uppercase tracking-wider">
              Tọa Đàm Học Phần Triết Học Mác - Lênin
            </span>
            <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-[#191c1e] mt-1 tracking-tight">
              Không Gian Thảo Luận &amp; Tọa Đàm Chuyên Đề
            </h2>
          </div>
          <span className="font-sans text-[13px] text-[#45464d] mt-2 md:mt-0">
            Học phần MLN111 / MLN122 • Đại học FPT
          </span>
        </div>

        {/* Main Forum Card */}
        <div className="bg-[#ffffff] border border-[#c6c6cd] rounded-xl p-6 md:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-[#ffdcc3] text-[#2f1500] text-xs font-semibold rounded-full">
              Chuyên đề trọng tâm: Nhà nước &amp; Cách mạng xã hội
            </span>
            <span className="text-xs text-[#76777d]">
              Giáo trình Triết học Mác - Lênin
            </span>
          </div>

          <h3 className="font-serif text-[20px] md:text-[24px] font-bold text-[#191c1e] mb-3 leading-snug">
            "Tại sao nói Nhà nước là một hiện tượng lịch sử có tính giai cấp, và phân tích mối quan hệ giữa điều kiện khách quan với nhân tố chủ quan trong Cách mạng Tháng Tám năm 1945 ở Việt Nam?"
          </h3>

          <p className="font-sans text-[14px] md:text-[15px] text-[#45464d] mb-6 leading-relaxed">
            Theo quan điểm của C.Mác, Ph.Ăngghen và V.I. Lênin, nhà nước nảy sinh từ xã hội nhưng đứng trên xã hội khi mâu thuẫn giai cấp không thể điều hòa được. Trong khi đó, cách mạng xã hội muốn bùng nổ và thắng lợi đòi hỏi sự kết hợp nhuần nhuyễn giữa điều kiện khách quan chín muồi (tình thế cách mạng) với nhân tố chủ quan (năng lực tổ chức của Đảng tiên phong và ý chí quật khởi của quần chúng nhân dân).
          </p>

          {/* Social Proof & CTA row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#c6c6cd]/80 mb-6">
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={handleSupportTopic}
                className={`flex items-center gap-2 transition-colors cursor-pointer ${
                  hasAgreedTopic ? 'text-[#904d00] font-bold' : 'text-[#45464d] hover:text-[#191c1e]'
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {hasAgreedTopic ? 'thumb_up' : 'thumb_up_off'}
                </span>
                <span>{totalAgreed} Người đồng tình luận điểm</span>
              </button>
              <div className="flex items-center gap-2 text-[#45464d]">
                <span className="material-symbols-outlined text-lg">forum</span>
                <span>{comments.length} Đóng góp học thuật</span>
              </div>
            </div>

            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#191c1e] text-white rounded font-sans text-xs font-semibold hover:bg-[#904d00] transition-colors cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-base">
                {isFormOpen ? 'close' : 'edit_note'}
              </span>
              <span>{isFormOpen ? 'Đóng khung soạn' : 'Đóng góp ý kiến thảo luận'}</span>
            </button>
          </div>

          {/* Inline Contribution Form */}
          {isFormOpen && (
            <form onSubmit={handleSubmit} className="mb-8 p-5 bg-[#fcfcfd] rounded-lg border border-[#c6c6cd] space-y-4">
              <h4 className="font-sans text-sm font-bold text-[#191c1e] uppercase tracking-wider">
                Gửi luận giải / Phản biện của bạn
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-medium text-[#45464d] mb-1">
                    Họ tên hoặc Nhóm:
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Ví dụ: Nhóm 01 / Học giả..."
                    className="w-full px-3 py-2 text-xs border border-[#c6c6cd] rounded bg-white focus:outline-none focus:border-[#904d00]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-medium text-[#45464d] mb-1">
                    Vai trò / Lớp:
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Ví dụ: Sinh viên FPT K18..."
                    className="w-full px-3 py-2 text-xs border border-[#c6c6cd] rounded bg-white focus:outline-none focus:border-[#904d00]"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs font-medium text-[#45464d] mb-1">
                  Nội dung luận điểm phân tích:
                </label>
                <textarea
                  required
                  rows={3}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Nhập lập luận của bạn dựa trên nguyên lý Triết học Mác - Lênin..."
                  className="w-full px-3 py-2 text-xs border border-[#c6c6cd] rounded bg-white focus:outline-none focus:border-[#904d00]"
                ></textarea>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-1.5 text-xs text-[#45464d] hover:text-[#191c1e] cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-1.5 bg-[#904d00] text-white rounded text-xs font-semibold hover:bg-[#663500] cursor-pointer"
                >
                  Đăng luận điểm
                </button>
              </div>
            </form>
          )}

          {/* Comment Stream */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 rounded-lg bg-[#ffffff] border border-[#c6c6cd]/70 space-y-2 hover:border-[#904d00]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#e6e8ea] text-[#191c1e] flex items-center justify-center font-serif text-xs font-bold border border-[#c6c6cd]">
                      {comment.author.charAt(0)}
                    </div>
                    <div>
                      <span className="font-sans text-[13px] font-bold text-[#191c1e] block leading-tight">
                        {comment.author}
                      </span>
                      <span className="font-sans text-[11px] text-[#76777d]">
                        {comment.role} • {comment.timeAgo}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onLikeComment(comment.id)}
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition-colors cursor-pointer ${
                      comment.userLiked
                        ? 'bg-[#ffdcc3] text-[#6e3900] font-bold'
                        : 'text-[#45464d] hover:bg-[#f2f4f6]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">thumb_up</span>
                    <span>{comment.likes}</span>
                  </button>
                </div>
                <p className="font-sans text-[13px] text-[#2d3133] leading-relaxed pl-10">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
