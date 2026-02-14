export default function BigBangSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full flex gap-10 items-start animate-fade-in">
        <div className="flex-1 min-w-0">
          <div className="text-gray-500 font-mono text-xs mb-4 tracking-widest">02 / DEPLOY</div>
          <h3 className="text-3xl font-bold text-white mb-8">
            ビッグバン = <span className="font-mono text-gray-400">docker-compose up</span>
          </h3>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gray-900/60 rounded-lg p-5 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">Provisioning</div>
              <div className="text-gray-300 text-sm">
                インフレーション<br />
                空間リソースの爆速確保
              </div>
              <div className="text-gray-600 text-xs mt-2">
                数秒で全メモリ領域を確保
              </div>
            </div>

            <div className="bg-gray-900/60 rounded-lg p-5 border border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-gray-500 font-mono text-xs mb-2">Env Loading</div>
              <div className="text-gray-300 text-sm">
                <span className="font-mono">c</span>（光速）、<span className="font-mono">G</span>（重力定数）を .env からロード
              </div>
              <div className="text-gray-600 text-xs mt-2">
                1ビットのミスで即クラッシュする微調整バリデーション
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-[420px] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900/80 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
              </div>
              <span className="text-gray-500 font-mono text-xs ml-2">.env</span>
            </div>

            <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
              <div className="text-gray-600"># ==========================================</div>
              <div className="text-gray-600"># Project: THE UNIVERSE</div>
              <div className="text-gray-600"># CAUTION: Any minor change will lead to</div>
              <div className="text-gray-600"># immediate runtime crash.</div>
              <div className="text-gray-600"># ==========================================</div>
              <div className="h-3"></div>

              <div className="text-gray-600"># 光速 - 通信遅延の最小値</div>
              <div><span className="text-cyan-400">SPEED_OF_LIGHT</span><span className="text-gray-500">=</span><span className="text-amber-300">299792458</span></div>
              <div className="h-3"></div>

              <div className="text-gray-600"># 万有引力定数 - 物質の集積強度</div>
              <div className="text-gray-600"># 10^-11 の桁が変わると銀河が形成されない</div>
              <div><span className="text-cyan-400">G_CONSTANT</span><span className="text-gray-500">=</span><span className="text-amber-300">6.67430e-11</span></div>
              <div className="h-3"></div>

              <div className="text-gray-600"># プランク定数 - 量子化の最小単位</div>
              <div><span className="text-cyan-400">PLANCK_CONSTANT</span><span className="text-gray-500">=</span><span className="text-amber-300">6.62607015e-34</span></div>
              <div className="h-3"></div>

              <div className="text-gray-600"># 微細構造定数 - 電磁相互作用の強さ</div>
              <div className="text-gray-600"># 1/137.036... これが狂うと原子が結合できない</div>
              <div><span className="text-cyan-400">FINE_STRUCTURE_CONSTANT</span><span className="text-gray-500">=</span><span className="text-amber-300">0.00729735256</span></div>
              <div className="h-3"></div>

              <div className="text-gray-600"># 宇宙定数 - 空間の膨張速度</div>
              <div className="text-gray-600"># 10^120 という異常な精度のバリデーション</div>
              <div><span className="text-cyan-400">COSMOLOGICAL_CONSTANT</span><span className="text-gray-500">=</span><span className="text-amber-300">1.1056e-52</span></div>
              <div className="h-3"></div>

              <div className="text-gray-600"># 質量の設定</div>
              <div><span className="text-cyan-400">ELECTRON_MASS</span><span className="text-gray-500">=</span><span className="text-amber-300">9.10938356e-31</span></div>
              <div><span className="text-cyan-400">PROTON_MASS</span><span className="text-gray-500">=</span><span className="text-amber-300">1.67262192e-27</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
