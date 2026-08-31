import Link from "next/link";
import { LayoutDashboard, User, ShoppingBag, Settings } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Dashboard Navigation Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-2">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3 py-2">
              Dashboard Navigation
            </h2>
            <nav className="flex flex-col gap-1 text-sm font-semibold">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted text-foreground transition-colors"
              >
                <LayoutDashboard className="w-4 h-4 text-orange-500" />
                Overview
              </Link>
              <Link
                href="/dashboard/user"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted text-foreground transition-colors"
              >
                <User className="w-4 h-4 text-orange-500" />
                User Profile
              </Link>
              <Link
                href="/product"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted text-foreground transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-orange-500" />
                Manage Products
              </Link>
            </nav>
          </div>
        </aside>

        {/* Dashboard Main Content */}
        <main className="flex-1 bg-card border border-border rounded-2xl p-6 shadow-xs">
          {children}
        </main>
      </div>
    </div>
  );
}