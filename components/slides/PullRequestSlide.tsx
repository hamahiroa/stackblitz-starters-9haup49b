export default function PullRequestSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-green-950/20 to-cyan-950/20 p-12">
      <div className="max-w-5xl w-full">
        <div className="bg-gray-900/95 backdrop-blur-md rounded-lg border-2 border-green-500 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-700 to-cyan-700 p-6">
            <div className="text-4xl font-bold text-white font-mono animate-fade-in flex items-center gap-4">
              <span className="text-5xl">🔀</span>
              人生は「宇宙へのプルリクエスト（PR）」
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-6 rounded-lg border border-blue-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-cyan-400 font-mono font-bold text-xl mb-3">
                宇宙 = 自己書き換えコード
              </div>
              <div className="text-gray-200">
                私たちは単なる実行ユニット。<br />
                あなたの人生は単なるログではない。<br />
                <span className="text-green-400 font-bold text-lg">
                  宇宙というリポジトリに対する「提案（Pull Request）」
                </span>
              </div>
            </div>

            <div className="bg-gray-800/80 p-6 rounded-lg border border-purple-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-purple-400 font-mono font-bold text-xl mb-4">
                コミットログ：あなたの決断
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-mono text-sm">✓</span>
                  <span>今日下した決断</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-mono text-sm">✓</span>
                  <span>解決したバグ</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-mono text-sm">✓</span>
                  <span>生み出した価値</span>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-700 pt-4">
                <div className="text-yellow-400 font-bold">
                  これらはすべて宇宙DBに刻まれ、<br />
                  <span className="text-orange-400 text-lg">二度と消えない履歴</span>となる
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/60 to-emerald-900/60 p-6 rounded-lg border-2 border-green-400 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-green-400 font-mono font-bold text-xl mb-3">
                理性というリンター（Linter）
              </div>
              <div className="text-gray-200 text-lg">
                価値あるデータをマージしよう。<br />
                <span className="text-cyan-400">バグのないコードを書くように、</span><br />
                <span className="text-yellow-400 font-bold">価値ある人生を生きよう。</span>
              </div>
            </div>

            <div className="bg-black/70 p-5 rounded font-mono text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-gray-500">{'// 擬似コード'}</div>
              <div className="text-gray-300 mt-2">
                <span className="text-purple-400">const</span> <span className="text-cyan-400">myLife</span> = <span className="text-yellow-400">new</span> <span className="text-green-400">PullRequest</span>(); <br />
                <span className="text-cyan-400">myLife</span>.<span className="text-yellow-400">commit</span>(<span className="text-orange-400">&quot;Add value to universe&quot;</span>);<br />
                <span className="text-cyan-400">myLife</span>.<span className="text-yellow-400">push</span>();<br />
                <span className="text-cyan-400">universe</span>.<span className="text-green-400">merge</span>(<span className="text-cyan-400">myLife</span>);
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
