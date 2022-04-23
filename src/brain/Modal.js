import React from 'react';
import './modal.css';

const Modal = ({show, onClose, content}) =>{

	if(!show)
		return null;
	
	return(

	       <div className="modal-1">
	         <div className="modal-content-1">
	           <div className="modal-header-1">
	             <h4 className="modal-title-1">Note</h4>
	           </div>
	           <div className="modal-body-1">
	              {content}
	           </div>
	           <div className="modal-footer-1">
	             <button className="button" onClick={onClose} >Close</button>
	           </div>
	           </div>
	           </div>


	)
}

export default Modal;