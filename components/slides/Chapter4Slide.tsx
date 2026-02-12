export default function Chapter4Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg"
        alt="Human consciousness"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10 text-center animate-fade-in">
        <div className="text-gray-500 font-mono text-sm mb-4 tracking-widest">CHAPTER 04</div>
        <h2 className="text-5xl font-bold text-white mb-6">Universe OS の開発者として生きる</h2>
        <div className="text-gray-400 text-lg">妄想</div>
        <div className="mt-8 w-16 h-px bg-gray-700 mx-auto"></div>
      </div>
    </div>
  );
}
