// creerò questo componente React nella forma di CLASSE
import { Component } from 'react'

class Welcome extends Component {
  // in un componente a classe ci deve SEMPRE essere un metodo
  // chimato "render"
  render() {
    return (
      <section>
        <h2>Benvenuto, {this.props.nomeDaUtilizzare}!</h2>
      </section>
    )
  }
}

export default Welcome

// PROPS in REACT
// al fine di RIUTILIZZARE meglio e di rendere più versatili i componenti REACT,
// è possibile fornire durante la loro invocazione dei DATI (caratteristiche)
// in modo che quella specifica invocazione del componente fornisca determinate
// informazioni per condizionarne il montaggio

// queste informazioni passate da PADRE -> FIGLIO durante il montaggio del componente
// vengono chiamate PROPS, e possono venire utilizzate SIA da componenti a funzione
// SIA da componenti a classe.
