export default function MultiverseSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12 relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"
        alt="Multiverse"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in">
          なぜ私たちの宇宙はこれほど「ちょうどいい」のか？
        </h2>

        <div className="bg-gray-900/95 backdrop-blur-md rounded-lg p-8 border-2 border-cyan-500 shadow-2xl">
          <div className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
            マルチバース（多宇宙）理論
          </div>

          <div className="space-y-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-red-950/50 border-l-4 border-red-500 p-4 rounded">
                <div className="text-red-400 font-bold mb-2">問題：微調整（Fine-tuning）</div>
                <div className="text-gray-300 text-sm">
                  重力が少しでも強い → 宇宙は即座に潰れる<br />
                  重力が少しでも弱い → 星すら生まれない
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-500">
                <div className="text-purple-300 font-mono font-bold text-xl mb-3">
                  マルチバース = 膨大な数の docker-compose.yml
                </div>
                <div className="text-gray-300 space-y-2 text-sm">
                  <div>• 宇宙の「外側」には、物理定数が微妙に違う無数の設定ファイル</div>
                  <div>• ほとんどは <code className="text-red-400">c=1.0</code> や <code className="text-red-400">G=999</code> といった設定</div>
                  <div>• デプロイした瞬間に <span className="text-red-500 font-bold">Kernel Panic</span>（崩壊）</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-green-950/50 border border-green-500 p-6 rounded-lg">
                <div className="text-green-400 font-mono font-bold text-xl mb-3">
                  私たちの宇宙 = 唯一 Status: Running なコンテナ
                </div>
                <div className="text-gray-300 text-sm">
                  <span className="text-yellow-400 font-bold">何億回ものビルドエラーの末に</span>、<br />
                  たまたま1回だけ通った本番環境。<br />
                  それが我々の宇宙。
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-black/70 rounded font-mono text-xs text-green-400 animate-blink">
            $ docker ps | grep universe<br />
            <span className="text-cyan-400">universe_instance_10^500</span>
            <span className="text-green-400 ml-4">Status: Running (13.8B years)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
