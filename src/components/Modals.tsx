import React, { useState } from 'react';
import { Philosopher, Tradition, LexiconItem, ReaderSettings } from '../types';
import { resolveAssetUrl } from '../utils/asset';

/* ---------------- Philosopher Modal ---------------- */
export const PhilosopherModal: React.FC<{
  philosopher: Philosopher | null;
  onClose: () => void;
}> = ({ philosopher, onClose }) => {
  if (!philosopher) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white border border-[#c6c6cd] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#76777d] hover:text-[#191c1e] p-1 rounded-full hover:bg-[#f2f4f6] cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="flex items-start gap-4 sm:gap-5 mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-[#904d00]/30 shadow-md shrink-0 bg-[#191c1e]">
            {philosopher.imageUrl ? (
              <img
                src={resolveAssetUrl(philosopher.imageUrl)}
                alt={philosopher.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-serif text-2xl font-bold text-[#ffdcc3]">
                {philosopher.symbol}
              </div>
            )}
          </div>
          <div>
            <div className="text-[11px] font-semibold text-[#904d00] uppercase tracking-wider">
              {philosopher.era} • {philosopher.location}
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#191c1e]">
              {philosopher.name}
            </h2>
            <span className="text-xs text-[#45464d] font-medium">{philosopher.school}</span>
          </div>
        </div>

        {/* Master Quote */}
        <blockquote className="p-4 pl-4 border-l-4 border-[#904d00] bg-[#f7f9fb] rounded-r font-serif text-base italic text-[#191c1e] mb-6 leading-relaxed">
          "{philosopher.quote}"
        </blockquote>

        <div className="space-y-4 text-xs sm:text-sm text-[#45464d] leading-relaxed">
          <div>
            <h4 className="font-sans font-bold text-xs uppercase text-[#191c1e] tracking-wider mb-1">
              Tiểu sử &amp; Trọng tâm tư tưởng
            </h4>
            <p>{philosopher.bio}</p>
          </div>

          <div className="p-3 bg-[#f2f4f6] rounded border border-[#c6c6cd]">
            <h4 className="font-sans font-bold text-xs uppercase text-[#904d00] tracking-wider mb-1">
              Trước tác kinh điển
            </h4>
            <p className="font-serif text-sm font-semibold text-[#191c1e]">
              {philosopher.masterpiece}
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase text-[#191c1e] tracking-wider mb-2">
              Luận điểm then chốt
            </h4>
            <ul className="space-y-1.5 list-disc pl-5">
              {philosopher.coreIdeas.map((idea, idx) => (
                <li key={idx}>{idea}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#c6c6cd] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#000000] text-white rounded text-xs font-semibold hover:bg-[#131b2e] cursor-pointer"
          >
            Đóng hồ sơ
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tradition Modal ---------------- */
export const TraditionModal: React.FC<{
  tradition: Tradition | null;
  onClose: () => void;
  onStartLecture: () => void;
}> = ({ tradition, onClose, onStartLecture }) => {
  if (!tradition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white border border-[#c6c6cd] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#76777d] hover:text-[#191c1e] p-1 rounded-full hover:bg-[#f2f4f6] cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="mb-4">
          <span className="px-2.5 py-0.5 rounded bg-[#f2f4f6] text-[11px] font-semibold text-[#904d00] border border-[#c6c6cd]">
            {tradition.era}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#191c1e] mt-2">
            {tradition.title}
          </h2>
        </div>

        <p className="text-sm text-[#45464d] leading-relaxed mb-6">
          {tradition.fullOverview || tradition.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs p-4 bg-[#f7f9fb] rounded-lg border border-[#c6c6cd]">
          <div>
            <strong className="block text-[#191c1e] mb-1 font-bold">Danh nhân đại biểu:</strong>
            <div className="flex flex-wrap gap-1">
              {tradition.representatives.map((rep) => (
                <span key={rep} className="px-2 py-0.5 bg-white border border-[#c6c6cd] rounded text-[11px]">
                  {rep}
                </span>
              ))}
            </div>
          </div>
          <div>
            <strong className="block text-[#191c1e] mb-1 font-bold">Khái niệm trọng tâm:</strong>
            <div className="flex flex-wrap gap-1">
              {tradition.keyConcepts.map((kc) => (
                <span key={kc} className="px-2 py-0.5 bg-[#ffdcc3] text-[#6e3900] border border-[#ffb77d] rounded text-[11px] font-medium">
                  {kc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {tradition.syllabus && (
          <div className="mb-6">
            <h4 className="font-sans font-bold text-xs uppercase text-[#191c1e] tracking-wider mb-3">
              Chương trình chuyên đề bài giảng ({tradition.syllabus.length} phần)
            </h4>
            <div className="space-y-2">
              {tradition.syllabus.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded bg-[#ffffff] border border-[#c6c6cd] text-xs hover:border-[#904d00] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#f2f4f6] text-[#904d00] flex items-center justify-center font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-[#191c1e]">{item.title}</span>
                  </div>
                  {item.duration && (
                    <span className="text-[11px] text-[#76777d] shrink-0 font-sans ml-2">
                      {item.duration}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-[#c6c6cd] flex items-center justify-between">
          <span className="text-xs text-[#76777d]">
            {tradition.lecturesCount} bài giảng • {tradition.monographsCount} chuyên khảo
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#c6c6cd] text-[#45464d] rounded text-xs font-semibold hover:bg-[#f2f4f6] cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onClose();
                onStartLecture();
              }}
              className="px-5 py-2 bg-[#904d00] text-white rounded text-xs font-semibold hover:bg-[#663500] cursor-pointer shadow-xs active:scale-95"
            >
              Vào không gian đọc mẫu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Lexicon Modal ---------------- */
export const LexiconModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  lexiconList: LexiconItem[];
  initialTerm?: string;
}> = ({ isOpen, onClose, lexiconList, initialTerm }) => {
  const [searchTerm, setSearchTerm] = useState(initialTerm || '');

  React.useEffect(() => {
    if (isOpen) {
      setSearchTerm(initialTerm || '');
    }
  }, [isOpen, initialTerm]);

  if (!isOpen) return null;

  const filtered = lexiconList.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtext.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white border border-[#c6c6cd] rounded-xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#76777d] hover:text-[#191c1e] p-1 rounded-full hover:bg-[#f2f4f6] cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="mb-4">
          <span className="font-sans text-[11px] text-[#904d00] font-bold uppercase tracking-wider">
            Từ điển thuật ngữ chuyên khảo
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#191c1e] mt-0.5">
            Thuật Ngữ Triết Học (Lexicon)
          </h2>
        </div>

        {/* Search input */}
        <div className="relative mb-4">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#76777d] text-lg">
            search
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tra cứu: Aufhebung, Logos, Ding an sich, Cogito..."
            className="w-full h-10 pl-9 pr-3 rounded border border-[#c6c6cd] bg-[#f2f4f6] text-xs focus:outline-none focus:ring-1 focus:ring-[#904d00] focus:border-[#904d00]"
          />
        </div>

        {/* List of terms */}
        <div className="overflow-y-auto space-y-3 flex-1 pr-1 custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#76777d]">
              Không tìm thấy thuật ngữ phù hợp với từ khóa "{searchTerm}".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.term}
                className="p-4 rounded-lg border border-[#c6c6cd] bg-[#ffffff] hover:border-[#904d00] transition-colors shadow-xs"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-serif text-base font-bold text-[#191c1e]">
                    {item.term}
                  </h3>
                  <span className="text-[11px] text-[#904d00] font-semibold bg-[#ffdcc3] px-2 py-0.5 rounded">
                    {item.philosopher}
                  </span>
                </div>
                <div className="text-xs text-[#76777d] font-medium mb-2 italic">
                  {item.subtext}
                </div>
                <p className="text-xs text-[#45464d] leading-relaxed mb-2">
                  {item.definition}
                </p>
                <div className="pt-2 border-t border-[#eceef0] text-[11px] text-[#76777d]">
                  <span className="font-semibold text-[#191c1e]">Ứng dụng: </span>
                  {item.application}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-[#c6c6cd] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#000000] text-white rounded text-xs font-semibold hover:bg-[#131b2e] cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Reader Settings Modal ---------------- */
export const ReaderSettingsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  settings: ReaderSettings;
  onChangeSettings: (newSettings: Partial<ReaderSettings>) => void;
}> = ({ isOpen, onClose, settings, onChangeSettings }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white border border-[#c6c6cd] rounded-xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#76777d] hover:text-[#191c1e] p-1 rounded-full hover:bg-[#f2f4f6] cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <h3 className="font-serif text-xl font-bold text-[#191c1e] mb-1">
          Tùy Chỉnh Chế Độ Đọc
        </h3>
        <p className="text-xs text-[#76777d] mb-6">
          Điều chỉnh phông chữ, kích thước và màu nền tối ưu cho mắt khi nghiên cứu văn bản triết học dài.
        </p>

        {/* Font Family */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#191c1e] mb-2">
            Kiểu phông chữ
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onChangeSettings({ fontFamily: 'serif' })}
              className={`p-3 rounded border text-xs font-serif text-center cursor-pointer transition-all ${
                settings.fontFamily === 'serif'
                  ? 'border-[#904d00] bg-[#ffdcc3] text-[#2f1500] font-bold'
                  : 'border-[#c6c6cd] hover:border-[#76777d]'
              }`}
            >
              Merriweather (Chân phương)
            </button>
            <button
              onClick={() => onChangeSettings({ fontFamily: 'sans' })}
              className={`p-3 rounded border text-xs font-sans text-center cursor-pointer transition-all ${
                settings.fontFamily === 'sans'
                  ? 'border-[#904d00] bg-[#ffdcc3] text-[#2f1500] font-bold'
                  : 'border-[#c6c6cd] hover:border-[#76777d]'
              }`}
            >
              Inter (Không chân)
            </button>
          </div>
        </div>

        {/* Font Size */}
        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#191c1e] mb-2">
            Cỡ chữ văn bản
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: 'small', label: 'Nhỏ' },
              { id: 'medium', label: 'Chuẩn' },
              { id: 'large', label: 'Lớn' },
              { id: 'xlarge', label: 'Rất lớn' },
            ].map((size) => (
              <button
                key={size.id}
                onClick={() => onChangeSettings({ fontSize: size.id as any })}
                className={`py-2 px-1 rounded border text-xs text-center cursor-pointer transition-all ${
                  settings.fontSize === size.id
                    ? 'border-[#904d00] bg-[#904d00] text-white font-bold'
                    : 'border-[#c6c6cd] hover:border-[#76777d]'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Palette */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#191c1e] mb-2">
            Không gian màu sắc
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onChangeSettings({ theme: 'light' })}
              className={`p-3 rounded border text-xs text-center cursor-pointer bg-white text-[#191c1e] transition-all ${
                settings.theme === 'light'
                  ? 'ring-2 ring-[#904d00] border-[#904d00] font-bold'
                  : 'border-[#c6c6cd]'
              }`}
            >
              Ban ngày
            </button>
            <button
              onClick={() => onChangeSettings({ theme: 'sepia' })}
              className={`p-3 rounded border text-xs text-center cursor-pointer bg-[#fbf0d9] text-[#2c221e] transition-all ${
                settings.theme === 'sepia'
                  ? 'ring-2 ring-[#904d00] border-[#904d00] font-bold'
                  : 'border-[#dfd2be]'
              }`}
            >
              Giấy cũ Sepia
            </button>
            <button
              onClick={() => onChangeSettings({ theme: 'dark' })}
              className={`p-3 rounded border text-xs text-center cursor-pointer bg-[#1a1d20] text-[#e3e6e8] transition-all ${
                settings.theme === 'dark'
                  ? 'ring-2 ring-[#904d00] border-[#904d00] font-bold'
                  : 'border-[#363a3e]'
              }`}
            >
              Đêm tĩnh
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#000000] text-white rounded text-xs font-semibold hover:bg-[#131b2e] cursor-pointer shadow-xs"
        >
          Áp dụng &amp; Tiếp tục đọc
        </button>
      </div>
    </div>
  );
};

/* ---------------- Auth Modal ---------------- */
export const AuthModal: React.FC<{
  isOpen: boolean;
  mode: 'login' | 'register';
  onClose: () => void;
  onSuccess: (email: string) => void;
}> = ({ isOpen, mode, onClose, onSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(mode);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(email || 'nghiencuuvien@sophia.edu.vn');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white border border-[#c6c6cd] rounded-xl max-w-md w-full p-6 md:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#76777d] hover:text-[#191c1e] p-1 rounded-full hover:bg-[#f2f4f6] cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded bg-black text-white flex items-center justify-center font-serif text-xl font-bold mx-auto mb-2">
            Σ
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#191c1e]">
            {activeTab === 'login' ? 'Đăng Nhập Học Giả' : 'Gia Nhập Viện Sophia'}
          </h3>
          <p className="text-xs text-[#76777d] mt-1">
            Không gian lưu trữ bài giảng, chuyên khảo và đối thoại tư tưởng.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#c6c6cd] mb-6">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 pb-2 text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'login'
                ? 'border-b-2 border-[#904d00] text-[#904d00]'
                : 'text-[#76777d] hover:text-[#191c1e]'
            }`}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 pb-2 text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'register'
                ? 'border-b-2 border-[#904d00] text-[#904d00]'
                : 'text-[#76777d] hover:text-[#191c1e]'
            }`}
          >
            Đăng ký học viên mới
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'register' && (
            <div>
              <label className="block text-[11px] font-semibold text-[#45464d] mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nguyễn Văn A"
                className="w-full h-10 px-3 text-xs rounded border border-[#c6c6cd] focus:outline-none focus:ring-1 focus:ring-[#904d00] focus:border-[#904d00]"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold text-[#45464d] mb-1">
              Thư điện tử
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hocgia@sophia.edu.vn"
              className="w-full h-10 px-3 text-xs rounded border border-[#c6c6cd] focus:outline-none focus:ring-1 focus:ring-[#904d00] focus:border-[#904d00]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#45464d] mb-1">
              Mật khẩu bảo mật
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-10 px-3 text-xs rounded border border-[#c6c6cd] focus:outline-none focus:ring-1 focus:ring-[#904d00] focus:border-[#904d00]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#904d00] text-white rounded text-xs font-semibold hover:bg-[#663500] cursor-pointer shadow-xs active:scale-95 transition-all mt-2"
          >
            {activeTab === 'login' ? 'Xác nhận Đăng nhập' : 'Hoàn tất Đăng ký Thành viên'}
          </button>
        </form>

        <div className="mt-6 text-center text-[11px] text-[#76777d]">
          Tham gia diễn đàn tự do học thuật phi lợi nhuận của Viện Triết học Sophia.
        </div>
      </div>
    </div>
  );
};
