export default function QuantumSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">01 / SYSTEM SPEC</div>
        <h3 className="text-4xl font-bold text-white mb-4">量子力学</h3>
        <div className="text-gray-500 text-lg mb-10">遅延評価（Lazy Evaluation）</div>

        <div className="space-y-8">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">仕様</div>
            <div className="text-gray-300 text-lg">
              観測するまで状態が決まらない
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">エンジニア的解釈</div>
            <div className="text-gray-300">
              <code className="text-gray-200 font-mono">console.log</code> で見るまで変数の値が確定しない
            </div>
            <div className="text-gray-500 text-sm mt-2">
              計算コスト節約のためのオンデマンド・レンダリング
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
