import { memo } from 'react';

import './style.scss'

function RoundtBtn({ icon, label, onClick }: any){
  return (
    <div className="roundBtnContainer">
      <button className="roundBtn" onClick={onClick}>{icon}</button>
      <p>{label}</p>
    </div>
    
  )
}

export default memo(RoundtBtn);