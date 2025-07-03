import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Valestra | The Luxe Drop</title>
        <meta name="description" content="Unlock exclusive luxury bundles with LuxePoints." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <img
          src="/logo.png"
          alt="Valestra Crest"
          style={{
            width: '120px',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 0 4px white)',
          }}
        />
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          This is not just a gift. It’s a statement.
        </h1>
        <p style={{ maxWidth: '500px', fontSize: '1rem', marginBottom: '2rem', opacity: 0.85 }}>
          Unlock limited bundles. Earn LuxePoints. Invite others. <br />
          The Luxe Vault opens — but not for everyone.
        </p>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            padding: '12px 28px',
            borderRadius: '50px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.color = '#000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#fff';
          }}
        >
          Unlock the Drop
        </button>
      </main>
    </>
  );
}
