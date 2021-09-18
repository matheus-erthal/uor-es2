import { memo } from 'react';

import './style.scss'

function DefaultBtn({ label, onClick }: any){
  return (
    <button className="defaultBtn" onClick={onClick}>{label}</button>
  )
}

export default memo(DefaultBtn);