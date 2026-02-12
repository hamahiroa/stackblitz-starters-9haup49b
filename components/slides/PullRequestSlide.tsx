export default function PullRequestSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-green-950/20 to-cyan-950/20 p-8">
      <div className="max-w-5xl w-full">
        <div className="bg-gray-900/95 backdrop-blur-md rounded-lg border-2 border-green-500 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-700 to-cyan-700 p-5">
            <div className="text-3xl font-bold text-white font-mono animate-fade-in">
              人生は「宇宙へのプルリクエスト（PR）」
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-4 rounded-lg border border-blue-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-cyan-400 font-mono font-bold text-base mb-2">
                宇宙 = 自己書き換えコード
              </div>
              <div className="text-gray-200 text-sm">
                私たちは単なる実行ユニット。あなたの人生は単なるログではない。<span className="text-green-400 font-bold">宇宙というリポジトリに対する「提案（Pull Request）」</span>
              </div>
            </div>

            <div className="bg-gray-800/80 p-4 rounded-lg border border-purple-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-purple-400 font-mono font-bold text-base mb-2">
                コミットログ：あなたの決断
              </div>
              <div className="space-y-1 text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-mono text-xs">-</span>
                  <span>今日下した決断</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-mono text-xs">-</span>
                  <span>解決したバグ</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-mono text-xs">-</span>
                  <span>生み出した価値</span>
                </div>
              </div>
              <div className="mt-3 border-t border-gray-700 pt-3">
                <div className="text-yellow-400 font-bold text-sm">
                  これらはすべて宇宙DBに刻まれ、<span className="text-orange-400">二度と消えない履歴</span>となる
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/60 to-emerald-900/60 p-4 rounded-lg border-2 border-green-400 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-green-400 font-mono font-bold text-base mb-2">
                理性というリンター（Linter）
              </div>
              <div className="text-gray-200 text-sm">
                価値あるデータをマージしよう。<span className="text-cyan-400">バグのないコードを書くように、</span><span className="text-yellow-400 font-bold">価値ある人生を生きよう。</span>
              </div>
            </div>

            <div className="bg-black/70 p-3 rounded font-mono text-xs animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-gray-500">{'// 擬似コード'}</div>
              <div className="text-gray-300 mt-1">
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
