import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import the map component with SSR disabled
const RentalsMap = dynamic(() => import('../components/RentalsMap'), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f8fafc',
      color: '#64748b',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      Loading map...
    </div>
  ),
});

export default function JsonRentalsPage() {
  return (
    <>
      <Head>
        <title>Brooklyn Luxury Rentals Map</title>
        <meta name="description" content="19 premium rental buildings across 5 Brooklyn neighborhoods" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </Head>
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
        <RentalsMap />
      </main>
    </>
  );
}
