import './app-modal-item.css'

const ModalItem = (props) => {
  const {img, brand, country, price, idmod, onToggleModalActive} = props;
  return(
    <div className='modal-item-wrapper' id={idmod}>
      <img src={img} alt='a picture of coffee' className='modal-item-img'/>
      <div className="modal-item-text-group">
        <h2 className="modal-item-title">About it</h2>
        <span>Country:{country}</span>
        <span>{brand}</span>
        <span>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <span>Price:{price}$</span>
      </div>
      <button className="close-button">X</button>
    </div>
  )
}

export default ModalItem;