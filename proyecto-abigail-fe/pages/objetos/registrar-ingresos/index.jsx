import Button from "components/Button";
import Layout from "components/Layout";
import Input from "components/Input";
import styles from "./style.module.css";

export default function RegistrarIngresos({ currentPage = false }) {
  return (
    <Layout currentPage={currentPage}>
      <section>
        <p>Registrar ingreso</p>
        <Button id="Escaner" name="Escaner">Escaner QR</Button>
        <div className={styles.conteinerTop}>
            <div>
                <div className={styles.checkbox}>
                <Input label="DPI" name="dpi" placeholder="" maxLength="13" required /> <button><img src="/icons/erase.svg" alt="" /></button>
                </div>

                <div className={styles.checkbox}>
                <Input label="Nombre" name="nombre" placeholder="" required /> <button><img src="/icons/erase.svg" alt="" /></button>
                </div>
                <div className={styles.checkbox}>
                <Input label="Destino" name="Destino" placeholder="" required /> <button><img src="/icons/erase.svg" alt="" /></button>
                </div>
            </div>
      
        
        <br />
        </div>
        <div className={styles.contenedor}>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Inquilino</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Delivery</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Visitante</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Dueño</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Servicios emergencia</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Servicios externos</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Peaton</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Vehículo de 2 ruedas</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Vehiculo de 4 ruedas</spam>
        </div>
        <div className={styles.checkbox}>
        <input name="" type="checkbox" required /> <spam>Otro</spam>
        </div>
        </div>
        <Button className={styles.btnRegistras} id="registrar" name="registrar">Registrar</Button>
      </section>
    </Layout>
  );
}


export async function getServerSideProps(context) {
  return {
    props: { currentPage: context.resolvedUrl },
  };
}
