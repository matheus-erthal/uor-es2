import { useState, memo } from 'react';

function PlayerSelect({ color }: any){
  const KINDS = ['player', 'cpu', 'disabled'];

  const [kind, setKind] = useState('player');
  
  const player = (
    <div className="item d-flex justify-content-center align-items-center">
      <i className="fas fa-user"></i>
      <div className="infos">
        <h3>JOGADOR</h3>
        <input type="text" name="nome" placeholder="Digite seu nome" />
      </div>
      <button onClick={() => setKind(KINDS[1])}> 
        <i className="fas fa-caret-right"></i> 
      </button>
    </div>
  ); 

  const cpu = (
    <div className="item d-flex justify-content-center align-items-center">
      <button onClick={() => setKind(KINDS[0])}> 
        <i className="fas fa-caret-left"></i> 
      </button>
      <i className="fas fa-robot"></i>
      <div className="infos">
        <h3>CPU</h3>
        <input type="text" name="nomeCPU" placeholder="Digite seu cpu" />
      </div>
      <button onClick={() => setKind(KINDS[2])}> 
        <i className="fas fa-caret-right"></i> 
      </button>
    </div>
  );

  const disabled = (
    <div className="item d-flex justify-content-center align-items-center">
      <button onClick={() => setKind(KINDS[1])}> 
        <i className="fas fa-caret-left">
      </i> </button>
      <i className="fas fa-ban"></i>
      <div className="infos">
        <h3>DESATIVADO</h3>
      </div>
    </div>
  );

  let container;

  switch(kind){
    case KINDS[1]:
      container = cpu;
      break;
    case KINDS[2]:
      container = disabled;
      break;
    default:
      container = player;
      break;
  }

  return (
    <div className="owl-carousel owl-theme player" id={color}>
      {container}
    </div>
  )
}

export default memo(PlayerSelect);