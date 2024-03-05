import React from "react";
import {useAction} from "next-safe-action/hooks";
import {Trash} from "lucide-react";

import {deletePost} from "@/app/posts/queries";

import {Card, CardContent} from "./ui/card";

export default function TravelCard({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: string;
}) {
  const {execute: exectueDeletePost} = useAction(deletePost);

  return (
    <Card className="w-[340px]">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>
          <span className="text-medium font-semibold mr-1">content:</span>
          {content}
        </p>
        <Trash
          className="w-4 text-red-400 cursor-pointer "
          onClick={() => exectueDeletePost({id})}
        />
      </CardContent>
    </Card>
  );
}
