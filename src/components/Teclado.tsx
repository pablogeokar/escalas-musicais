export default function Teclado() {
  return (
    <div className="relative flex h-24">
      <div
        className="bg-slate-50 border border-slate-200 w-7 mx-[2px] rounded-t-none rounded-lg shadow shadow-slate-400 hover:bg-green-400 hover:shadow-slate-50"
        id="C"
      />
      <div
        className="absolute ml-[22px] bg-slate-800 w-4 h-14 -top-[1px] rounded-t-none rounded-md shadow-inner shadow-slate-500 hover:bg-green-400 hover:shadow-none"
        id="C#"
      />
      <div
        className="bg-slate-50 border border-l-0 border-slate-200 w-7 mx-[2px] rounded-t-none rounded-lg shadow shadow-slate-400 hover:bg-green-400 hover:shadow-none"
        id="D"
      />
      <div
        className="absolute ml-[56px] bg-slate-800 w-4 h-14 -top-[1px] rounded-t-none rounded-md shadow-inner shadow-slate-500 hover:bg-green-400 hover:shadow-none"
        id="D#"
      />
      <div
        className="bg-slate-50 border border-l-0 border-slate-200 w-7 mx-[2px] rounded-t-none rounded-lg shadow shadow-slate-400 hover:bg-green-400 hover:shadow-none"
        id="E"
      />
      <div
        className="bg-slate-50 border border-l-0 border-slate-200 w-7 mx-[2px] rounded-t-none rounded-lg shadow shadow-slate-400 hover:bg-green-400 hover:shadow-none"
        id="F"
      />
      <div
        className="absolute ml-[118px] bg-slate-800 w-4 h-14 -top-[1px] rounded-t-none rounded-md shadow-inner shadow-slate-500 hover:bg-green-400 hover:shadow-none"
        id="F#"
      />
      <div
        className="bg-slate-50 border border-l-0 border-slate-200 w-7 mx-[2px] rounded-t-none rounded-lg shadow shadow-slate-400 hover:bg-green-400 hover:shadow-none"
        id="G"
      />
      <div
        className="absolute ml-[151px] bg-slate-800 w-4 h-14 rounded-t-none rounded-md shadow-inner shadow-slate-500 hover:bg-green-400 hover:shadow-none"
        id="G#"
      />
      <div
        className="bg-slate-50 border border-l-0 border-slate-200 w-7 rounded-t-none rounded-lg mx-[2px] shadow shadow-slate-400 hover:bg-green-400 hover:shadow-none"
        id="A"
      />
      <div
        className="absolute ml-[186px] bg-slate-800 w-4 h-14 rounded-t-none rounded-md shadow-inner shadow-slate-500 hover:bg-green-400 hover:shadow-none"
        id="A#"
      />
      <div
        className="bg-slate-50 border border-l-0 border-slate-200 w-7 mx-[2px] rounded-t-none rounded-lg shadow shadow-slate-400 hover:bg-green-400 hover:shadow-none"
        id="B"
      />
    </div>
  );
}
