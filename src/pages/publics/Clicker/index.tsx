import { useState } from "react";
import styles from "./clicker.module.css";
import "./images.jpg"

interface intFormData {
  cliques: number,
  comprado: number,
  preco: number
}

export default function Clicker() {
  const [formData, setFormData] = useState<intFormData>({
    cliques: 0,
    comprado: 0,
    preco: 10
});

  return (
    <main className={styles.main}>
      <h1>Total de cliques: {formData.cliques.toFixed(0)}</h1>
      <h1>Total de compras: {formData.comprado.toFixed(0)}</h1>

      <div className={styles.containerButton}>
        <button 
          className={styles.clickerButton} 
          onClick={() => setFormData({ ...formData, cliques: formData.cliques + ((formData.comprado * 2) + 1)})}>
          Clique aqui
        </button>
     </div>

     <div >     
        <button 
          className={styles.comprar}
          onClick={() => setFormData({
            ...formData, 
            cliques: formData.cliques >= formData.preco ? (formData.cliques - formData.preco) : formData.cliques = formData.cliques, 
            comprado: formData.cliques >= formData.preco ? formData.comprado + 1 : formData.comprado + 0,
            preco: formData.cliques >= formData.preco ? formData.preco * 1.5 : formData.preco + 0})}
          
        >Compre aqui por: <br /> <span>{formData.preco.toFixed(0)} Cliques</span></button>
     </div>

    </main>
  );
}