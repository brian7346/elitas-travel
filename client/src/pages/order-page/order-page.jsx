import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { ContentWrapper } from "../../components/content-wrapper";
import styles from "./styles.module.css";

export const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет доставлен в ближайшее время</h1>
      <Button containerClassName={ styles.button } onClick={() => navigate('/')}>На главную</Button>
    </ContentWrapper>
  );
};
