import { CheckCircle2 } from "lucide-react";
import { CourseGrid, PageHero } from "@/components/sections";
import { courses } from "@/data/site";
export const metadata = { title: "Courses", description: "Spoken English, IELTS, Cambridge English, and Kids English courses." };
export default function Courses(){return <main><PageHero eyebrow="Courses" title="Professional English programs for every learner" text="Explore structured online courses that build speaking confidence, exam readiness, and communication power."/><section className="px-5 py-20"><div className="mx-auto max-w-7xl"><CourseGrid/><div className="mt-16 grid gap-6 md:grid-cols-2">{courses.map(c=><div className="rounded-[2rem] bg-white p-7 shadow-lg" key={c.title}><h2 className="text-2xl font-black">{c.title} outcomes</h2>{c.outcomes.map(o=><p className="mt-4 flex gap-3 text-slate-700" key={o}><CheckCircle2 className="text-emerald-600"/> {o}</p>)}</div>)}</div></div></section></main>}
