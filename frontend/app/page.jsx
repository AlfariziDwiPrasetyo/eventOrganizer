import Caraousel from "@/components/Caraousel";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <main>
      <Caraousel />
      <div className="mt-20 mb-12">
        <p className="text-center font-bold black-text text-4xl">All Event</p>
      </div>
      <div className="mt-10 mb-10">
        <Feed />
      </div>
    </main>
  );
}
