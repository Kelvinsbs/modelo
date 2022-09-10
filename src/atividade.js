
import './App.css';
import { useState, useRef } from 'react'; 
import TodoItem from './components/TodoItem';

function Atividade() {
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
          <input ref={inputEl} id="descricaoAtividade" type="text" placeholder="Descricao da atividade" value={value} onChange={event => setValue(event.target.value)} />
          <input ref={inputEl} id="dataCadastro" type="date" value={value} onChange={event => setValue(event.target.value)} />
          
          <select>
            <option value="1">teste1</option>
            <option value="2">teste2</option>
            <option value="3">teste3</option>
            <option value="4">teste4</option>
          </select>

          <button onClick={handleClick}>Adicionar</button>
        </div>
        <div>
        </div>
        
      </div>
    </div>
  );
}

export default Atividade;
