"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Cockpit"],["/orders","Orders"],["/listings","Listings"],["/channels","Channels"],["/ads","Ads"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"Buy Box loss on SKU-882","a":"Price gap 3.2%. Match within floor; boost FBA replen. Expected Buy Box recover 6–10h."},{"q":"Ship-by SLA risk","a":"41 orders near breach. Prioritize wave S-19; overtime 2 packers until 20:00."},{"q":"ROAS soft on Meta","a":"Creative fatigue day 11. Rotate UGC set B; cut prospecting 15%, shift to retarget."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell">
      <aside className="side">
        <div className="brand">Seller<span>Suite</span></div>
        <p style={{ fontSize: 10, color: "var(--muted)", margin: "0.35rem 0 0.75rem" }}>Commerce Glass panels — seller cockpit</p>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
        <p style={{ marginTop: "1.25rem", fontSize: 10, color: "var(--muted)" }}>LOCAL <LiveClock /> · ⌘K</p>
      </aside>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="SellerSuite" prompts={PROMPTS} />
    </div>
  );
}
