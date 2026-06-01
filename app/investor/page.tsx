import { MetricsSummary } from "@/components/investor/MetricsSummary";
import { DocumentCard } from "@/components/investor/DocumentCard";
import {
  investorDocuments,
  businessOverview,
  businessMetrics,
} from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export default function InvestorPage() {
  return (
    <div className="space-y-8">
      <MetricsSummary />

      <section>
        <h2 className="font-medium text-base text-primary">Documents</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {investorDocuments.map((document) => (
            <DocumentCard key={document.id} document={document} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-medium text-base text-primary">Business overview</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card>
            <p className="text-sm leading-relaxed text-secondary">
              {businessOverview}
            </p>
          </Card>
          <Card>
            <ul className="space-y-3">
              {businessMetrics.map((metric) => (
                <li
                  key={metric.label}
                  className="flex items-center justify-between border-b-hairline border-border/60 pb-3 text-sm last:border-0 last:pb-0"
                >
                  <span className="text-muted">{metric.label}</span>
                  <span className="font-medium text-primary">{metric.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
