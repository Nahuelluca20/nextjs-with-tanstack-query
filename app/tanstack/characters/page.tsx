import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

import {getCharacters} from "@/queries";

import Characters from "./characters";

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
