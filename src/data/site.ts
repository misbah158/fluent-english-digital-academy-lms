import {
  BookOpen,
  BrainCircuit,
  GraduationCap,
  MessageCircle,
  Mic,
  PenTool,
  Sparkles,
  Target,
  Users,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = { label: string; href: string };
export type Course = {
  title: string;
  category: string;
  level: string;
  duration: string;
  icon: LucideIcon;
  description: string;
  outcomes: string[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "AI English Lab", href: "/ai-english-lab" },
  { label: "Free Learning Hub", href: "/free-learning-hub" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const courses: Course[] = [
  {
    title: "Spoken English Mastery",
    category: "Speaking",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    icon: Mic,
    description:
      "Build natural fluency through guided conversations, pronunciation coaching, role plays, and confidence routines.",
    outcomes: ["Daily speaking routines", "Clear pronunciation", "Real-life conversation skills"],
  },
  {
    title: "IELTS Preparation",
    category: "Exam Prep",
    level: "Band-focused",
    duration: "10 weeks",
    icon: Target,
    description:
      "Structured IELTS training for speaking, writing, listening, and reading with practical band-improvement strategies.",
    outcomes: ["Band criteria coaching", "Mock interviews", "Writing feedback"],
  },
  {
    title: "Cambridge English",
    category: "International",
    level: "CEFR aligned",
    duration: "12 weeks",
    icon: GraduationCap,
    description:
      "Cambridge-aligned learning paths for strong grammar, vocabulary, communication, and international exam readiness.",
    outcomes: ["CEFR level progress", "Exam-style practice", "Academic confidence"],
  },
  {
    title: "Kids English Program",
    category: "Young Learners",
    level: "Ages 6–14",
    duration: "Ongoing",
    icon: Sparkles,
    description:
      "Friendly, interactive English classes that help children speak, read, and express ideas with joy and confidence.",
    outcomes: ["Fun speaking games", "Phonics foundations", "Parent progress updates"],
  },
];

export const features = [
  { title: "Expert Teaching", icon: GraduationCap, text: "Clear methodology, warm guidance, and measurable improvement goals for every learner." },
  { title: "Speaking Focus", icon: MessageCircle, text: "Practical communication, confidence, and real conversations are built into every pathway." },
  { title: "Personal Feedback", icon: PenTool, text: "Specific correction on pronunciation, grammar, writing, vocabulary, and fluency." },
  { title: "Flexible Schedule", icon: Users, text: "Online learning options designed for students, parents, and working professionals." },
];

export const labFeatures = [
  { title: "AI speaking partner", icon: BrainCircuit, text: "Practice realistic conversations anytime with guided prompts and smart follow-ups." },
  { title: "Pronunciation coach", icon: Mic, text: "Identify unclear sounds, rhythm issues, stress patterns, and pacing opportunities." },
  { title: "Fluency tracking", icon: WandSparkles, text: "Track vocabulary range, grammar accuracy, speaking speed, and confidence indicators." },
  { title: "Vocabulary practice", icon: BookOpen, text: "Build active vocabulary with spaced practice and topic-based speaking missions." },
];

export const resources = [
  "Speaking challenges",
  "Vocabulary lessons",
  "Grammar guides",
  "Pronunciation practice",
  "Learning tips",
  "IELTS strategy notes",
];

export const posts = [
  { title: "How to speak English confidently in daily life", category: "Speaking", time: "6 min read", excerpt: "A practical routine for turning passive English knowledge into confident spoken communication." },
  { title: "IELTS Speaking: what examiners really listen for", category: "IELTS", time: "8 min read", excerpt: "Understand fluency, coherence, lexical range, grammar, and pronunciation in clear terms." },
  { title: "Five pronunciation habits that improve clarity fast", category: "Pronunciation", time: "5 min read", excerpt: "Small changes in stress, pauses, and sound endings can make your speech easier to understand." },
];
