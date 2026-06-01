import { FileText } from "lucide-react";
import type { InvestorDocument } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DocumentCard({ document }: { document: InvestorDocument }) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-page">
        <FileText className="h-5 w-5 text-primary" strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm text-primary">{document.title}</h3>
        <p className="mt-1 text-xs text-muted">{document.date}</p>
      </div>
      <Button type="button" variant="outline" size="sm" className="w-fit">
        View
      </Button>
    </Card>
  );
}
