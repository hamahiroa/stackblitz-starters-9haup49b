export default function Chapter4Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-8 relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg"
        alt="Human consciousness"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in text-center">
          第四章：Universe OS の開発者として生きる
        </h2>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-md rounded-lg p-6 border-2 border-purple-400 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold text-purple-300 mb-3 font-mono">
              意識というGUI：アンチエイリアス処理
            </div>
            <div className="text-gray-200 text-base">
              デジタルの「ドット絵」のような実態を隠し、滑らかな現実を見せてくれる<span className="text-cyan-400 font-bold">ローパスフィルタ</span>。<span className="text-yellow-400">それが意識。</span>
            </div>
            <div className="mt-3 bg-black/50 p-2 rounded font-mono text-xs text-gray-400">
              consciousness = <span className="text-green-400">antialiasing</span>(rawReality);
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg border border-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-lg font-bold text-blue-400 mb-2 font-mono">生の現実</div>
              <div className="text-gray-300 space-y-1 text-sm">
                <div>• 離散的な量子ビット</div>
                <div>• デジタルのドット絵</div>
                <div>• カクカクした更新</div>
                <div className="text-red-400">→ 直接は観測不可</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-sm p-4 rounded-lg border border-cyan-400 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-lg font-bold text-cyan-400 mb-2 font-mono">意識後の現実</div>
              <div className="text-gray-300 space-y-1 text-sm">
                <div>• 滑らかな連続体</div>
                <div>• 美しくレンダリング</div>
                <div>• 直感的なUX</div>
                <div className="text-green-400">→ これが私たちの世界</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/80 to-red-900/80 backdrop-blur-md rounded-lg p-5 border-2 border-orange-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-xl font-bold text-orange-300 mb-2 font-mono">
              宇宙OSの最高のUX
            </div>
            <div className="text-gray-200">
              周りを見渡してください。この滑らかな景色は、宇宙OSがあなたのためにレンダリングした<span className="text-yellow-400 font-bold text-lg">最高のユーザー体験</span>です。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
