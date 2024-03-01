import {Card, CardContent} from "./ui/card";
import {Skeleton} from "./ui/skeleton";

export default function LoadingCharacterCard() {
  return (
    <Card className="w-[340px]">
      <div>
        <Skeleton className="aspect-square overflow-hidden rounded-t-lg" />
      </div>
      <CardContent className="p-6">
        <Skeleton className="h-[28px] w-[200px]" />
        <ul className="text-sm space-y-2 my-2">
          <Skeleton className="h-[13px] w-[150px]" />
          <Skeleton className="h-[13px] w-[150px]" />
          <Skeleton className="h-[13px] w-[150px]" />
        </ul>
      </CardContent>
    </Card>
  );
}
