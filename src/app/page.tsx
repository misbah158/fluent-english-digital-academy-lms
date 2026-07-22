import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { AILabBand, CourseGrid, Features, ResourcesGrid, Testimonials } from "@/components/sections";
import { MotionDiv } from "@/components/motion";

const stats = [
  ["8+", "Years teaching experience"],
  ["1,500+", "Students trained"],
  ["6", "Focused learning pathways"],
  ["100%", "Flexible online learning"],
];

export default function Home() {
  return (
    <main>
      <section className="mesh px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">Premium online English academy</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">Speak English Fluently. Build Confidence. Transform Your Future.</h1>
            <p className="mt-6 text-xl leading-9 text-slate-600">Learn English through expert teaching, real conversations, AI-powered practice, and personalized guidance.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-blue-900 px-7 py-4 text-center font-bold text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5">Start Learning</Link>
              <Link href="/courses" className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-bold text-slate-900 transition hover:border-blue-900">Explore Courses</Link>
            </div>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-[3rem] p-4 shadow-2xl md:p-6">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-900 via-violet-700 to-emerald-500 p-8 text-white">
              <div className="absolute right-8 top-8 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">Live Online</div>
              <PlayCircle size={58} aria-hidden="true" />
              <h2 className="mt-24 text-4xl font-black">Live speaking practice, guided feedback, visible progress.</h2>
              <p className="mt-4 text-white/85">A modern classroom experience designed for ambitious learners.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Pronunciation coaching', 'IELTS strategy', 'Kids friendly', 'Future AI practice'].map((item) => (
                  <p className="flex items-center gap-2 rounded-2xl bg-white/10 p-3 text-sm font-semibold" key={item}><ShieldCheck size={17} aria-hidden="true" />{item}</p>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="px-5 py-16" aria-label="Academy trust statistics">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="rounded-3xl bg-white p-7 text-center shadow-lg shadow-slate-200/70" key={label}>
              <p className="gradient-text text-4xl font-black">{value}</p>
              <p className="mt-2 font-semibold text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-slate-950">Courses designed for real progress</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Choose a focused pathway and receive practical guidance from day one.</p>
          <div className="mt-10"><CourseGrid /></div>
        </div>
      </section>

      <AILabBand />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-slate-950">Why choose Fluent English Digital Academy</h2>
          <div className="mt-10"><Features /></div>
        </div>
      </section>

      <section className="bg-blue-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-slate-950">Student success stories</h2>
          <div className="mt-10"><Testimonials /></div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-slate-950">Free Learning Hub preview</h2>
          <div className="mt-10"><ResourcesGrid /></div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-gradient-to-r from-blue-900 to-violet-700 p-10 text-center text-white shadow-2xl shadow-blue-900/20">
          <h2 className="text-4xl font-black">Ready to become a confident English speaker?</h2>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-900 transition hover:-translate-y-0.5">Join Fluent English Academy <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
