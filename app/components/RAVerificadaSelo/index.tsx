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
        src="https://verificada.obviostaging.com.br/embed/static?id=SHdwWk5vNjMzS2t6THA5aTp0cmFuc2NvbGV0YS1sb2dpc3RpY2EtYW1iaWVudGFsLWx0ZGE=&model=compact_1"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        style={{ border: "none", display: "block", margin: 0, padding: 0 }}
        title="Selo RA Verificada"
        allowTransparency={true}
        onLoad={() => {
          console.log("✅ Iframe do Selo RA Verificada carregado!");
        }}
      />
    </div>
  );
}

