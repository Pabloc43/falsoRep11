import '../App.css';

function modal(props) {
  return (
    <div className="col-3">
        <div className="">
            <img src={props.imagen} alt="" />
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>
            <button className="" on>Eliminar</button>
        </div>    
    </div>
  );
}

export default modal;