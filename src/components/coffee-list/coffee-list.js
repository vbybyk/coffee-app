import CoffeeListItem from '../coffee-list-item/coffee-list-item';

import './coffee-list.css'

const CoffeeList = ({data, onClickGetModal, onToggleModalActive}) => {
  const elements = data.map(item => {
    const {id, idmod, modalActive, ...itemProps} = item;
    return(
      <CoffeeListItem key={id} idmod={idmod} modalActive={modalActive} {...itemProps}
                      onClickGetModal={() => onClickGetModal(idmod)}
                      onToggleModalActive={() => onToggleModalActive(modalActive)}/>
    )
  })
  return(
    <div className='coffee-list-container'>
      {elements}
    </div>
  )
}

export default CoffeeList;