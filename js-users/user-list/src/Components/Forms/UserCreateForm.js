import { useState } from "react";
import styles from "./Form.module.css";

const UserCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };
  const onSubmit = async (e) => {
    const { first_name, last_name } = user;
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "active",
        first_name,
        last_name,
      }),
    };
    try {
      const data = await fetch(
        "https://assessment-users-backend.herokuapp.com/users/",
        requestOptions
      );
      const res = await data.json();
      if (!data.ok) {
        let errorTemp = {};
        for (let key of Object.keys(res)) {
          errorTemp = {
            ...errorTemp,
            [key]: res[key][0],
          };
        }
        setErrors(errorTemp);
      } else {
        setErrors({});
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(errors);
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
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserCreateForm;
