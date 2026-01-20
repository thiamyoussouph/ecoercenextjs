import React from 'react'

export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>🚀 Build Réussi !</h1>
      <p>La base de données Postgres est connectée.</p>
      <hr />
      <a href="/admin" style={{ 
        display: 'inline-block', 
        marginTop: '20px', 
        padding: '10px 20px', 
        backgroundColor: '#000', 
        color: '#fff', 
        borderRadius: '5px',
        textDecoration: 'none' 
      }}>
        Aller sur le Panneau d'Administration
      </a>
    </div>
  )
}