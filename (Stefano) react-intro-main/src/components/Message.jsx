import { Component } from 'react'

// in un componente a FUNZIONE le props arrivano come PARAMETRO della funzione
// "props" sarà SEMPRE un OGGETTO!

const Message = (props) => {
  console.log('PROPS', props)
  const messageStyle = {
    backgroundColor: props.color,
  }

  return (
    <div className="message" style={messageStyle}>
      <p>{props.content}</p>
    </div>
  )
}

// in un componente a CLASSE le props arrivano dal THIS dell'istanza della classe
// "this.props" sarà SEMPRE un OGGETTO!

// class Message extends Component {
//   messageStyle = {
//     backgroundColor: this.props.color,
//   }

//   render() {
//     return (
//       <div className="message" style={this.messageStyle}>
//         <p>{this.props.content}</p>
//       </div>
//     )
//   }
// }

// come valore di un attributo/prop, segui questa regola: se è una stringa,
// usa gli APICI (singoli o doppi), se è qualsiasi altra cosa, usa { }
export default Message
