import { useEffect, useState } from "react";
import "./Loader.css";

import logo from "/logo/logo.png";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [exit, setExit] = useState(false);

useEffect(() => {
  document.body.style.overflow = "hidden";

  const t1 = setTimeout(() => setExit(true), 2000);

  const t2 = setTimeout(() => {
    document.body.style.overflow = "auto";
    onFinish();
  }, 2800);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    document.body.style.overflow = "auto";
  };
}, []);

  return (
    <div className={`loader ${exit ? "exit" : ""}`}>
      <div className="loader__inner">
        <div className="loader__logo">
          <img src={logo} alt="logo" />
                  

        </div>
{/* <div className="loader__line" /> */}
      </div>
    </div>
  );
}