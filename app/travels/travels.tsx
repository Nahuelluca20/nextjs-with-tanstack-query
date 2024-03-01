"use client";

import {useQuery} from "@tanstack/react-query";

import {getTravels} from "./queries";

export default function Travels() {
  const {data} = useQuery({queryKey: ["travels"], queryFn: getTravels});

  console.log(data);

  return (
    <section className="space-y-10">
      <div className="gap-8">
        {/* {data?.map((character: any) => (
          <CharactersCard
            key={character.id}
            image={character.image}
            location={character.location.name}
            name={character.name}
            species={character.species}
            status={character.status}
          />
        ))} */}
      </div>
    </section>
  );
}
