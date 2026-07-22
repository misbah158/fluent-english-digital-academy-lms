import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { courses, navLinks } from "@/data/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-slate-300">Premium online English learning for confident speaking, IELTS success, and lifelong communication skills.</p>
          <div className="mt-5 flex gap-3" aria-label="Social links">
            <Facebook aria-hidden="true" />
            <Instagram aria-hidden="true" />
            <Linkedin aria-hidden="true" />
          </div>
        </div>
        <div>
          <h2 className="font-bold">Navigation</h2>
          {navLinks.map((link) => (
            <Link className="mt-3 block text-slate-300 hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="font-bold">Courses</h2>
          {courses.map((course) => <p className="mt-3 text-slate-300" key={course.title}>{course.title}</p>)}
        </div>
        <div>
          <h2 className="font-bold">Contact</h2>
          <p className="mt-3 flex gap-2 text-slate-300"><MessageCircle aria-hidden="true" /> WhatsApp: 03165521235</p>
          <p className="mt-3 flex gap-2 text-slate-300"><Mail aria-hidden="true" /> ja984850@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">© 2026 Fluent English Digital Academy. All rights reserved.</div>
    </footer>
  );
}
