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
        title="Smart API Parser 🤖"
      />

      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center mt-8">
        <p>This is a WIP of API parser...</p>
      </main>
    </div>
  );
}
