"use client";

import { useEffect } from "react";

export default function RAVerificadaSelo() {
  useEffect(() => {
    console.log("✅ Selo RA Verificada carregado com sucesso!");
    console.log("📍 Componente montado em:", window.location.pathname);
  }, []);

  return (
    <div style={{ width: "105px", height: "85px", overflow: "hidden", borderRadius: "0.5rem" }}>
      <div id="ra-verified-seal">
        <script
          type="text/javascript"
          id="ra-embed-verified-seal"
          src="https://s3.amazonaws.com/raichu-beta/ra-verified-dev/bundle.js"
          data-id="NTA1MTI6ZmluYWRvLWRlbC11bml2ZXJzZQ=="
          data-target="ra-verified-seal"
          data-model="horizontal_1"
        ></script>
      </div>
    </div>
  );
}

