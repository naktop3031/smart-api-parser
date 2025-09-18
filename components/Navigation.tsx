"use client";

import {StepButton} from "@/components/StepButton";

type NavigationProps = {
  backButtonFunc?: () => void;
  nextButtonFunc?: () => void;
  title: string;
};

export const Navigation = ({
  backButtonFunc,
  nextButtonFunc,
  title,
}: NavigationProps) => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white/20 backdrop-blur-sm p-4 shadow-md">
      {backButtonFunc ? (
        <StepButton isForward={false} handleClick={backButtonFunc} />
      ) : (
        <div className="w-10" />
      )}
      <h2 className="text-lg font-semibold">{title}</h2>
      {nextButtonFunc ? (
        <StepButton isForward={true} handleClick={nextButtonFunc} />
      ) : (
        <div className="w-10" />
      )}
    </div>
  );
};
