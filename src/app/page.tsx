import BusinessCard from "@/components/BusinessCard";
import Grainient from "@/components/Grainient";

export default function Home() {
  return (
    <main className="page-frame">
      <div className="page-background">
        <Grainient grainAmount={0} />
      </div>
      <div className="card-frame">
        <BusinessCard />
      </div>
    </main>
  );
}
