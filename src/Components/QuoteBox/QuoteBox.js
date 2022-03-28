// Importo los componentes de la tarjeta
import Author from "../Author/Author"
import Button from "../Button/Button"
import Quote from "../Quote/Quote"
// Importo el css
import './QuoteBox.css'
// Importo la librería para el useState
import { useState } from "react"
// Import del JSON con la información
import Quotes from '../../Quotes.json'

// función para generar citas aleatoriamente
const getRandom = () => Math.floor(Math.random() * Quotes.quotes.length)

// arreglo de colores
const colors = [
  "#9C5BC8",
  "#C077D2",
  "#341746",
  "#6476CB",
  "#1C3D55",
  "#3EB9B1"
];

// Componente QuoteBox
const QuoteBox = () => {

  // ---- L Ó G I C A -----

  // declaranción del useState
  const [quote, setQuote] = useState(Quotes.quotes[getRandom()])

  // Función para cambiar el valor
  const changeQuote = () => {
    const random = getRandom()
    setQuote(Quotes.quotes[random])
  }

  // Asigna un color de fondo aleatorio al body
  const color = colors[Math.floor(Math.random() * colors.length)]
  document.body.style = `background: ${color}`

  // ---- R E N D E R I Z A D O -----

  return (
    <div className="card" style={{ color: color }}>
      <Quote quote={quote.quote}/>
      <Author author={quote.author}/>
      <Button color={color} name="fa-solid fa-shuffle" func={changeQuote}/>
    </div>
  )
}

export default QuoteBox