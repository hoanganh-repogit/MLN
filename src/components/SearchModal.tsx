import React, { useState } from 'react';
import { Philosopher, Tradition, LexiconItem } from '../types';
import { resolveAssetUrl } from '../utils/asset';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  philosophers: Philosopher[];
  traditions: Tradition[];
  lexicon: LexiconItem[];
  onSelectPhilosopher: (p: Philosopher) => void;
  onSelectTradition: (t: Tradition) => void;
  onSelectLexicon: (term: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  philosophers,
  traditions,
  lexicon,
  onSelectPhilosopher,
  onSelectTradition,
  onSelectLexicon,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedPhilosophers = q
    ? philosophers.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.school.toLowerCase().includes(q) ||
          p.quote.toLowerCase().includes(q)
      )
    : [];

  const matchedTraditions = q
    ? traditions.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.keyConcepts.some((k) => k.toLowerCase().includes(q))
      )
    : [];

  const matchedLexicon = q
    ? lexicon.filter(
        (l) =>
          l.term.toLowerCase().includes(q) ||
          l.definition.toLowerCase().includes(q) ||
          l.philosopher.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white border border-[#c6c6cd] rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Search header */}
        <div className="p-4 border-b border-[#c6c6cd] flex items-center gap-3">
          <span className="material-symbols-outlined text-xl text-[#904d00]">
            search
          </span>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm triết gia, trường phái, khái niệm (Kant, Biện chứng, Aufhebung, Đạo...)..."
            className="w-full text-sm outline-none bg-transparent text-[#191c1e] placeholder:text-[#76777d]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#76777d] hover:text-[#191c1e] text-xs font-semibold cursor-pointer"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-[#76777d] hover:text-[#191c1e] ml-2 px-2 py-1 rounded bg-[#f2f4f6] cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
          {!query && (
            <div className="py-8 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#76777d]/60">
                manage_search
              </span>
              <p className="text-xs text-[#76777d]">
                Nhập từ khóa để tra cứu trực tiếp trong kho tri thức của Viện Sophia.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Hegel', 'Biện chứng', 'Aufhebung', 'Socrates', 'Vật tự nó', 'Hiện sinh'].map(
                  (sample) => (
                    <button
                      key={sample}
                      onClick={() => setQuery(sample)}
                      className="px-2.5 py-1 bg-[#f2f4f6] hover:bg-[#ffdcc3] hover:text-[#6e3900] text-[#45464d] rounded-full text-xs font-medium transition-colors cursor-pointer"
                    >
                      {sample}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query &&
            matchedPhilosophers.length === 0 &&
            matchedTraditions.length === 0 &&
            matchedLexicon.length === 0 && (
              <div className="text-center py-10 text-xs text-[#76777d]">
                Không tìm thấy kết quả phù hợp cho "{query}".
              </div>
            )}

          {/* Matched Philosophers */}
          {matchedPhilosophers.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#904d00] mb-2">
                Triết gia ({matchedPhilosophers.length})
              </h4>
              <div className="space-y-2">
                {matchedPhilosophers.map((phil) => (
                  <div
                    key={phil.id}
                    onClick={() => {
                      onClose();
                      onSelectPhilosopher(phil);
                    }}
                    className="p-2.5 rounded bg-[#f7f9fb] hover:bg-[#ffdcc3]/30 border border-[#c6c6cd] flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-[#c6c6cd] shrink-0 flex items-center justify-center">
                        {phil.imageUrl ? (
                          <img
                            src={resolveAssetUrl(phil.imageUrl)}
                            alt={phil.name}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <span className="text-[#191c1e] font-serif font-bold text-xs">
                            {phil.symbol}
                          </span>
                        )}
                      </div>
                      <div>
                        <span className="font-serif font-bold text-xs text-[#191c1e]">
                          {phil.name}
                        </span>
                        <span className="text-[11px] text-[#76777d] block">
                          {phil.school} • {phil.era}
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-sm text-[#904d00]">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Traditions */}
          {matchedTraditions.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#904d00] mb-2">
                Trường phái ({matchedTraditions.length})
              </h4>
              <div className="space-y-2">
                {matchedTraditions.map((trad) => (
                  <div
                    key={trad.id}
                    onClick={() => {
                      onClose();
                      onSelectTradition(trad);
                    }}
                    className="p-2.5 rounded bg-[#f7f9fb] hover:bg-[#ffdcc3]/30 border border-[#c6c6cd] flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="font-serif font-bold text-xs text-[#191c1e]">
                        {trad.title}
                      </span>
                      <p className="text-[11px] text-[#45464d] line-clamp-1">
                        {trad.description}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-sm text-[#904d00]">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Lexicon */}
          {matchedLexicon.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#904d00] mb-2">
                Thuật ngữ chuyên khảo ({matchedLexicon.length})
              </h4>
              <div className="space-y-2">
                {matchedLexicon.map((lex) => (
                  <div
                    key={lex.term}
                    onClick={() => {
                      onClose();
                      onSelectLexicon(lex.term);
                    }}
                    className="p-2.5 rounded bg-[#f7f9fb] hover:bg-[#ffdcc3]/30 border border-[#c6c6cd] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs text-[#904d00]">
                        {lex.term}
                      </span>
                      <span className="text-[10px] text-[#76777d]">
                        {lex.philosopher}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#45464d] line-clamp-2 mt-0.5">
                      {lex.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
