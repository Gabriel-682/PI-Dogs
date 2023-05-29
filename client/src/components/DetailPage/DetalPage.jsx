import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";

function DetailPage() {
  const { id } = useParams();
  const dogsRender = useSelector((state) => state.dogsRender);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>SOY DETAL PAGE</h1>
      <img src={dogsRender.image} alt="Dog" />
      <p>{dogsRender.id}</p>
      <p>{dogsRender.name}</p>
      <p>{dogsRender.height}</p>
      <p>{dogsRender.weight}</p>
      {dogsRender.Temperaments?.map((temp) => {
        return <p key={temp.name}>{temp.name}</p>;
      })}
      <p>{dogsRender.life_span}</p>
      <button onClick={() => navigate(-1)}>VOLVER</button>
    </div>
  );
}

export default DetailPage;
