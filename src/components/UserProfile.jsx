function MainContent() {
    return (
      <main style={{ 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        minHeight: '400px',
        fontSize: '16px',
        lineHeight: '1.6'
      }}>
        <h2 style={{ color: '#333', marginBottom: '15px' }}>Welcome to My Application</h2>
        <p style={{ color: '#666', marginBottom: '10px' }}>
          This is the main content area where you can add your application content.
        </p>
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          I love to visit New York, Paris, and Tokyo.
        </p>
      </main>
    );
  }
  
  export default MainContent;