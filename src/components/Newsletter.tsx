import React, { useState } from 'react';

interface NewsletterProps {
  onShowToast: (msg: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribed(true);
    onShowToast(`Đã ghi danh ${email} vào bản tin triết học học thuật tuần!`);
  };

  return (
    <section className="py-16 bg-[#ffffff] border-t border-[#c6c6cd]" id="enroll">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#ffdcc3] text-[#2f1500] flex items-center justify-center mx-auto shadow-xs">
          <span className="material-symbols-outlined text-2xl">mail</span>
        </div>

        <h2 className="font-serif text-[30px] md:text-[36px] font-bold text-[#191c1e] tracking-tight">
          Đăng Ký Nhận Bản Tin Triết Học Tuần
        </h2>

        <p className="font-sans text-[14px] md:text-[15px] text-[#45464d] max-w-xl mx-auto leading-relaxed">
          Mỗi sáng thứ Hai, bạn sẽ nhận được một phân tích chuyên sâu về một câu danh ngôn cổ điển, chuyên đề luận văn và gợi ý sách triết học chọn lọc.
        </p>

        {subscribed ? (
          <div className="p-4 bg-[#f2f4f6] border border-[#904d00]/30 rounded-lg max-w-md mx-auto text-sm text-[#191c1e] space-y-1 animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-[#904d00] font-bold">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              <span>Đăng ký thành công!</span>
            </div>
            <p className="text-xs text-[#45464d]">
              Thư chào mừng và tuyển tập 50 thuật ngữ triết học cơ bản đã được gửi tới <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập địa chỉ thư điện tử của bạn..."
              className="flex-1 h-11 px-4 rounded border border-[#c6c6cd] bg-[#f2f4f6] text-[13px] font-sans text-[#191c1e] focus:outline-none focus:ring-1 focus:ring-[#904d00] focus:border-[#904d00] transition-all"
            />
            <button
              type="submit"
              className="h-11 px-6 bg-[#904d00] text-white rounded font-sans text-[13px] font-semibold hover:bg-[#663500] transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
            >
              Đăng ký miễn phí
            </button>
          </form>
        )}

        <span className="font-sans text-[11px] text-[#76777d] block">
          Không quảng cáo. Bạn có thể huỷ đăng ký bất cứ lúc nào.
        </span>
      </div>
    </section>
  );
};
