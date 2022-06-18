import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { Feedback } from "./Steps/Feedback";
import { FeedbackContent } from "./Steps/FeedbackContent";

export const feedbackTypes = {
  BUG: {
    title: "Issue",
    image: {
      source: bugImageUrl,
      alt: "Bug image",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "Light bulb image",
    },
  },
  OTHERS: {
    title: "Others",
    image: {
      source: thoughtImageUrl,
      alt: "Thought buble image",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const handleFeedbackRestart = () => setFeedbackType(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <Feedback setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContent
          feedbackType={feedbackType}
          handleFeedbackRestart={handleFeedbackRestart}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
