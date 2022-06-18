import { useState } from "react";

import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { Loading } from "../Loading";

type Props = {
  setScreenshot: (screenshot: string) => void;
};

export function ScreenshotButton({ setScreenshot }: Props) {
  const [isTakingScreenShot, setIsTakingScreenshot] = useState(false);

  const handleScreenshot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);

    const base64Image = canvas.toDataURL("image/png");

    setScreenshot(base64Image);

    console.log(base64Image);

    setIsTakingScreenshot(false);

    return;
  };

  return (
    <button
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleScreenshot}
      type="button"
    >
      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
