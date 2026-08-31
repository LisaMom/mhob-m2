
import { ShoppingBag, TrendingUp, Users, DollarSign } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  { title: "Total Revenue", value: "$12,450.00", change: "+14%", icon: DollarSign },
  { title: "Total Orders", value: "320", change: "+8%", icon: ShoppingBag },
  { title: "Active Customers", value: "1,240", change: "+22%", icon: Users },
  { title: "Growth Rate", value: "18.5%", change: "+4.2%", icon: TrendingUp },
];

const recentOrders = [
  { id: "ORD-001", customer: "Sreymom Chan", dish: "Fish Amok", status: "Completed", amount: "$8.50" },
  { id: "ORD-002", customer: "James Carter", dish: "Beef Lok Lak", status: "Preparing", amount: "$10.00" },
  { id: "ORD-003", customer: "Dara Sok", dish: "Kuy Teav Phnom Penh", status: "Delivered", amount: "$6.50" },
];

export default function DashBoardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-foreground">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground">Welcome back! Here is what is happening at Mhob Khmer today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ title, value, change, icon: Icon }) => (
          <div key={title} className="p-4 rounded-xl border border-border bg-background space-y-2">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-semibold">{title}</span>
              <Icon className="w-4 h-4 text-orange-500" />
            </div>
            <div className="text-xl font-bold text-foreground">{value}</div>
            <span className="text-xs font-medium text-emerald-600">{change} from last month</span>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="space-y-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">Recent Orders</h2>
          <Link href="/product" className={buttonVariants({ variant: "outline", size: "sm" })}>
            View All Dishes
          </Link>
        </div>

        <div className="divide-y divide-border border border-border rounded-xl overflow-hidden bg-background">
          {recentOrders.map((order) => (
            <div key={order.id} className="p-4 flex items-center justify-between text-sm">
              <div>
                <p className="font-semibold text-foreground">{order.customer}</p>
                <p className="text-xs text-muted-foreground">{order.dish} · {order.id}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-foreground">{order.amount}</p>
                <span className="text-xs text-orange-600 font-medium">{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
