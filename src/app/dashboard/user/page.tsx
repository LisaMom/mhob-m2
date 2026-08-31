
import { User, Mail, Shield, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Userpage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-foreground">User Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your personal account settings and preferences.</p>
      </div>

      <div className="p-6 rounded-2xl border border-border bg-background space-y-6">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-black">
            MK
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Mhob Khmer Guest</h2>
            <p className="text-xs text-muted-foreground">Member since 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
            <Mail className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground">guest@mhobkhmer.kh</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
            <Phone className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-semibold text-foreground">+855 12 345 678</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
            <MapPin className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-xs text-muted-foreground">Delivery Address</p>
              <p className="font-semibold text-foreground">123 Riverside, Phnom Penh</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40">
            <Shield className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-xs text-muted-foreground">Account Role</p>
              <p className="font-semibold text-foreground">Registered Customer</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="default" className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
