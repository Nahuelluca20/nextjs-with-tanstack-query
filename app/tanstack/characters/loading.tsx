import LoadingCharacterCard from "@/components/loading-character-card";

export default function loading() {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      <LoadingCharacterCard />
      <LoadingCharacterCard />
      <LoadingCharacterCard />
      <LoadingCharacterCard />
      <LoadingCharacterCard />
      <LoadingCharacterCard />
    </div>
  );
}
