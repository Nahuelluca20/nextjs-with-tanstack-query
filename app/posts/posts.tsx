"use client";

import {useQuery} from "@tanstack/react-query";

import TravelCard from "@/components/travel-card";
import PostTravelForm from "@/components/forms/post-travel-form";

import {getPosts} from "./queries";

export default function Posts() {
  const {data} = useQuery({queryKey: ["posts"], queryFn: getPosts});

  return (
    <section className="space-y-10">
      <div className="flex flex-col items-center space-y-10">
        <div className="w-full max-w-[400px] text-center space-y-2">
          <h1 className="text-4xl font-bold">Posts</h1>
          <p className="text-lg text-gray-500">List of posts</p>
          <div className="text-start">
            <PostTravelForm />
          </div>
        </div>
        <div className="space-y-3">
          {data?.map((post: any) => (
            <TravelCard key={post.id} content={post.content} id={post.id} title={post.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
