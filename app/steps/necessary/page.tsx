"use client";

import {useRouter} from "next/navigation";
import {Navigation} from "@/components/Navigation";
import {NecessaryStepsForm} from "@/components/NecessaryStepsForm";

const MandatoryInputs = () => {
  const router = useRouter();
  const navigateToEndpointsPreview = () => {
    router.push("/steps/endpoints");
  };

  const navigateToHomeScreen = () => {
    router.push("/");
  };

  return (
    <div className="font-sans">
      <Navigation
        backButtonFunc={navigateToHomeScreen}
        nextButtonFunc={navigateToEndpointsPreview}
        title="Fill necessary information ✍️"
      />
      <main className="">
        <NecessaryStepsForm />
      </main>
    </div>
  );
};

export default MandatoryInputs;
