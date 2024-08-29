import Contact from "../contact/Contact";
import styles from "./contactlist.module.css";

export default function ContactList({ contacts,deleteContact }) {

  

  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} data={contact} deleteContact={deleteContact}/>
      ))}
    </div>
  );
}
