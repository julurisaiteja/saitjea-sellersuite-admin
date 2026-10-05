"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">SellerSuite</p>
        <h1>Listings</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"sku":"SKU-882","title":"Mailer M","buyBox":"Lost","price":"$12.80","status":"Action"},{"sku":"SKU-210","title":"Bubble wrap","buyBox":"Won","price":"$8.40","status":"Healthy"},{"sku":"SKU-441","title":"Carton tape","buyBox":"Won","price":"$6.10","status":"Healthy"},{"sku":"SKU-501","title":"Poly mailer","buyBox":"Shared","price":"$9.90","status":"Watch"}]} columns={[{"key":"sku","label":"SKU"},{"key":"title","label":"Title"},{"key":"buyBox","label":"Buy Box"},{"key":"price","label":"Price"},{"key":"status","label":"Status"}]} searchKeys={["sku","title","buyBox","price","status"]} />
</section>
    </div>
  );
}
