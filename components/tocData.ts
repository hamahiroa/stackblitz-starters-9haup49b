export interface TOCSection {
  id: number;
  label: string;
  shortLabel: string;
}

export const tocSections: TOCSection[] = [
  { id: 0, label: 'Init: コンテキストの読み込み', shortLabel: 'Init' },
  { id: 1, label: '第一章：システム要件定義', shortLabel: 'Ch.1' },
  { id: 2, label: '第二章：デプロイとストレージ', shortLabel: 'Ch.2' },
  { id: 3, label: '第三章：パフォーマンス・デバッグ', shortLabel: 'Ch.3' },
  { id: 4, label: '第四章：開発者として生きる', shortLabel: 'Ch.4' },
];

export const tocDetails: Record<number, string[]> = {
  0: [
    'デジタル物理学 — 「It from Bit」',
    'CS と物理学のTree構造',
    'SF的エンタメ・ドキュメント宣言',
  ],
  1: [
    '分散システムの時刻同期バグ：相対性理論',
    '遅延評価（Lazy Evaluation）：量子力学',
    '技術負債のスパゲッティ化：エントロピー',
    '11次元の多次元配列ヘッダー：超弦理論',
  ],
  2: [
    'docker-compose up：ビッグバン',
    'マルチバースと .env の微調整',
    '2Dマスターと3Dフロントエンド：ホログラフィー原理',
  ],
  3: [
    '計算の複雑性としての質量',
    '処理遅延としての重力',
    '「引力」という名のコスト削減',
    '無限ループの Loading...：ブラックホール',
    '光速というレートリミット',
  ],
  4: [
    'アンチエイリアス済みUI：意識というローパスフィルタ',
    'エントロピーのRTAと目的関数',
    '人生という名のプルリクエスト',
  ],
};
