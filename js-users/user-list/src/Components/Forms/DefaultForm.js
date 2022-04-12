import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const Defaultform = (props) => {
  const { onSubmit, handleChange, errors, user } = props;
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="first_name">
            First Name{" "}
            <span className={styles.spanError}>
              <em>{errors.first_name}</em>
            </span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="first_name"
            maxLength={20}
            value={user.first_name || ""}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="last_name">
            Last Name{" "}
            <span className={styles.spanError}>
              <em>{errors.last_name}</em>
            </span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="last_name"
            maxLength={20}
            value={user.last_name || ""}
          />
        </div>
        <button className={`${styles.btn} ${styles.btnSubmit}`}>Submit</button>
      </form>
      <Link to="/" className={`${styles.btn} ${styles.btnBack}`}>
        <ArrowLeftIcon />
      </Link>
    </div>
  );
};

export default Defaultform;
