import styles from "./searchbox.module.css";

export default function SearchBox({ filter, updateFilter }) {


  return (
    <div className={styles.container}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={(e)=>{updateFilter(e.target.value)}} />
    </div>
  );
}
