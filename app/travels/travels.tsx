"use client";

import {useQuery} from "@tanstack/react-query";

import TravelCard from "@/components/travel-card";

import {getTravels} from "./queries";

export default function Travels() {
  const {data} = useQuery({queryKey: ["travels"], queryFn: getTravels});

  return (
    <section className="space-y-10">
      <div className="flex flex-col items-center space-y-5">
        <div>
          <h1 className="text-4xl font-bold">Travels</h1>
          <p className="text-lg text-gray-500">List of travels</p>
        </div>
        {data?.map((character: any) => (
          <TravelCard key={character.id} content={character.content} title={character.title} />
        ))}
      </div>
    </section>
  );
}
