import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

import Travels from "./travels";
import {getTravels} from "./queries";

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
