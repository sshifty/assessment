import { Link } from "react-router-dom";
import styles from "./Mock.module.css";
const MockComponent = () => {
  return (
    <div className={styles.mockComponent}>
      <h1>This component can be expanded</h1>
    </div>
  );
};

export default MockComponent;
