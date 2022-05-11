import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { ContentWrapper } from "../../components/content-wrapper";
import { Input } from "../../components/input";
import { paths } from "../../paths";
import { createPlane, resetPlaneErrors } from "../../store/plane/planeSlice";
import styles from "./styles.module.css";

export const CreatePlanePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.plane);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [planeImage, setPlaneImage] = useState(null);

  const handleCreatePlane = useCallback(() => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("capacity", capacity);
    formData.append("planeImage", planeImage);

    dispatch(createPlane(formData)).then((res) => {
      if (!res.error) {
        navigate(`${paths.plane}/${res.payload._id}`, { replace: true });
      }
    });
  }, [capacity, description, dispatch, name, navigate, planeImage, price]);

  useEffect(() => () => dispatch(resetPlaneErrors()),[dispatch])

  return (
    <ContentWrapper className={styles.createPlane}>
      <Button
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
      >
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолет</h1>
        <Input
          name="name"
          placeholder="Название самолёта"
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Цена самолёта"
          error={errors && errors.price && errors.price.message}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <Input
          name="description"
          placeholder="Описание"
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          name="capacity"
          placeholder="Вместимость"
          error={errors && errors.capacity && errors.capacity.message}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          name="planeImage"
          type="file"
          error={errors && errors.planeImage && errors.planeImage.message}
          onChange={(e) => setPlaneImage(e.target.files[0])}
        />
        <Button
          containerClassName={styles.buttonContainer}
          onClick={handleCreatePlane}
        >
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};
