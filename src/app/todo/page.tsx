import React from 'react';
import styles from "../../components/page.module.css"

interface HomeProps {
  title: string;
}

const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      </header>
    </main>
  );
}

export default Home;