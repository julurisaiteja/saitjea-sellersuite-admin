"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">SellerSuite</p>
        <h1>Ads</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"campaign":"Meta Prospect","spend":"$8.2k","roas":"1.8x","status":"Fatigue"},{"campaign":"Brand Search","spend":"$4.1k","roas":"6.1x","status":"Scaling"},{"campaign":"Retarget 30d","spend":"$2.8k","roas":"4.0x","status":"Healthy"},{"campaign":"TikTok UGC","spend":"$5.5k","roas":"2.6x","status":"Test"}]} columns={[{"key":"campaign","label":"Campaign"},{"key":"spend","label":"Spend"},{"key":"roas","label":"ROAS"},{"key":"status","label":"Status"}]} searchKeys={["campaign","spend","roas","status"]} />
</section>
    </div>
  );
}
