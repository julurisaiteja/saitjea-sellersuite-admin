"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">SellerSuite</p>
        <h1>Orders</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"order":"S-10421","channel":"Amazon","sku":"SKU-882","shipBy":"14:00","status":"Risk"},{"order":"S-10426","channel":"Shopify","sku":"SKU-882","shipBy":"13:30","status":"Risk"},{"order":"S-10429","channel":"Amazon","sku":"SKU-772","shipBy":"15:00","status":"Risk"},{"order":"S-10422","channel":"Shopify","sku":"SKU-210","shipBy":"16:00","status":"Packed"},{"order":"S-10423","channel":"Walmart","sku":"SKU-441","shipBy":"15:30","status":"Picking"}]} columns={[{"key":"order","label":"Order"},{"key":"channel","label":"Channel"},{"key":"sku","label":"SKU"},{"key":"shipBy","label":"Ship by"},{"key":"status","label":"Status"}]} searchKeys={["order","channel","sku","shipBy","status"]} />
</section>
    </div>
  );
}
