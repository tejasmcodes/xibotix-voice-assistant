"use client";

import { useEffect, useState } from "react";
import { getHealth } from "@/lib/api";

export default function Home() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    async function checkBackend() {
      try {
        const data = await getHealth();
        console.log(data);
        setStatus(data.status);
      } catch {
        setStatus("Backend not reachable");
      }
    }

    checkBackend();
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Xibotix Voice Assistant</h1>
      <p>{status}</p>
    </main>
  );
}