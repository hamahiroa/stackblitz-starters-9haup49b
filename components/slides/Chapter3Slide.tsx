export default function Chapter3Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg"
        alt="Black Hole"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10 text-center animate-fade-in">
        <div className="text-gray-500 font-mono text-sm mb-4 tracking-widest">CHAPTER 03</div>
        <h2 className="text-5xl font-bold text-white mb-6">システムのバグと最適化</h2>
        <div className="text-gray-400 text-lg">「引力」をシステム最適化の観点でデバッグする</div>
        <div className="mt-8 w-16 h-px bg-gray-700 mx-auto"></div>
      </div>
    </div>
  );
}
