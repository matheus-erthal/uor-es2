import { memo } from 'react';

import './style.scss'

function TransparentBtn({ label, onClick }: any){
  return (
    <button className="transparentBtn" onClick={onClick}>{label}</button>
  )
}

export default memo(TransparentBtn);