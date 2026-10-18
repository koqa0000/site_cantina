import { useState } from "react";
import styles from "./register.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function register() {
  interface formDataInt {
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
    visible: boolean
  };

  const [formData, setFormData] = useState<formDataInt>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    visible: false
  });
  
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Cadastre-se</h1>
        <h2>Adicione os seus dados corretamente</h2>

        <div className={styles.inputContainer}>
          <label htmlFor="name">Nome</label>
          <input 
            type="text" 
            placeholder="Adicione o seu nome"
            value={formData.name}
            onChange={Event => setFormData({ ...formData, name: Event.target.value})}/>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="name">Email</label>
          <input 
            type="email" 
            placeholder="Adicione o seu email"
            value={formData.email}
            onChange={Event => setFormData({ ...formData, email: Event.target.value})}/>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="name">Senha</label>
          <input 
            type={formData.visible ? "text" : "password"} 
            placeholder={formData.visible ? "Adicione uma senha" : "• • • • • • • • • • • • •"}
            value={formData.password}
            onChange={Event => setFormData({ ...formData, password: Event.target.value})}/>

            <button 
              className={styles.changeVisible}
              onClick={() => setFormData({ ...formData, visible: !formData.visible})}>
              {formData.visible ? <FaRegEye className={styles.changeVisibleIcon} />  : <FaRegEyeSlash className={styles.changeVisibleIcon} />}
            </button>
        </div>


        <div className={styles.inputContainer}>
          <label htmlFor="name">Confirme a sua Senha</label>
          <input 
            type={formData.visible ? "text" : "password"} 
            placeholder={formData.visible ? "Confirme a senha" : "• • • • • • • • • • • • •"}
            value={formData.passwordConfirm}
            onChange={Event => setFormData({ ...formData, passwordConfirm: Event.target.value})}/>

            <button 
              className={styles.changeVisible}
              onClick={() => setFormData({ ...formData, visible: !formData.visible})}>
              {formData.visible ? <FaRegEye className={styles.changeVisibleIcon} />  : <FaRegEyeSlash className={styles.changeVisibleIcon} />}
            </button>
        </div>


        <div className={styles.rowCenter}>
          <button
            className={styles.submitBtn}
            onClick={() => alert(`Nome: ${formData.name} Email: ${formData.email} Senha: ${formData.password} Confirmação: ${formData.passwordConfirm}`)}
          >Junte-se a nós</button>
        </div>
      </section>
    </main>
  );
}