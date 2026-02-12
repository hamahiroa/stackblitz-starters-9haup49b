export default function Chapter2Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"
        alt="Galaxy"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10 text-center animate-fade-in">
        <div className="text-gray-500 font-mono text-sm mb-4 tracking-widest">CHAPTER 02</div>
        <h2 className="text-5xl font-bold text-white mb-6">システムのデプロイとストレージ</h2>
        <div className="text-gray-400 text-lg">Dockerとクラウドインフラの視点で、宇宙の立ち上げを読み解く</div>
        <div className="mt-8 w-16 h-px bg-gray-700 mx-auto"></div>
      </div>
    </div>
  );
}
