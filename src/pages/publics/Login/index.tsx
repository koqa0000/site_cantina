import { useState } from "react";
import styles from "./login.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function login() {
  interface formDataInt {
    email: string
    password: string
    visibility: boolean
  }

  const [formData, setFormData] = useState<formDataInt>({
    email: "",
    password: "",
    visibility: false
  });


  return (
    <main className={styles.main}>
      <section className = {styles.section}>
        <h1>Conecte-se</h1>
        <h2>Insira as suas informações abaixo para conectar-se</h2>

        <div className={styles.containerButton}>
          <input 
            placeholder="Adicione o seu email"
            type="email" 
            value={formData.email}
            onChange={event => setFormData({...formData, email: event.target.value})}
            />
        </div>

        <div className={styles.containerButton}>
          <input 
            placeholder= {formData.visibility ? "Insira a sua senha" : "• • • • • • • • • • • • •"}
            type = {formData.visibility ? "text" : "password"}
            value={formData.password}
            onChange={event => setFormData({ ...formData, password: event.target.value})}
            />

            <button 
              className={styles.changeVisibility}
              onClick={() => setFormData({ ...formData, visibility: !formData.visibility})}
              title={formData.visibility ? "Esconder caracteres da senha" : "Exibir caracteres da senha"}
              >

              {formData.visibility ? <FaRegEye className={styles.changeVisibleIcon} /> : <FaRegEyeSlash className={styles.changeVisibleIcon} />}
            </button>
        </div>

        <div className={styles.rowCenter}>
          <button 
            className={styles.submitBtn}
            onClick={() => alert(`Email: ${formData.email} Senha: ${formData.password}`)}>
              
              ENVIAR
          </button>
        </div>
      </section>

    </main>
  );
}