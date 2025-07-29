interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      fontFamily: 'system-ui' 
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '20px',
        color: '#333'
      }}>
        🎉 Connie's Nail Salon
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '10px',
        color: '#666'
      }}>
        Welcome to our premium nail salon!
      </p>
      
      <p style={{ 
        fontSize: '1rem', 
        color: '#888'
      }}>
        Language: {locale} | Railway 배포 성공! ✅
      </p>
      
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        display: 'inline-block'
      }}>
        <p>🌐 Domain: connienail-production.up.railway.app</p>
        <p>📅 Deployed: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
