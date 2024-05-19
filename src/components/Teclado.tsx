export default function Teclado() {
  return (
    <div className="bg-slate-50 text-slate-900 p-4 rounded-md">
      <div className="relative flex w-32 h-24">
        <div className="border border-slate-300 w-7 h-full rounded" />
        <div className="absolute ml-4 bg-slate-800 w-5 h-14 rounded" />
        <div className="border border-l-0 border-slate-300 w-7 h-full rounded" />
        <div className="absolute ml-12 bg-slate-800 w-5 h-14 rounded" />
        <div className="border border-l-0 border-slate-300 w-7 h-full rounded" />
      </div>
    </div>
  );
}
