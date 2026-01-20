import React from 'react'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export default function Page() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Installation en cours...</h1>
      <p>Le build a réussi ! Connecte-toi à l'admin pour configurer ton site.</p>
      <a href="/admin" style={{ color: 'blue', textDecoration: 'underline' }}>
        Accéder au Panneau d'Administration
      </a>
    </div>
  )
}