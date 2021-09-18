import { useContext, useEffect } from "react";

import LoaderContext from "../../../context/loader";

import RoundBtn from "../../../components/buttons/round-btn";
import PlayerSelect from "../../../components/player-select";
import DefaultBtn from "../../../components/buttons/default-btn";

export default function PlayersPage(props: any){
  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  return (
    <section id="select-players" className="d-flex">
      <div className="container-fluid">
        <div className="row players-row">
          <div className="col-md-1">
            <RoundBtn 
              icon={<i className="fas fa-angle-double-left"></i>}
              label="Voltar"
              onClick={() => props.history.push({pathname: '/'})}
            />
          </div>
          <div className="col-md-10 align-self-center">
            <h1>SELECIONE OS JOGADORES PARA COMEÇAR A PARTIDA</h1>

            <div className="row">
              <div className="col-md-6">
                <PlayerSelect color={"blue"} />
              </div>
              <div className="col-md-6">
                <PlayerSelect color={"red"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <PlayerSelect color={"black"} />
              </div>
              <div className="col-md-6">
                <PlayerSelect color={"yellow"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <PlayerSelect color={"purple"} />
              </div>
              <div className="col-md-6">
                <PlayerSelect color={"green"} />
              </div>
            </div>
            <DefaultBtn 
              label="Começar"
              onClick={() => props.history.push({pathname: '/in-game'})}
            />
          </div>
        </div>
      </div>
    </section>
  );
}