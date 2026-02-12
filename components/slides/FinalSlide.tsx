export default function FinalSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12 relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg"
        alt="Universe"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="absolute inset-0 opacity-20">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>

      <div className="relative z-10 max-w-3xl text-center animate-fade-in">
        <div className="space-y-8">
          <div className="text-gray-300 text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            理不尽なバグ（運命）はハックせよ。
          </div>

          <div className="text-gray-300 text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            新しい機能（挑戦）をデプロイせよ。
          </div>

          <div className="w-16 h-px bg-gray-700 mx-auto my-8"></div>

          <div className="text-white text-2xl font-bold leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            最高のコード（生き様）を、<br />
            この宇宙リポジトリにマージしていこう。
          </div>
        </div>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-4xl font-bold text-white mb-2 animate-glow">
            Universe OS
          </div>
          <div className="text-gray-500 font-mono text-sm">
            v13.8b - Production Ready
          </div>
        </div>
      </div>
    </div>
  );
}
