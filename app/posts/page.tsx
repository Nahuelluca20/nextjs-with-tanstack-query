import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

import Posts from "./posts";
import {getPosts} from "./queries";

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
