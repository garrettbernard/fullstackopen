import ReactDOM from 'react-dom'
import App from './App.js'

const staticNames = [
  {
    content: 'Arto Hellas',
    number: '040-1234567',
    id: 1
  },
  {
    content: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  }
]

ReactDOM.render(
  <App staticNames={staticNames} />,
  document.getElementById('root')
)
