import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valestra | The Luxe Drop</title>
        <meta name="description" content="Luxury gifting bundles curated with elegance and exclusivity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="Valestra Crest" className={styles.logo} />

        <h1 className={styles.title}>
          This is not just a gift. It’s a statement.
        </h1>

        <p className={styles.description}>
          Unlock limited bundles. Earn LuxePoints. Invite others. The Luxe Vault opens — but not for everyone.
        </p>

        <a href="#" className={styles.cta}>
          Unlock the Drop
        </a>
      </main>
    </div>
  );
}
<img src="/logo.png" alt="Valestra Crest" width={100} height="auto" />
