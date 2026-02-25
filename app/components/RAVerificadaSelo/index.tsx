"use client";

import { useEffect, useState } from "react";

export default function RAVerificadaSelo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("✅ Selo RA Verificada carregado com sucesso!");
  }, []);

  useEffect(() => {
    if (mounted) {
      const script = document.createElement("script");
      script.src = "https://s3.amazonaws.com/raichu-beta/ra-verified-dev/bundle.js";
      script.id = "ra-embed-verified-seal";
      script.type = "text/javascript";
      script.setAttribute("data-id", "NTA1MTI6ZmluYWRvLWRlbC11bml2ZXJzZQ==");
      script.setAttribute("data-target", "ra-verified-seal");
      script.setAttribute("data-model", "horizontal_1");
      script.async = true;

      const container = document.getElementById("ra-verified-seal");
      if (container) {
        container.appendChild(script);
      }
    }
  }, [mounted]);

  if (!mounted) {
    return;
  }

  return (
    <div>
      <div id="ra-verified-seal">
      </div>
    </div>
  );
}