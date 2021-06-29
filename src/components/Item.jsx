import React from 'react';
import PropTypes from 'prop-types';
import './../assets/styles/components/Item.scss';

const Item = ({_id, titulo, genero, año}) => {
  return(
    <div className="card m-2 mr-3" style={{width: '16rem'}} id={_id}>
      <div className="card-body">
        <h5 className="card-title text-dark">{titulo}</h5>
        <p className="card-text text-dark">{genero}</p>
        <p className="card-text text-dark">{año}</p>
      </div>
    </div>
    /*
      <div className="container-item">
      <div className="container-item__details">
        <h2 className="container-item__details--title">Título descriptivo</h2>
        <h5 className="container-item__details--subtitle">Genero</h5>
        <h5 className="container-item__details--subtitle">2019</h5>
      </div>
    </div>
    */
  );

}

Item.propTypes = {
  _id: PropTypes.string,
  titulo: PropTypes.string,
  genero: PropTypes.string,
  año: PropTypes.number
}

export default Item;