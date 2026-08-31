import Link from "next/link";
import { Button } from "@/components/ui/button";
import Field01 from "@/components/shadcn-space/field/field-01";

export default function Home() {
  return (
    <>
      <h1>សួស្ដីប្រជាជនកម្ពុជា</h1>

      <div className="mt-4 flex gap-3">
        <Button>button</Button>
        <Link href="/about">
          <Button variant="outline">About us</Button>
        </Link>
      </div>

      <div className="mt-6">
        <Field01 />
      </div>
    </>
  );
}
