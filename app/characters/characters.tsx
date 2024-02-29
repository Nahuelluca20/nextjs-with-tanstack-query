"use client";

import {useQuery} from "@tanstack/react-query";

import {getCharacters} from "@/app/characters/queries";

export default function Characters() {
  const {data, isPending} = useQuery({queryKey: ["characters"], queryFn: getCharacters});

  console.log(data);

  return <div />;
}
