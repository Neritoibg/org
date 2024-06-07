import "./Colaborador.css"
import { IoIosCloseCircle, IoMdHeartEmpty  } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="colaborador">
        <IoIosCloseCircle className="eliminar"onClick={()=>eliminarColaborador(id)}/>
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ?<IoHeart color="red" onClick={() => like(id)}/> : <IoMdHeartEmpty onClick={() => like(id)} /> }
            
        </div>
    </div>
}

export default Colaborador