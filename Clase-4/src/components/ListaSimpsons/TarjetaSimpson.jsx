import React from 'react'

export const TarjetaSimpson = ({id, nombre, edad, genero, birthdate, status, imagenUrl}) => {
  return (
    <div style={{ backgroundColor: '#FFD90F', border: '3px solid black', borderRadius: '15px', padding: '20px', width: '300px', fontFamily: 'sans-serif', boxShadow: '6px 6px 0px black', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <img src={imagenUrl} alt={`Imagen de ${nombre}`} style={{ width: '150px', height: '150px', borderRadius: '50%', border: '4px solid black', marginBottom: '15px', objectFit: 'cover' }} />

      <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#555', alignSelf: 'flex-start' }}>ID: {id}</p>
      <h1 style={{ margin: '10px 0', fontSize: '24px', color: 'black', textTransform: 'uppercase', borderBottom: '2px solid black', width: '100%', textAlign: 'center' }}>{nombre}</h1>
      <h3 style={{ fontSize: '16px', marginBottom: '8px', alignSelf: 'flex-start' }}>Descripción:</h3>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.4)', padding: '10px', borderRadius: '10px', border: '1px solid black', width: '100%' }}>
        <p style={{ margin: '4px 0', fontSize: '14px' }}><strong>Edad:</strong> {edad}</p>
        <p style={{ margin: '4px 0', fontSize: '14px' }}><strong>Género:</strong> {genero}</p>
        <p style={{ margin: '4px 0', fontSize: '14px' }}><strong>Cumpleaños:</strong> {birthdate}</p>
        <p style={{ margin: '4px 0', fontSize: '14px' }}><strong>Estado:</strong> {status}</p>
      </div>
    </div>
  )
}