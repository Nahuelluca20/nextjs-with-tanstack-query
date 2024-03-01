"use client";

import {useQuery} from "@tanstack/react-query";

import TravelCard from "@/components/travel-card";
import PostTravelForm from "@/components/forms/post-travel-form";

import {getTravels} from "./queries";

export default function Travels() {
  const {data} = useQuery({queryKey: ["travels"], queryFn: getTravels});

  return (
    <section className="space-y-10">
      <div className="flex flex-col items-center space-y-10">
        <div className="w-full max-w-[400px] text-center space-y-2">
          <h1 className="text-4xl font-bold">Travels</h1>
          <p className="text-lg text-gray-500">List of travels</p>
          <div className="text-start">
            <PostTravelForm />
          </div>
        </div>
        <div className="space-y-3">
          {data?.map((character: any) => (
            <TravelCard key={character.id} content={character.content} title={character.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
