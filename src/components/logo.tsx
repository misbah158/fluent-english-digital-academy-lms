import Link from "next/link";

export function Logo() {
  return <Link href="/" className="flex items-center gap-3 font-bold text-current"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-900 via-violet-700 to-emerald-500 text-white shadow-lg">FE</span><span className="leading-tight">Fluent English<br/><span className="text-sm font-semibold text-slate-500">Digital Academy</span></span></Link>;
}
