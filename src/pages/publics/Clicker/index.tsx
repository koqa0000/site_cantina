import { useState } from "react";
import styles from "./clicker.module.css";

interface intFormData {
  cliques: number
}

export default function Clicker() {
  const [formData, setFormData] = useState<intFormData>({
    cliques: 0
});

  return (
    <main className={styles.main}>
      <h1>{formData.cliques}</h1>
      <div className={styles.containerButton}>
        <button className={styles.clickerButton} onClick={() => setFormData({ ...formData, cliques: formData.cliques + 1})}>
          Clique aqui
        </button>
    </div>

    </main>
  );
}