"use client";
import {useRouter} from "next/navigation";
import {Navigation} from "@/components/Navigation";

export default function Home() {
  const router = useRouter();

  const navigateToNecessarySteps = () => {
    router.push("/steps/necessary");
  };

  return (
    <div className="font-sans">
      <Navigation
        nextButtonFunc={navigateToNecessarySteps}
        title="Fill necessary information ✍️"
      />

      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <p>This is a WIP of API parser...</p>
      </main>
    </div>
  );
}
