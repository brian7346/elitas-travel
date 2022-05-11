import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSortPlanes } from "../../hooks/useSortPlanes";
import { paths } from "../../paths";
import { getPlanes } from "../../store/planes/planesSlice";
import { Button } from "../button";
import { ContentWrapper } from "../content-wrapper";
import { PlaneItem } from "../plane-item";
import { Spinner } from "../spinner";
import styles from "./styles.module.css";

export const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(
    planes || []
  );

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className={styles.sort}>
        <ContentWrapper className={styles.planesHeader}>
          <Button
            className={styles.sortBtn}
            onClick={() => setIsDescSort(!isDescSort)}
          >
            Сортировать по цене {`${isDescSort ? "+" : "-"}`}
          </Button>
          <Link to={ paths.createPlane } className={styles.createPlaneBtn}>
            Добавить самолет
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.planesGrid}>
        {sortedPlanes &&
          sortedPlanes.map((plane) => <PlaneItem key={plane._id} {...plane} />)}
      </ContentWrapper>
    </div>
  );
};
