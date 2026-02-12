export default function ConsciousnessDetailSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">04 / EXISTENCE</div>
        <h3 className="text-3xl font-bold text-white mb-10">生の現実 vs. 意識後の現実</h3>

        <div className="grid grid-cols-2 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800">
              <div className="text-gray-500 font-mono text-xs mb-4">Raw Reality</div>
              <div className="text-gray-400 space-y-3">
                <div>離散的な量子ビット</div>
                <div>デジタルのドット絵</div>
                <div>カクカクした更新</div>
              </div>
              <div className="text-gray-600 text-sm mt-4">直接は観測不可</div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800">
              <div className="text-gray-500 font-mono text-xs mb-4">Rendered Reality</div>
              <div className="text-gray-300 space-y-3">
                <div>滑らかな連続体</div>
                <div>美しくレンダリング</div>
                <div>直感的なUX</div>
              </div>
              <div className="text-white text-sm mt-4">これが私たちの世界</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
