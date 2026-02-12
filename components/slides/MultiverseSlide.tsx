export default function MultiverseSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">02 / DEPLOY</div>
        <h3 className="text-4xl font-bold text-white mb-4">
          なぜ私たちの宇宙はこれほど「ちょうどいい」のか？
        </h3>
        <div className="text-gray-500 text-lg mb-10">微調整問題（Fine-tuning Problem）</div>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-300">
              重力が少しでも強ければ宇宙は即座に潰れ、<br />
              弱ければ星すら生まれない
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">エンジニア的解釈</div>
            <div className="text-gray-300">
              何億回ものビルドエラーの末に、<br />
              たまたま1回だけ通った本番環境。<br />
              <span className="text-white font-bold">それが我々の宇宙。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
