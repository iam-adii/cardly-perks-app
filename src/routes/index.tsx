import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  QrCode,
  Gift,
  History,
  UtensilsCrossed,
  Dumbbell,
  Plane,
  ShoppingBag,
  Star,
  Home,
  Tag,
  CreditCard,
  User,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurum Privilege — Membership Card & Offers" },
      {
        name: "description",
        content:
          "Your digital membership privilege card with exclusive vendor offers across dining, wellness, travel and retail.",
      },
      { property: "og:title", content: "Aurum Privilege — Membership Card & Offers" },
      {
        property: "og:description",
        content:
          "Your digital membership privilege card with exclusive vendor offers across dining, wellness, travel and retail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const categories = [
  { id: "all", label: "All" },
  { id: "dining", label: "Dining" },
  { id: "wellness", label: "Wellness" },
  { id: "travel", label: "Travel" },
  { id: "retail", label: "Retail" },
];

const offers = [
  {
    icon: UtensilsCrossed,
    vendor: "Nova Roast Co.",
    category: "Dining",
    categoryId: "dining",
    meta: "Dining · Ends Jun 08",
    value: "20% Off",
  },
  {
    icon: Dumbbell,
    vendor: "Sanae Studio",
    category: "Wellness",
    categoryId: "wellness",
    meta: "Wellness · Ends May 30",
    value: "2×1",
  },
  {
    icon: Plane,
    vendor: "Harbor & Vine",
    category: "Travel",
    categoryId: "travel",
    meta: "Travel · Ends Aug 22",
    value: "15% Off",
  },
  {
    icon: ShoppingBag,
    vendor: "Atelier Marne",
    category: "Retail",
    categoryId: "retail",
    meta: "Retail · Ends Jul 14",
    value: "$50 Off",
  },
];

function Index() {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? offers : offers.filter((o) => o.categoryId === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md px-5 pt-6 pb-32">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
              EM
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Good Morning</p>
              <p className="truncate text-[15px] font-bold tracking-tight">
                Elena Marchetti
              </p>
            </div>
          </div>
          <button
            aria-label="Notifications"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-card text-foreground shadow-sm ring-1 ring-black/5 transition-transform active:scale-95"
          >
            <Bell className="size-5" strokeWidth={1.8} />
          </button>
        </header>

        {/* Membership card */}
        <p className="mt-7 text-[15px] font-bold tracking-tight">My Card</p>
        <section className="relative mt-3 overflow-hidden rounded-[28px] bg-primary p-6 text-primary-foreground shadow-[0_24px_50px_-20px_color-mix(in_oklab,var(--primary)_60%,transparent)]">
          <div
            className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
            }}
          />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="font-display text-lg font-bold tracking-tight">
                Aurum
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-primary-foreground/50">
                Privilege Membership
              </p>
            </div>
            <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold-foreground">
              Gold
            </span>
          </div>

          <div className="relative mt-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground/50">
              Member
            </p>
            <p className="mt-1 font-display text-[22px] font-semibold tracking-tight">
              Elena Marchetti
            </p>
          </div>

          <div className="relative mt-5 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground/50">
                Card number
              </p>
              <p className="mt-1 font-mono text-sm tracking-[0.16em] text-primary-foreground/90">
                •••• •••• •••• 6925
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground/50">
                Expires
              </p>
              <p className="mt-1 text-xs font-semibold text-primary-foreground/90">
                09 / 28
              </p>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: QrCode, label: "Scan" },
            { icon: Gift, label: "Rewards" },
            { icon: History, label: "History" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-2.5 rounded-3xl bg-card py-4 shadow-sm ring-1 ring-black/5 transition-transform active:scale-95"
            >
              <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-[18px]" strokeWidth={1.9} />
              </span>
              <span className="text-xs font-semibold">{label}</span>
            </button>
          ))}
        </div>

        {/* Category chips */}
        <div className="no-scrollbar -mx-5 mt-7 flex gap-2 overflow-x-auto px-5 pb-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={
                active === c.id
                  ? "shrink-0 rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-primary-foreground transition-colors"
                  : "shrink-0 rounded-full bg-card px-4 py-2 text-[13px] font-semibold text-muted-foreground ring-1 ring-black/5 transition-colors"
              }
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Offers header */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <h2 className="text-[15px] font-bold tracking-tight">
              Vendor Offers
            </h2>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground">
              <Star className="size-3 fill-gold text-gold" />
              {visible.length} exclusive {visible.length === 1 ? "offer" : "offers"} near you
            </p>
          </div>
          <button className="text-xs font-bold text-foreground underline-offset-2 hover:underline">
            View All
          </button>
        </div>

        {/* Offers list */}
        <div className="mt-3.5 space-y-3">
          {visible.map((offer, i) => (
            <article
              key={offer.vendor}
              style={{ animationDelay: `${i * 70}ms` }}
              className="animate-offer-rise flex items-center gap-3.5 rounded-3xl bg-card p-4 shadow-sm ring-1 ring-black/5"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-muted text-foreground">
                <offer.icon className="size-5" strokeWidth={1.8} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold tracking-tight">
                  {offer.vendor}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                  {offer.meta}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-secondary px-3 py-1.5 text-xs font-extrabold tracking-tight text-secondary-foreground">
                {offer.value}
              </span>
            </article>
          ))}
        </div>
      </div>

      {/* Floating bottom nav — same as reference */}
      <nav className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 px-5 pb-5">
        <div className="grid grid-cols-4 rounded-full bg-card py-2.5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Tag, label: "Offers", active: false },
            { icon: CreditCard, label: "Card", active: false },
            { icon: User, label: "Profile", active: false },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              aria-label={label}
              className="flex flex-col items-center gap-1 py-1"
            >
              <span
                className={
                  active
                    ? "grid size-11 place-items-center rounded-full bg-primary text-primary-foreground"
                    : "grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                <Icon className="size-5" strokeWidth={1.9} />
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
