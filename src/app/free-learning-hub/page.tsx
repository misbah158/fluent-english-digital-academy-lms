import { PageHero, ResourcesGrid } from "@/components/sections";
export const metadata = { title: "Free Learning Hub", description: "Free English speaking, vocabulary, grammar, and pronunciation resources." };
export default function Hub(){return <main><PageHero eyebrow="Free resources" title="Practice English between classes" text="Teacher-created resources for speaking challenges, vocabulary growth, grammar clarity, pronunciation practice, and weekly learning momentum."/><section className="px-5 py-20"><div className="mx-auto max-w-7xl"><ResourcesGrid/></div></section></main>}
