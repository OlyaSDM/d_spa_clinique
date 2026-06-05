import { useEffect, useState } from "react";
import "./Loader.css";

import logo from "/logo/logo.png";

type LoaderProps = {
  onFinish: () => void;
};

export default function Loader({ onFinish }: LoaderProps) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let exitTimer: number;
    let finishTimer: number;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    exitTimer = window.setTimeout(() => {
      setExit(true);
    }, 2000);

    finishTimer = window.setTimeout(() => {
      document.body.style.overflow = originalOverflow || "auto";
      onFinish();
    }, 2800);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [onFinish]);

  return (
    <div className={`loader ${exit ? "exit" : ""}`}>
      <div className="loader__inner">
        <div className="loader__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}