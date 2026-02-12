export default function PullRequestSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-12">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="text-gray-500 font-mono text-xs mb-6 tracking-widest">04 / EXISTENCE</div>
        <h3 className="text-4xl font-bold text-white mb-10">人生は「宇宙へのPull Request」</h3>

        <div className="space-y-6">
          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-gray-300">
              宇宙が「自己書き換えコード」であるならば、<br />
              私たちの人生は単なるログではない。<br />
              宇宙というリポジトリに対する「提案」である。
            </div>
          </div>

          <div className="bg-gray-900/60 rounded-lg p-6 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-500 font-mono text-xs mb-3">コミットログ</div>
            <div className="text-gray-300">
              あなたが今日下した決断、解決したバグ、生み出した価値。<br />
              それらはすべて宇宙DBに刻まれ、二度と消えない履歴となる。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
