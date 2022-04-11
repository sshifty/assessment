import styles from "./Form.module.css";

const Defaultform = (props) => {
  const { onSubmit, handleChange, errors, user } = props;
  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="first_name">
            First Name: <span>{errors.first_name}</span>
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
            Last Name: <span>{errors.last_name}</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="last_name"
            maxLength={20}
            value={user.last_name || ""}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Defaultform;
