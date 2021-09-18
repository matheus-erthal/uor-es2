import { useContext, useEffect } from "react";

import './style.scss';

import LoaderContext from "../../../context/loader";

import RoundBtn from "../../../components/buttons/round-btn";
import GameMap from "../../../components/game-map";
import PlayerInfo from "../../../components/player-info";

export default function InGamePage(props: any){
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  return (
    <section className="default-section ingame-section">
      <div className="container-fluid">
        <div className="action-container">
          <RoundBtn 
            icon={<i className="fas fa-angle-double-left"></i>}
            label="Voltar"
            onClick={() => props.history.push({pathname: '/'})}
          />
        </div>
        <GameMap 

        />		
        <PlayerInfo
          playerColor="#13BBD2"
          teamTotal={7}
          playerName="Jogador Azul"
          currentRoundName="Fortificar Territórios"
        />
        <div className="player-action-container left">
          <RoundBtn 
            icon={<i className="fas fa-angle-double-left"></i>}
            label="Objetivo"
            onClick={() => props.history.push({pathname: '/'})}
          />
        </div>
        <div className="player-action-container right">
          <RoundBtn 
            icon={<i className="fas fa-angle-double-right"></i>}
            label="Próximo Turno"
            onClick={() => props.history.push({pathname: '/'})}
          />
        </div>
      </div>
    </section>
  );
}