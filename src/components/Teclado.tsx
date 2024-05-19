export default function Teclado() {
  return (
    <div className="bg-slate-50 text-slate-900 p-4 rounded-md">
      <div className="relative flex h-24">
        <div
          className="border border-slate-200 w-7 h-full rounded shadow shadow-slate-400"
          id="C"
        />
        <div
          className="absolute ml-4 bg-slate-800 w-4 h-14 rounded shadow shadow-slate-400"
          id="C#"
        />
        <div
          className="border border-l-0 border-slate-200 w-7 h-full rounded shadow shadow-slate-400"
          id="D"
        />
        <div
          className="absolute ml-12 bg-slate-800 w-4 h-14 rounded shadow shadow-slate-400"
          id="D#"
        />
        <div
          className="border border-l-0 border-slate-200 w-7 h-full rounded shadow shadow-slate-400"
          id="E"
        />
        <div
          className="border border-l-0 border-slate-200 w-7 h-full rounded shadow shadow-slate-400"
          id="F"
        />
        <div
          className="absolute ml-[100px] bg-slate-800 w-4 h-14 rounded shadow shadow-slate-400"
          id="F#"
        />
        <div
          className="border border-l-0 border-slate-200 w-7 h-full rounded shadow shadow-slate-400"
          id="G"
        />
        <div
          className="absolute ml-[132px] bg-slate-800 w-4 h-14 rounded shadow shadow-slate-400"
          id="G#"
        />
        <div
          className="border border-l-0 border-slate-200 w-7 h-full rounded shadow shadow-slate-400"
          id="A"
        />
        <div
          className="absolute ml-[162px] bg-slate-800 w-4 h-14 rounded shadow shadow-slate-400"
          id="A#"
        />
        <div
          className="border border-l-0 border-slate-200 w-7 h-full rounded shadow shadow-slate-400"
          id="B"
        />
      </div>
    </div>
  );
}
