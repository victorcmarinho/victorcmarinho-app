"use client";

import { useEffect } from "react";

export default function RAVerificadaSelo() {
  useEffect(() => {
    console.log("✅ Selo RA Verificada carregado com sucesso!");
    console.log("📍 Componente montado em:", window.location.pathname);
  }, []);

  return (
    <div style={{ width: "105px", height: "85px", overflow: "hidden", borderRadius: "0.5rem" }}>
      <iframe
        src="https://verificada.reclameaqui.com.br/embed/static?id=NTA1MTI6ZmluYWRvLWRlbC11bml2ZXJzZQ==&model=compact_1"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: "none", display: "block", margin: 0, padding: 0, overflow: "hidden" }}
        title="Selo RA Verificada"
        allowTransparency={true}
      ></iframe>
    </div>
  );
}

