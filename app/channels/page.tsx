"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">SellerSuite</p>
        <h1>Channels</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="mosaic">
          {[["Amazon",98],["Shopify",91],["Walmart",86],["eBay",88]].map(([n,v])=><div key={String(n)}><strong>{n}</strong><Meter value={Number(v)}/><div>Health {v}</div></div>)}
        </section>
    </div>
  );
}
