import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./basic-modal.scss"
const BasicModal = ({act,onClose}) => {
  return (
    <div className={`myModal ${act?"modal-active":""}`}>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="close-modal" onClick={()=>onClose()} >
            <CloseIcon/>
        </div>
    </div>
  )
}

export default BasicModal