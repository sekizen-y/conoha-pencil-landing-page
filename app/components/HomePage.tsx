"use client";

import { FormEvent, useEffect, useState } from "react";

const features = [
  { icon: "⌕", label: "調査を時短" },
  { icon: "≡", label: "構成に迷わない" },
  { icon: "✎", label: "執筆を効率化" },
  { icon: "↻", label: "公開後も改善" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="gmo-strip"><div className="wide"><span>ネットのセキュリティも</span><b>GMO</b><i>無料診断 ›</i><strong>•••　GMO INTERNET GROUP</strong></div></div>
    <div className="products"><div className="nav-width"><span>▥ WING</span><span>▤ VPS</span><span>▦ for Windows Server</span><span>♟ for GAME</span><span>▧ AI Canvas</span><span>▱ Pencil</span><span>サポート</span></div></div>
    <header className="main-header"><div className="nav-width header-inner">
      <a href="#top" className="logo" aria-label="ConoHa Pencil"><b>ConoHa</b><i>•</i><em>Pencil</em><small>byGMO</small></a>
      <button className="hamb" aria-label="メニュー" aria-expanded={open} onClick={() => setOpen(!open)}><i/><i/><i/></button>
      <nav className={open ? "site-nav open" : "site-nav"}><a href="#issues">機能</a><a href="#experts">選ばれる理由</a><a href="#pricing">料金</a><a href="#start">お申し込み方法</a><a href="#news">お知らせ</a><a href="#faq">サポート</a><button className="login">ログイン</button><button className="apply">お申し込み</button></nav>
    </div></header>
  </>;
}

function SearchPanel({ done }: { done: boolean }) {
  return <div className="mini-screen search-screen"><div className="search-box">中小企業 集客発信 <b>検索</b></div><p className="selected">中小企業 集客発信 メリット</p><p>中小企業 集客発信 事例</p><p>中小企業 集客発信 コツ</p><span className={done ? "glass done" : "glass"}/></div>;
}

function OutlinePanel({ done }: { done: boolean }) {
  return <div className={done ? "mini-screen outline-screen done" : "mini-screen outline-screen"}><p><b>H1</b> 中小企業の集客発信を成功させる</p><p><b>H2</b> 情報発信の重要性とは</p><p><b>H2</b> 成功事例から学ぶポイント</p><p><b>H2</b> 継続するためのコツ</p></div>;
}

function WritingPanel({ done }: { done: boolean }) {
  return <div className={done ? "mini-screen write-screen done" : "mini-screen write-screen"}><i/><i/><i/><i/><i/><i/><span>✦</span></div>;
}

function ScorePanel({ done }: { done: boolean }) {
  return <div className={done ? "mini-screen score-screen done" : "mini-screen score-screen"}><span>SEOスコア</span><div className="score-ring"><b>{done ? "91" : "84"}</b><small>/100</small></div><strong>{done ? "リライト完了！" : "最適化中…"}</strong></div>;
}

function ProductFlow({ stage }: { stage: number }) {
  return <div className="product-demo" aria-live="polite">
    <h2>ConoHa Pencilでできること（例）</h2>
    <div className="flow-head">{features.map((f,i)=><div key={i} className={stage > i ? "flow-title complete" : "flow-title"}><span>{stage > i ? "✓" : `0${i+1}`}</span><b>{["キーワード調査","見出し構成生成","本文一括生成","リライト最適化"][i]}</b></div>)}</div>
    <div className="screen-row"><SearchPanel done={stage>0}/><i className="flow-arrow"/><OutlinePanel done={stage>1}/><i className="flow-arrow"/><WritingPanel done={stage>2}/><i className="flow-arrow"/><ScorePanel done={stage>3}/></div>
    <div className="time-message"><b>約10分</b>で、検索上位を狙える記事が完成！</div>
  </div>;
}

function Trial({ onStage }: { onStage:(s:number)=>void }) {
  const [value,setValue]=useState(""); const [stage,setStage]=useState(0); const [running,setRunning]=useState(false);
  const submit=(e:FormEvent)=>{e.preventDefault(); if(running)return; setRunning(true);setStage(1);onStage(1)};
  useEffect(()=>{if(!running)return;if(stage===4){const t=setTimeout(()=>setRunning(false),900);return()=>clearTimeout(t)}const t=setTimeout(()=>{setStage(stage+1);onStage(stage+1)},950);return()=>clearTimeout(t)},[stage,running,onStage]);
  return <div className="trial" id="trial"><div className="trial-label">上位にしたいテーマを入力するだけ</div><form onSubmit={submit}><label className="sr-only" htmlFor="theme">上位にしたいテーマ</label><input id="theme" value={value} onChange={e=>setValue(e.target.value)} placeholder="例）中小企業 オウンドメディア SEO"/><button disabled={running}>{running ? ["","調査中…","構成中…","執筆中…","完了！"][stage] : "無料で記事生成 ➜"}</button></form><p>※ Freeプラン 月額0円</p></div>;
}

function Portrait({ role, name, variant }: { role:string;name:string;variant:"a"|"b" }) {
  return <div className="person"><div className={`portrait ${variant}`}><img src="/expert-pair-v2.png" alt="" /></div><b>{role}</b><strong>{name}</strong></div>;
}

function ProofBar() {
  return <div className="proof" id="proof"><div className="expert-seal"><span>SEO</span><b>専門家</b><strong>監修</strong></div><Portrait variant="a" role="SEO専門家" name="柏崎 剛 氏 監修"/><span className="tiny-arrow">▶</span><Portrait variant="b" role="人気ブロガー" name="サンツォ 氏 監修"/><div className="metric"><span>制作時間</span><b>1/48</b><strong>に短縮</strong><small>※当社比</small></div><div className="metric"><span>制作コスト</span><b>99.8<em>%</em></b><strong>削減</strong><small>※当社比</small></div><div className="metric"><span>検索上位表示<br/>実績</span><b>90<em>%以上</em></b><small>※当社比</small></div><div className="metric mint"><span>記事完成まで</span><b><em>約</em>10<em>分</em></b><small>入力から完成まで</small></div></div>;
}

function Hero() {
  const [stage,setStage]=useState(0);
  return <section className="hero" id="top"><div className="hero-pattern"/><div className="hero-inner">
    <div className="hero-grid"><div className="copy"><span className="audience">中小企業のオウンドメディア担当者へ</span><h1>ひとりでも、<br/><b>SEO</b>は回せる。</h1><p>調査から執筆・リライトまで、SEO記事制作をまるごと自動化。<br/>外注コストを削減し、検索流入につながる記事を増やせます。</p><div className="feature-row">{features.map((f,i)=><div key={i}><span>{f.icon}</span><b>{f.label}</b></div>)}</div><Trial onStage={setStage}/></div><div className="demo-wrap"><ProductFlow stage={stage}/></div></div>
    <ProofBar/>
  </div></section>;
}

const issues=[
  {title:"キーワード調査が大変",text:<>検索ボリュームや関連キーワードの調査に<br/>多くの時間がかかり、手間がかかる。</>,kind:"search"},
  {title:"競合分析が大変",text:<>上位記事の見出しや構成を調べて、<br/>差別化ポイントを見つけるのが難しい。</>,kind:"chart"},
  {title:"記事構成の設計が難しい",text:<>SEOに強い構成や見出しの作り方が分からず、<br/>成果につながる記事に仕上がらない。</>,kind:"monitor"},
];

function IssueIcon({kind}:{kind:string}){
  if(kind==="search")return <div className="issue-icon search-ill"><div className="browser-lines"><i/><i/><i/></div><span/></div>;
  if(kind==="chart")return <div className="issue-icon chart-ill"><div/><div/><div/><i/><i/></div>;
  return <div className="issue-icon monitor-ill"><div><i/><i/><i/></div><span/></div>;
}

function Issues(){return <section className="issues" id="issues"><div className="issues-inner"><h2>そのお悩み、AI だけでは解決しません。</h2><p className="issues-lead">SEOで成果を出すには、様々な工程が必要です。</p><div className="issues-grid">{issues.map((x,i)=><article key={x.title}><span className="number">{i+1}</span><IssueIcon kind={x.kind}/><h3>{x.title}</h3><p>{x.text}</p></article>)}</div><div className="down-arrow" aria-hidden="true"/></div></section>}

const plans = [
  {name:"Free",for:"まず試してみたい方",price:"0",credits:"30クレジット / 月",count:"記事作成 約3回分",cta:"無料で始める"},
  {name:"Lite",for:"小さく運用を始める方",price:"770",credits:"100クレジット / 月",count:"記事作成 約12回分",cta:"申し込む"},
  {name:"Standard",for:"継続的に記事を増やす方",price:"2,480",credits:"750クレジット / 月",count:"記事作成 約93回分",cta:"申し込む",recommended:true},
  {name:"Business",for:"チームで運用したい方",price:"8,980",credits:"3,000クレジット / 月",count:"記事作成 約375回分",cta:"申し込む"},
];

function ExpertAvatar({side}:{side:"left"|"right"}){return <div className={`expert-avatar ${side}`}><img src="/expert-pair-v2.png" alt=""/></div>}

function Experts(){return <section className="experts lp-section" id="experts"><div className="section-chevron"/><p className="section-kicker">EXPERTISE</p><h2 className="section-title">SEOの知見を、<mark>記事制作の仕組み</mark>に。</h2><p className="section-lead">文章を生成するだけで終わらない。検索意図と運用実務を理解する専門家の知見を、ConoHa Pencilの設計に活かしています。</p><div className="expert-grid"><article className="expert-card"><ExpertAvatar side="left"/><div><span>SEO専門家</span><h3>柏崎 剛 氏</h3><b>SEO設計・キーワード調査を監修</b><p>複数社でSEO顧問を務め、最新調査と実践的なツール開発に取り組む専門家。</p></div></article><article className="expert-card"><ExpertAvatar side="right"/><div><span>人気ブロガー</span><h3>サンツォ 氏</h3><b>記事運用・読みやすさを監修</b><p>複数メディアを運営する現役ブロガー。継続できるコンテンツ制作の実務を反映。</p></div></article></div><div className="expert-summary"><i>✓</i>AIの速さと、専門家のSEO知見をひとつの制作環境へ。</div></section>}

function Pricing(){return <section className="pricing lp-section" id="pricing"><p className="section-kicker">PRICE PLANS</p><h2 className="section-title">運用量に合わせて、<mark>無理なく選べる</mark></h2><p className="section-lead">まず試したい方から、継続的に記事を増やしたいチームまで。月ごとの制作量を基準に選べます。</p><div className="plan-grid">{plans.map(plan=><article className={plan.recommended?"plan-card recommended":"plan-card"} key={plan.name}>{plan.recommended&&<span className="recommend-label">おすすめ</span>}<h3>{plan.name}</h3><p className="plan-for">{plan.for}</p><div className="plan-price"><b>{plan.price}</b><span>円 / 月</span></div><strong>{plan.credits}</strong><small>{plan.count}</small><a href="#trial">{plan.cta}</a></article>)}</div><p className="pricing-note">※記事作成回数は目安です。利用する機能により消費クレジットは異なります。表示価格は税込です。</p><div className="wing-offer"><span>さらにおトク</span><b>ConoHa WINGとセットなら、全プラン初回1ヶ月無料</b><small>サーバーと記事制作をまとめて管理</small></div></section>}

const startSteps=[
  {title:"アカウント登録",text:"メールアドレスとパスワードを登録し、ConoHaアカウントを作成。",icon:"♙"},
  {title:"プランを選択",text:"運用量に合うプランを選択。Freeプランなら月額0円から。",icon:"▤"},
  {title:"すぐに制作開始",text:"管理画面からテーマを入力して、最初の記事制作をスタート。",icon:"✦"},
];
function StartSteps(){return <section className="start-section lp-section" id="start"><p className="section-kicker">HOW TO START</p><h2 className="section-title">始めるまで、<mark>3ステップ</mark></h2><p className="section-lead">複雑な初期設定は不要。申し込み後、すぐにキーワード調査や記事生成を始められます。</p><div className="start-grid">{startSteps.map((s,i)=><article key={s.title}><div className="start-icon"><span>0{i+1}</span>{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div><div className="existing-note">✓ ConoHa WINGをご利用中の方は、既存アカウントから申し込めます。</div></section>}

const faqs=[
  ["Freeプランでは何ができますか？","毎月30クレジットが付与され、記事作成を約3回お試しいただけます。"],
  ["キーワード調査機能だけでも利用できますか？","はい。各プランでキーワード提案・分析機能を単独で利用できます。"],
  ["生成した文章は、そのまま公開できますか？","公開前に事実確認と推敲を行ってください。AIの生成内容には誤りや権利上のリスクが含まれる場合があります。"],
  ["契約はいつ更新されますか？","契約は1ヶ月ごとに自動更新され、契約満了日の1日前に翌月分の請求が発生します。"],
  ["ConoHa WINGを使っていなくても申し込めますか？","はい。ConoHa Pencil単体でもお申し込みいただけます。"],
];
function Faq(){const [open,setOpen]=useState<number|null>(null);return <section className="faq-section lp-section" id="faq"><div className="faq-layout"><div className="faq-copy"><p className="section-kicker">FAQ</p><h2 className="section-title">始める前の<br/><mark>よくある質問</mark></h2><p>検討時に多い疑問だけを、短くまとめました。</p><aside>生成内容には誤りが含まれる可能性があります。公開前に、事実確認と推敲を行ってください。</aside></div><div className="faq-list">{faqs.map((f,i)=><article className={open===i?"faq-item open":"faq-item"} key={f[0]}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><b>Q</b><span>{f[0]}</span><i>{open===i?"−":"＋"}</i></button><p>{f[1]}</p></article>)}</div></div></section>}

const news=[
  ["2026/08/06","夏期休業のご案内（08/13～08/19）"],
  ["2026/07/29","『令和8年熊本地震』による災害のお見舞いとお知らせ"],
  ["2026/07/13","『令和8年7月滋賀県甲賀市の土砂崩れ』による災害のお見舞いとお知らせ"],
];
function News(){return <section className="news-section lp-section" id="news"><div className="news-heading"><div><p className="section-kicker">NEWS</p><h2 className="section-title">お知らせ</h2></div><a href="#news">もっと見る →</a></div><div className="news-list">{news.map(n=><article key={n[0]}><time>{n[0]}</time><span>お知らせ</span><p>{n[1]}</p></article>)}</div></section>}

function FinalCta(){return <><section className="final-cta"><h2>まずは1本、無料で作ってみよう。</h2><p>記事にしたいテーマを入力するだけ。<br/>ConoHa Pencilが、SEO記事制作の最初の一歩を支えます。</p><a href="#trial">無料で記事生成 <span>✦</span></a><small>Freeプラン 月額0円。まずは無料でお試しください。</small></section><footer className="footer"><div><a href="#top" className="footer-logo">ConoHa <em>Pencil</em></a><small>© GMO Internet Group, Inc.</small></div><nav><a href="#issues">機能</a><a href="#pricing">料金</a><a href="#start">お申し込み方法</a><a href="#faq">よくある質問</a><a href="#faq">サポート</a></nav></footer></>}

export default function HomePage(){return <main><Header/><Hero/><Issues/><Experts/><Pricing/><StartSteps/><Faq/><News/><FinalCta/></main>}
