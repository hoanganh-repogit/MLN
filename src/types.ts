export interface Tradition {
  id: string;
  title: string;
  era: string;
  icon: string;
  description: string;
  representatives: string[];
  keyConcepts: string[];
  lecturesCount: number;
  monographsCount: number;
  highlightQuestion?: string;
  fullOverview?: string;
  syllabus?: { title: string; duration?: string }[];
}

export interface Philosopher {
  id: string;
  name: string;
  symbol: string;
  imageUrl?: string;
  era: string;
  school: string;
  location: string;
  quote: string;
  quoteContext?: string;
  topic: string;
  bio: string;
  masterpiece: string;
  coreIdeas: string[];
}

export interface LectureChapter {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  chapterNumber: string;
  quote: string;
  quoteAuthor: string;
  authorImageUrl?: string;
  content: string[];
  lexiconKey: string;
  lexiconDefinition: string;
}

export interface LexiconItem {
  term: string;
  subtext: string;
  definition: string;
  origin: string;
  philosopher: string;
  application: string;
}

export interface AgoraComment {
  id: string;
  author: string;
  role: string;
  timeAgo: string;
  content: string;
  likes: number;
  userLiked?: boolean;
}

export interface ReaderSettings {
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  fontFamily: 'serif' | 'sans';
  lineHeight?: 'tight' | 'normal' | 'relaxed';
  theme: 'light' | 'sepia' | 'dark';
}

