import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import styles from "./Mock.module.css";
const MockComponent = () => {
  return (
    <div className={styles.mockComponentContainer}>
      <div className={styles.message}>
        <h1>There is nothing here</h1>
        <SentimentVeryDissatisfiedIcon />
      </div>
    </div>
  );
};

export default MockComponent;
