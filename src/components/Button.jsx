export function Button() {
  const buttonContainerStyle = {
    marginTop: '15px', 
    marginBottom: '15px', 
  };

  return (
    <div className="relative inline-block" style={buttonContainerStyle}>
      <button className="w-220 h-36 px-0 flex-shrink-0 border-radius-8 bg-white-100 text-white flex items-start justify-start button-custom">
        <span style={{ color: '#53F', padding: '4px 8px', display: 'flex', alignItems: 'flex-start', gap: '1px' }}>LOUD</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
          <path d="M10 12l-6-6h12z" />
        </svg>
      </button>
    </div>
  );
}
