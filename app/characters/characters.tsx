"use client";

import {useQuery} from "@tanstack/react-query";

import CharactersCard from "@/components/characters-card";

import {getCharacters} from "./queries";

export default function Characters() {
  const {data} = useQuery({queryKey: ["characters"], queryFn: getCharacters});

  return (
    <section className="space-y-10">
      <div className="flex justify-center flex-wrap gap-8">
        {data?.map((character: any) => (
          <CharactersCard
            key={character.id}
            image={character.image}
            location={character.location.name}
            name={character.name}
            species={character.species}
            status={character.status}
          />
        ))}
      </div>
    </section>
  );
}
