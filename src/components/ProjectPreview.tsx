import { CheckCircle2, CloudSun, MapPin, ScanFace, Users } from 'lucide-react'
import type { Project } from '../data/portfolio'

export function ProjectPreview({ type }: { type: Project['preview'] }) {
  if (type === 'weather') {
    return (
      <div className="mockup-shell" aria-hidden="true">
        <div className="mockup-bar"><span /><span /><span /><p>weather.local</p></div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div><p className="text-xs text-slate-400">Current location</p><p className="mt-1 flex items-center gap-1 text-sm font-medium text-white"><MapPin size={13} /> Bangalore, IN</p></div>
            <CloudSun className="text-signal" size={34} strokeWidth={1.5} />
          </div>
          <div className="mt-8 flex items-end justify-between"><p className="text-5xl font-semibold text-white">27°</p><p className="pb-1 text-xs text-slate-400">Mostly clear · H: 29° L: 21°</p></div>
          <div className="mt-7 grid grid-cols-5 gap-2 border-t border-white/10 pt-4">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => <div key={day} className="text-center"><p className="text-[10px] text-slate-400">{day}</p><CloudSun className="mx-auto my-2 text-sky-200" size={16} /><p className="text-xs text-slate-200">{25 + index}°</p></div>)}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="mockup-shell" aria-hidden="true">
      <div className="mockup-bar"><span /><span /><span /><p>smartattend.app</p></div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between"><div><p className="text-xs text-slate-400">Dashboard</p><p className="mt-1 text-sm font-medium text-white">Today's attendance</p></div><ScanFace className="text-signal" size={28} strokeWidth={1.5} /></div>
        <div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-lg border border-white/10 bg-white/[0.04] p-3"><Users size={15} className="text-signal" /><p className="mt-4 text-xl font-semibold text-white">48</p><p className="text-[11px] text-slate-400">Students present</p></div><div className="rounded-lg border border-white/10 bg-white/[0.04] p-3"><CheckCircle2 size={15} className="text-emerald-300" /><p className="mt-4 text-xl font-semibold text-white">96%</p><p className="text-[11px] text-slate-400">Recognition confidence</p></div></div>
        <div className="mt-4 space-y-2">{['Aarav Sharma', 'Diya Patel', 'Rohan Kumar'].map((name) => <div key={name} className="flex items-center justify-between rounded-md bg-white/[0.035] px-3 py-2"><p className="text-xs text-slate-300">{name}</p><span className="text-[10px] font-medium text-emerald-300">Marked</span></div>)}</div>
      </div>
    </div>
  )
}
