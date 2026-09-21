import React, { useState } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { BentoTraditions } from './components/BentoTraditions';
import { LectureReader } from './components/LectureReader';
import { PhilosopherTimeline } from './components/PhilosopherTimeline';
import { SocraticAgora } from './components/SocraticAgora';
import { Footer } from './components/Footer';
import {
  PhilosopherModal,
  TraditionModal,
  LexiconModal,
  ReaderSettingsModal,
} from './components/Modals';
import { SearchModal } from './components/SearchModal';
import {
  TRADITIONS_DATA,
  PHILOSOPHERS_DATA,
  LECTURE_CHAPTERS_DATA,
  LEXICON_DATA,
  AGORA_COMMENTS_DATA,
} from './data/philosophyData';
import {
  Philosopher,
  Tradition,
  ReaderSettings,
  AgoraComment,
} from './types';

export default function App() {
  // Navigation state
  const [activeNav, setActiveNav] = useState<string>('');


  // Interactive reader state
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0); // Defaults to Chapter 1 (Nguồn gốc & Bản chất Nhà nước)
  const [readerSettings, setReaderSettings] = useState<ReaderSettings>({
    fontFamily: 'serif',
    fontSize: 'medium',
    lineHeight: 'normal',
    theme: 'light',
  });

  // Forum state
  const [comments, setComments] = useState<AgoraComment[]>(AGORA_COMMENTS_DATA);

  // Modals state
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<Philosopher | null>(null);
  const [selectedTradition, setSelectedTradition] = useState<Tradition | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLexiconOpen, setIsLexiconOpen] = useState(false);
  const [initialLexiconTerm, setInitialLexiconTerm] = useState<string | undefined>(undefined);
  const [isReaderSettingsOpen, setIsReaderSettingsOpen] = useState(false);

  // Toast notifications disabled
  const showToast = (_msg: string) => {};

  // Scroll to section handler
  const handleSelectNav = (navId: string) => {
    setActiveNav(navId);
    const idMap: Record<string, number> = {
      'state-origin': 0,
      'state-features': 1,
      'state-types': 2,
      'revolution-nature': 3,
      'revolution-methods': 4,
      'contemporary-era': 5,
    };
    if (idMap[navId] !== undefined) {
      setActiveChapterIndex(idMap[navId]);
    }
    const element = document.getElementById(navId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // highlight briefly
      element.classList.add('ring-2', 'ring-[#904d00]');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-[#904d00]');
      }, 1600);
    }
  };

  const handleStartLesson = () => {
    const lectureEl = document.getElementById('interactive-lecture');
    if (lectureEl) {
      lectureEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMap = () => {
    const timelineEl = document.getElementById('timeline');
    if (timelineEl) {
      timelineEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLexiconWithTerm = (term?: string) => {
    setInitialLexiconTerm(term);
    setIsLexiconOpen(true);
  };

  const handleAddComment = (newComment: { author: string; role: string; content: string }) => {
    const commentItem: AgoraComment = {
      id: `c-${Date.now()}`,
      author: newComment.author,
      role: newComment.role,
      timeAgo: 'Vừa xong',
      content: newComment.content,
      likes: 1,
      userLiked: true,
    };
    setComments([commentItem, ...comments]);
  };

  const handleLikeComment = (id: string) => {
    setComments(
      comments.map((c) => {
        if (c.id === id) {
          const nextLiked = !c.userLiked;
          return {
            ...c,
            userLiked: nextLiked,
            likes: nextLiked ? c.likes + 1 : c.likes - 1,
          };
        }
        return c;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#191c1e] font-sans antialiased flex flex-col selection:bg-[#ffdcc3] selection:text-[#6e3900]">
      {/* Top Navbar */}
      <TopNavBar
        activeNav={activeNav}
        onSelectNav={handleSelectNav}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Socrates quote & art */}
        <HeroSection
          onStartLesson={handleStartLesson}
          onExploreMap={handleExploreMap}
        />

        {/* Bento Grid: Focus Schools */}
        <BentoTraditions
          traditions={TRADITIONS_DATA}
          onSelectTradition={(trad) => setSelectedTradition(trad)}
        />

        {/* Academic Reading Space with Hegel Dialectical Triad */}
        <LectureReader
          chapters={LECTURE_CHAPTERS_DATA}
          activeChapterIndex={activeChapterIndex}
          onSelectChapterIndex={setActiveChapterIndex}
          onOpenLexiconModal={handleOpenLexiconWithTerm}
          onOpenReaderSettings={() => setIsReaderSettingsOpen(true)}
          readerSettings={readerSettings}
          onShowToast={showToast}
        />

        {/* Philosopher Timeline Horizontal River */}
        <PhilosopherTimeline
          philosophers={PHILOSOPHERS_DATA}
          onSelectPhilosopher={(phil) => setSelectedPhilosopher(phil)}
        />

        {/* Socratic Agora Discussion Forum */}
        <SocraticAgora
          comments={comments}
          onAddComment={handleAddComment}
          onLikeComment={handleLikeComment}
          onShowToast={showToast}
        />

      </main>

      {/* Global Footer */}
      <Footer
        onOpenLexicon={() => handleOpenLexiconWithTerm(undefined)}
        onExploreMap={handleExploreMap}
        onShowToast={showToast}
      />

      {/* Modals & Dialogs */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        philosophers={PHILOSOPHERS_DATA}
        traditions={TRADITIONS_DATA}
        lexicon={LEXICON_DATA}
        onSelectPhilosopher={(p) => setSelectedPhilosopher(p)}
        onSelectTradition={(t) => setSelectedTradition(t)}
        onSelectLexicon={(term) => handleOpenLexiconWithTerm(term)}
      />

      <PhilosopherModal
        philosopher={selectedPhilosopher}
        onClose={() => setSelectedPhilosopher(null)}
      />

      <TraditionModal
        tradition={selectedTradition}
        onClose={() => setSelectedTradition(null)}
        onStartLecture={() => {
          if (selectedTradition) {
            const idMap: Record<string, number> = {
              'state-origin': 0,
              'state-features': 1,
              'state-types': 2,
              'revolution-nature': 3,
              'revolution-methods': 4,
              'contemporary-era': 5,
            };
            if (idMap[selectedTradition.id] !== undefined) {
              setActiveChapterIndex(idMap[selectedTradition.id]);
            }
          }
          handleStartLesson();
        }}
      />

      <LexiconModal
        isOpen={isLexiconOpen}
        onClose={() => setIsLexiconOpen(false)}
        lexiconList={LEXICON_DATA}
        initialTerm={initialLexiconTerm}
      />

      <ReaderSettingsModal
        isOpen={isReaderSettingsOpen}
        onClose={() => setIsReaderSettingsOpen(false)}
        settings={readerSettings}
        onChangeSettings={(newSet) => setReaderSettings({ ...readerSettings, ...newSet })}
      />


    </div>
  );
}
