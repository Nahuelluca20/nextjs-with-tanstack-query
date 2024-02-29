import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

import Characters from "./characters";
import {getCharacters} from "./queries";

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Characters />
    </HydrationBoundary>
  );
}
