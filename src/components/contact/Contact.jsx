import styles from "./contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export default function Contact({ data, deleteContact }) {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div>
          <IoMdPerson className={styles.icon} /> {data?.name}
        </div>
        <div>
          <MdLocalPhone className={styles.icon} /> {data?.number}
        </div>
      </div>
      <div className={styles.right}>
        <button
          className={styles.button}
          onClick={() => {
            deleteContact(data?.id);
          }}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}
