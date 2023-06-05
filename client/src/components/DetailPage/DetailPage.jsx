import styles from "./DetailPage.module.css";
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
    <div className={styles.detailContent}>
      <div className={styles.picData}>
        <div className={styles.imageDetail}>
          <img className={styles.imgDetail} src={dogsRender.image} alt="Dog" />
        </div>
        <div className={styles.detailData}>
          <div className={styles.dataContent}>
            <p className={styles.title}>Nombre:</p>
            <p className={styles.dataString}>{dogsRender.name}</p>
          </div>
          <div className={styles.dataContent}>
            <p className={styles.title}>Altura:</p>
            <p className={styles.dataString}>{dogsRender.height} cm.</p>
          </div>
          <div className={styles.dataContent}>
            <p className={styles.title}>Peso:</p>
            <p className={styles.dataString}>{dogsRender.weight} kg.</p>
          </div>
          <div className={styles.dataContent}>
            <p className={styles.title}>Esperanza de vida:</p>
            <p className={styles.dataString}>{dogsRender.life_span}</p>
          </div>
          <div className={styles.dataContentTemp}>
            <p className={styles.title}>Temperamentos:</p>
            <div className={styles.temperamentsDiv}>
              {dogsRender.Temperaments?.map((temp) => {
                return (
                  <p className={styles.dataString} key={temp.name}>
                    {temp.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btnDetail} onClick={() => navigate(-1)}>
        VOLVER
      </button>
    </div>
  );
}

export default DetailPage;
