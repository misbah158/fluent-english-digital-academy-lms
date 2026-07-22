import { ArrowRight, CheckCircle2, Clock, Star } from "lucide-react";
import Link from "next/link";
import { courses, features, labFeatures, posts, resources } from "@/data/site";
import { MotionDiv } from "./motion";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mesh px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{text}</p>
      </div>
    </section>
  );
}

export function CourseGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {courses.map((course, index) => {
        const Icon = course.icon;
        return (
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -8 }}
            className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition"
            key={course.title}
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-900 to-violet-700 text-white shadow-lg">
              <Icon aria-hidden="true" />
            </div>
            <p className="text-sm font-bold text-emerald-600">{course.category}</p>
            <h2 className="mt-2 text-xl font-black text-slate-950">{course.title}</h2>
            <p className="mt-3 text-slate-600">{course.description}</p>
            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-slate-500">
              <Clock size={16} aria-hidden="true" /> {course.duration} • {course.level}
            </div>
            <Link className="mt-6 inline-flex items-center gap-2 font-bold text-blue-900 group-hover:gap-3" href="/contact">
              Learn more <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </MotionDiv>
        );
      })}
    </div>
  );
}

export function Features() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-200/60" key={feature.title}>
            <Icon className="text-violet-700" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-black text-slate-950">{feature.title}</h2>
            <p className="mt-3 text-slate-600">{feature.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function AILabBand() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">AI English Lab</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Future-ready speaking practice, guided by intelligent feedback.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Our planned AI lab will help learners practice beyond class with conversation simulations, pronunciation insights, speaking analysis, and vocabulary growth.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {labFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur" key={feature.title}>
                  <Icon className="text-emerald-300" aria-hidden="true" />
                  <h3 className="mt-4 font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResourcesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {resources.map((resource) => (
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" key={resource}>
          <CheckCircle2 className="text-emerald-600" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-black text-slate-950">{resource}</h2>
          <p className="mt-2 text-slate-600">Actionable, teacher-created resources to help you practice English every week.</p>
        </article>
      ))}
    </div>
  );
}

export function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <article className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1" key={post.title}>
          <p className="text-sm font-bold text-violet-700">{post.category} • {post.time}</p>
          <h2 className="mt-4 text-2xl font-black text-slate-950">{post.title}</h2>
          <p className="mt-3 text-slate-600">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    { quote: "My speaking confidence improved within weeks. The feedback was personal, practical, and easy to apply.", name: "Ayesha R.", role: "Spoken English student" },
    { quote: "IELTS lessons were structured and focused. I finally understood exactly how to improve my speaking answers.", name: "Hamza K.", role: "IELTS candidate" },
    { quote: "My child enjoys every class and now speaks English more naturally at home. The progress updates are excellent.", name: "Mrs. Sana", role: "Parent" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-200/60" key={testimonial.name}>
          <div className="flex text-amber-400" aria-label="Five star review">
            {Array.from({ length: 5 }).map((_, index) => <Star fill="currentColor" key={index} size={18} aria-hidden="true" />)}
          </div>
          <blockquote className="mt-5 text-slate-700">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-5">
            <p className="font-bold text-slate-950">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
