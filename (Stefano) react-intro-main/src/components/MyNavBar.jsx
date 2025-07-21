// il mio primo componente React fatto da me!

// i componenti React si possono creare come CLASSI o come FUNZIONI
// storicamente, i componenti a CLASSE erano più votati alla LOGICA
// mentre i componenti a FUNZIONE si prestavano meglio per mostrare dei contenuti

const MyNavBar = () => {
  return (
    <header>
      <ul className="gigio">
        <li>Home</li>
        <li>Contatti</li>
        <li>Mappa</li>
      </ul>
    </header>
  )
}

export default MyNavBar
