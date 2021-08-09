
import { Card } from "react-bootstrap";
import { ButtonWithLoading } from "../ButtonWithLoading/ButtonWithLoading"
import { NavLink } from "react-router-dom";
const Item = ({ producto }) => {
  const { id, nombre, precio, stock, img/* , cantidad, descripcion */ } = producto

  return (

    <Card className="col-md-4">
      <NavLink to={`/Item/` + id}>
        <Card.Img variant="top" src={img} />
      </NavLink>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          $ {precio}
          <br />
          Stock x {stock}
        </Card.Text>
      </Card.Body>

    </Card>
  );
}


export default Item;