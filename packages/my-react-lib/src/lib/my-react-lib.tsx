import styles from './my-react-lib.module.css';

export function MyReactLib() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyReactLib!</h1>
    </div>
  );
}

export default MyReactLib;
