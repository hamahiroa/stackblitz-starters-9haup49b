export default function AttractionSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">03 / DEBUG</div>
        <h3 className="text-4xl font-bold text-white mb-10">引力 = コスト削減の副作用</h3>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">真空</div>
            <div className="text-gray-300">更新頻度が高い</div>
            <div className="text-gray-500 text-sm mt-1">コスト高</div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">星の近く</div>
            <div className="text-gray-300">更新頻度が低い</div>
            <div className="text-gray-500 text-sm mt-1">コスト安</div>
          </div>
        </div>

        <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-white text-lg">
            システムは計算コストをケチるため、<br />
            オブジェクトを「更新頻度の低い場所」へ掃き出す。<br />
            <span className="text-gray-300 mt-2 block">この統計的な圧力こそが引力である。</span>
          </div>
        </div>
      </div>
    </div>
  );
}
