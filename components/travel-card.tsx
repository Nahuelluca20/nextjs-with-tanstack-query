import React from "react";

import {Card, CardContent} from "./ui/card";

export default function TravelCard({title, content}: {title: string; content: string}) {
  return (
    <Card className="w-[340px]">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>
          <span className="text-medium font-semibold mr-1">content:</span>
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
