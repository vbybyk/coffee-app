import './coffee-list-item.css';

const CoffeeListItem = (props) => {
  const {img, brand, country, price, id, idmod, onClickGetModal, onToggleModalActive} = props;
  return(
    <div className="coffee-list-item-container" 
          id={id} 
          idmod={idmod}
          onClick={onClickGetModal}>
      <img src={img} alt="picture of coffee" className="coffee-list-item-img"
      onClick={onToggleModalActive}/>
      <span className="brand">{brand}</span>
      <span className="country">{country}</span>
      <span className="price">{`${price}$`}</span>
    </div>
  )
}

export default CoffeeListItem;