import React from 'react';
import imagen404 from '../images/404.png'

interface Props {
  mensaje: string;
}

const NotFound: React.FC<Props> = ({ mensaje }) => {
  return (
    <div style={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
    <img src={imagen404} alt="" style={{ height: '50%'}} />
      <h1 style={{ fontSize: '8rem', marginBottom: '0', marginTop: '0' }}>404</h1>
      <p style={{ fontSize: '2rem', marginTop: '0', marginBottom: '0' }}>{mensaje}</p>
    </div>
  );
};

export default NotFound;