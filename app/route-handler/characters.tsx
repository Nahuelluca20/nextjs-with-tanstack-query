"use client";

import {useEffect, useState} from "react";

import CharactersCard from "@/components/characters-card";

export default function Characters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/characters");
      const data = await response.json();

      setData(data);
    }
    fetchData();
  }, []);

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
