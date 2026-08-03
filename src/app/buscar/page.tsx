import { Suspense } from "react";
import { SearchResultsPage } from "@/components/store/search-results-page";

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchResultsPage />
    </Suspense>
  );
}
