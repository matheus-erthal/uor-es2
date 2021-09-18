import { useContext, useEffect, useState } from "react";

import { StorageService } from "../../../services";

import LoaderContext from "../../../context/loader";

import DefaultBtn from '../../../components/buttons/default-btn';
import RoundBtn from "../../../components/buttons/round-btn";
import DefaultModal from "../../../components/modals/default-modal";

import logoImg from '../../../assets/images/logo.png';

export default function HomePage(props: any){
  const loaderContext = useContext(LoaderContext);

  const [rules_modal, setRulesModal] = useState(false);

  useEffect(() => {
    loaderContext?.setLoading(false);
  }, [loaderContext]);

  const modal_content = (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper nibh eros, sed luctus mi blandit eu. Phasellus sed dictum turpis, vitae dignissim tellus. Aliquam eu nulla facilisis, volutpat arcu nec, molestie augue. Cras maximus, quam finibus laoreet ullamcorper, leo nunc sagittis diam, non sollicitudin quam libero ut tortor. </p>
      <p>Maecenas hendrerit porttitor quam, sit amet facilisis ex suscipit eu. Morbi urna metus, ornare eget feugiat dictum, convallis sed leo. In sit amet purus turpis. Ut risus ligula, porttitor sit amet orci at, lacinia luctus magna. Pellentesque condimentum aliquet augue, sit amet tincidunt dolor condimentum non. Curabitur varius iaculis eros, eget feugiat tellus sagittis vel.</p>
    </div>
  )

  return (
    <section id="main-menu" className="d-flex">
      <DefaultModal 
        visible={rules_modal}
        setVisible={setRulesModal}
        title={"Regras"}
        content={modal_content}
        title_icon={<i className="fas fa-gavel align-self-center"></i>}
      />
      <div className="container-fluid">
        <div className="action-container">
          <RoundBtn 
            icon={<i className="fas fa-angle-double-left"></i>}
            label="Sair"
            onClick={() => StorageService.logout(props.history)}
          />
          <RoundBtn 
            icon={<i className="fas fa-gavel align-self-center"></i>}
            label="Regras"
            onClick={() => setRulesModal(true)}
          />
        </div>
        <div className="centered-container">
          <figure className="logo">
            <img src={logoImg} alt="Uór is fantastic"></img>
          </figure>
          <DefaultBtn 
            label="Iniciar Jogo"
            onClick={() => props.history.push({pathname: '/players'})}
          />
        </div>
      </div>
    </section>
  );
}