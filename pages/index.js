import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Navbar from '../comps/navbar';
import Footer from '../comps/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>

        <p className={styles.text}>
          lorem loremPort 3000 is in use, trying 3001 instead. ready - started
          server on 0.0.0.0:3001, url: http://localhost:3001 event - compiled
          client and server successfully in 1143 ms (125 modules) wait -
          compiling / (client and server)... event - compiled client and server
          successfully in 198 ms (1
        </p>
        <p className={styles.text}>
          lorem lorem loremPort 3000 is in use, trying 3001 instead. ready -
          started server on 0.0.0.0:3001, url: http://localhost:3001 event -
          compiled client and server successfully in 1143 ms (125 modules) wait
          - compiling / (client and server)... event - compiled clien3
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>see all ninjas</a>
        </Link>
      </div>
    </>
  );
}
