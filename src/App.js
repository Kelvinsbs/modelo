
import './App.css';
import { useState, useRef } from 'react'; 
import TodoItem from './components/TodoItem';

function App() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const inputEl = useRef(null)

  const handleClick = () => {
    setData(prev => [...prev, value]);
    setValue('');
    inputEl.current.focus(); 
  }

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <input ref={inputEl} id="descricaoProjeto" type="text" placeholder="Descricao do projeto" value={value} onChange={event => setValue(event.target.value)} />
          <button onClick={handleClick}>Adicionar</button>
        </div>
        <div>
          <ul>
            {
              data.map((item, index) => (
                <TodoItem name={item} key={index}>
                </TodoItem>
              ))
            }
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default App;
