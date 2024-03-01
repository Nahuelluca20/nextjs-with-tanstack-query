"use client";

import {useQuery} from "@tanstack/react-query";

import {getCharacters} from "@/queries";
import CharactersCard from "@/components/characters-card";

export default function Characters() {
  const {data} = useQuery({queryKey: ["characters"], queryFn: getCharacters});

  return (
    <section className="space-y-10">
      <h1 className="ml-4 text-3xl font-bold">Characters</h1>
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
