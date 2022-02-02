import ModalItem from '../app-modal-item/app-modal-item';

import './app-modal.css'

const ModalContainer = (props) => {
  // const {idMod, ...itemProps} = data;
  const {data, modalActive, onToggleModalActive} = props
  const clazz = modalActive? "modal-container visible" : "modal-container"
  const modalElements = data.map(item => {
    const {idmod, ...itemProps} = item;
    return(
      <ModalItem key={idmod} {...itemProps}/>
    )
  })

  return(
    <div className={clazz}>
      <div className="modal-overlay"
            onClick={onToggleModalActive}></div>
      {/* <ModalItem key={idMod} {...itemProps}/> */}
      {modalElements}
    </div>
  )
}

export default ModalContainer;