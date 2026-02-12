export default function Chapter1Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg"
        alt="Universe"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10 text-center animate-fade-in">
        <div className="text-gray-500 font-mono text-sm mb-4 tracking-widest">CHAPTER 01</div>
        <h2 className="text-5xl font-bold text-white mb-6">システム要件定義</h2>
        <div className="text-gray-400 text-lg">物理法則を「基本仕様」として紹介し、メンタルモデルをセット</div>
        <div className="mt-8 w-16 h-px bg-gray-700 mx-auto"></div>
      </div>
    </div>
  );
}
