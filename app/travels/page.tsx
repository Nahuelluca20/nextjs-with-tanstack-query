import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

import {getTravels} from "@/queries";

import Travels from "./travels";

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["travels"],
    queryFn: getTravels,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Travels />
    </HydrationBoundary>
  );
}
