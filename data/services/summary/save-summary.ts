import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import type { TStrapiResponse, TSummary } from "@/types";
import { api } from "@/data/data-api";

const baseUrl = getStrapiURL();

export async function saveSummaryService(
  summaryData: Partial<TSummary>
): Promise<TStrapiResponse<TSummary>> {
  const query = qs.stringify({
    populate: "*",
  });

  const url = new URL("/api/summaries", baseUrl);
  url.search = query;

  // Strapi expects data to be wrapped in a 'data' object
  const payload = { data: summaryData };
  const result = await api.post<TSummary, typeof payload>(url.href, payload);

  console.log("######### actual save summary response");
  console.dir(result, { depth: null });

  return result;
}
