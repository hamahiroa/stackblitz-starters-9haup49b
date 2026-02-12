export default function Chapter4Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12 relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg"
        alt="Human consciousness"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12 animate-fade-in text-center">
          第四章：Universe OS の開発者として生きる
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-md rounded-lg p-8 border-2 border-purple-400 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-purple-300 mb-4 font-mono flex items-center gap-3">
              <span className="text-4xl">👁️</span>
              意識というGUI：アンチエイリアス処理
            </div>
            <div className="text-gray-200 text-lg">
              デジタルの「ドット絵」のような実態を隠し、<br />
              滑らかな現実を見せてくれる<span className="text-cyan-400 font-bold">ローパスフィルタ</span>。<br />
              <span className="text-yellow-400">それが意識。</span>
            </div>
            <div className="mt-4 bg-black/50 p-3 rounded font-mono text-sm text-gray-400">
              consciousness = <span className="text-green-400">antialiasing</span>(rawReality);
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-lg border border-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-blue-400 mb-3 font-mono">生の現実</div>
              <div className="text-gray-300 space-y-2 text-sm">
                <div>• 離散的な量子ビット</div>
                <div>• デジタルのドット絵</div>
                <div>• カクカクした更新</div>
                <div className="text-red-400">→ 直接は観測不可</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-sm p-6 rounded-lg border border-cyan-400 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl font-bold text-cyan-400 mb-3 font-mono">意識後の現実</div>
              <div className="text-gray-300 space-y-2 text-sm">
                <div>• 滑らかな連続体</div>
                <div>• 美しくレンダリング</div>
                <div>• 直感的なUX</div>
                <div className="text-green-400">→ これが私たちの世界</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/80 to-red-900/80 backdrop-blur-md rounded-lg p-6 border-2 border-orange-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl font-bold text-orange-300 mb-3 font-mono">
              🎯 宇宙OSの最高のUX
            </div>
            <div className="text-gray-200 text-lg">
              周りを見渡してください。この滑らかな景色は、<br />
              宇宙OSがあなたのためにレンダリングした<br />
              <span className="text-yellow-400 font-bold text-2xl">最高のユーザー体験</span>です。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
