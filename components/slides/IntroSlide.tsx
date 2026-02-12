export default function IntroSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-5xl w-full">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-gray-500 font-mono text-sm">~/universe/README.md</span>
        </div>

        <div className="bg-gray-950 rounded-lg p-8 border border-gray-800 shadow-2xl font-mono text-sm">
          <div className="text-gray-300 mb-4 text-2xl"># はじめに：前提のロード</div>

          <div className="space-y-5 text-gray-400">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-gray-300 mb-2">## 学問的背景</div>
              <div className="pl-4 border-l-2 border-gray-700">
                「デジタル物理学」<br />
                ジョン・ホイーラーの <span className="text-white font-bold">&quot;It from Bit&quot;</span><br />
                <span className="text-gray-500">万物はビットから成る</span>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-gray-300 mb-2">## スタック</div>
              <div className="pl-4 border-l-2 border-gray-700">
                CS（コンピュータサイエンス）と物理学のTreeは、実は驚くほど似ている
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-gray-300 mb-2">## 免責事項</div>
              <div className="pl-4 border-l-2 border-gray-700">
                登壇者は物理専攻ではない。<br />
                これは「宇宙という巨大なシステム」をエンジニア視点でハックする、SF的エンタメ・ドキュメントである。
              </div>
            </div>
          </div>

          <div className="mt-6 text-gray-600 animate-blink">
            <span className="text-gray-400">user@universe</span>
            <span className="text-gray-500">:</span>
            <span className="text-gray-400">~</span>
            <span className="text-white">$ █</span>
          </div>
        </div>
      </div>
    </div>
  );
}
