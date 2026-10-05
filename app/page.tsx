"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"GMV today",values:[42.1,44,39.8,45.2],suffix:"k"},{label:"Orders",values:[612,640,588,655],suffix:""},{label:"Buy Box",values:[91,88,93,89],suffix:"%"},{label:"Ship-by risk",values:[41,36,48,33],suffix:""},{label:"ROAS blend",values:[2.4,2.2,2.6,2.1],suffix:"x"},{label:"Returns",values:[3.1,3.4,2.8,3.2],suffix:"%"}];
const ACTIVITY=["Buy Box lost SKU-882","Wave S-19 staged","Meta ROAS 1.8","Amazon health 98","Refund spike SKU-210"];
const ROWS=[{order:"S-10421",channel:"Amazon",sku:"SKU-882",shipBy:"14:00",value:"$128",status:"Risk"},{order:"S-10422",channel:"Shopify",sku:"SKU-210",shipBy:"16:00",value:"$64",status:"Packed"},{order:"S-10423",channel:"Walmart",sku:"SKU-441",shipBy:"15:30",value:"$89",status:"Picking"},{order:"S-10424",channel:"Amazon",sku:"SKU-118",shipBy:"18:00",value:"$42",status:"Queued"},{order:"S-10425",channel:"eBay",sku:"SKU-330",shipBy:"17:00",value:"$55",status:"Packed"},{order:"S-10426",channel:"Shopify",sku:"SKU-882",shipBy:"13:30",value:"$128",status:"Risk"},{order:"S-10427",channel:"Amazon",sku:"SKU-501",shipBy:"19:00",value:"$210",status:"Queued"},{order:"S-10428",channel:"Walmart",sku:"SKU-210",shipBy:"16:30",value:"$64",status:"Picking"},{order:"S-10429",channel:"Amazon",sku:"SKU-772",shipBy:"15:00",value:"$33",status:"Risk"},{order:"S-10430",channel:"Shopify",sku:"SKU-441",shipBy:"20:00",value:"$89",status:"Queued"},{order:"S-10431",channel:"Amazon",sku:"SKU-118",shipBy:"17:30",value:"$42",status:"Packed"},{order:"S-10432",channel:"eBay",sku:"SKU-501",shipBy:"18:30",value:"$210",status:"Picking"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>COMMERCE GLASS</p><h1>Seller cockpit</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Frosted glass for GMV, Buy Box, and ship-by SLA across channels.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80" alt="Fulfillment"/><div className="cap">COMMERCE FILM · PACK</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<section className="mosaic" aria-label="Channel mosaic">
{[["Amazon","Health 98",91],["Shopify","GMV $12.4k",84],["Walmart","Buy Box 86%",74],["eBay","Returns 2.1%",68]].map(([n,s,v])=><div key={String(n)}><strong>{n}</strong><div>{s}</div><Meter value={Number(v)}/></div>)}
</section>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+4}/></FadeIn>)}</div>
<div className="grid-2"><section className="panel"><h2>GMV pulse</h2><TrendArea/></section><section className="panel"><h2>Channel mix</h2><MixBars/></section></div>
<section className="panel"><h2>Ship-by board</h2><FilterTable rows={ROWS} columns={[{key:"order",label:"Order"},{key:"channel",label:"Channel"},{key:"sku",label:"SKU"},{key:"shipBy",label:"Ship by"},{key:"value",label:"Value"},{key:"status",label:"Status"}]} searchKeys={["order","channel","sku","status"]}/></section>
<section className="panel"><h2>Listing heat</h2><Heatmap seed={8}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(1);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
