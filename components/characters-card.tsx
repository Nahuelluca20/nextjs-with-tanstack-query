import Image from "next/image";

import {CardContent, Card} from "@/components/ui/card";

export default function CharactersCard({
  name,
  image,
  status,
  species,
  location,
}: {
  name: string;
  image: string;
  status: string;
  species: string;
  location: string;
}) {
  return (
    <Card className="w-[340px]">
      <div>
        <Image
          alt={`${name} character`}
          className="aspect-square overflow-hidden rounded-t-lg"
          height="180"
          src={image}
          width="340"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold">{name}</h3>
        <ul className="text-sm my-2">
          <li>status: {status} </li>
          <li>species: {species} </li>
          <li>location: {location} </li>
        </ul>
      </CardContent>
    </Card>
  );
}
