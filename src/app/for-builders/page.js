import TierPage from "@/components/TierPage";
import { tierBySlug } from "@/data/tiers";

const tier = tierBySlug("for-builders");

export const metadata = {
  title: tier.metaTitle,
  description: tier.metaDescription,
  keywords: tier.keywords,
  alternates: { canonical: "/for-builders" },
  openGraph: {
    title: tier.metaTitle,
    description: tier.metaDescription,
    url: "/for-builders",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: tier.metaTitle,
    description: tier.metaDescription,
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <TierPage tier={tier} />;
}
