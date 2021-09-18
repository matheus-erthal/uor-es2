import { memo } from 'react';
import { Modal } from 'react-bootstrap';

import './style.scss';

function DefaultModal({ visible, setVisible, title, content, title_icon }: any){
  const close_btn = (
    <div className="closeAlertModalContainer">
      <button className="closeModalBtn" onClick = {() => setVisible(false)}> 
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.617028" y1="14.6464" x2="14.617" y2="0.646447" stroke="#F01C04"/>
          <line x1="14.617" y1="15.3536" x2="0.617028" y2="1.35355" stroke="#F01C04"/>
        </svg>
      </button>
    </div>
  );

  return (
    <Modal onHide={()=> setVisible(false)} show={visible} centered id="defaultModal">
      {close_btn}
      <h1>{title_icon}{title}</h1>
      {content}
    </Modal>
  )
}

export default memo(DefaultModal);