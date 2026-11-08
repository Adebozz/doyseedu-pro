import type { MetadataRoute } from "next";
import { countries } from "@/lib/countries";

const baseUrl = "https://www.doyseedu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/eligibility-checker` },
    ...countries.map(({ slug }) => ({ url: `${baseUrl}/study-abroad/${slug}` })),
  ];
}
