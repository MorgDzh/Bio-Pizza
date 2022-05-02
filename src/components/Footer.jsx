import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <hr className="footer-line"
        style={{
          border: "none",
          background: "212529",
          color: "212529",
          height: "3px",
        }}
      />
      <Box>
        <h1
          style={{
            color: "#ff6800",
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "-50px",
          }}
        >
          Любой кто любит пиццу - прекрасный человек
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>Про нас</Heading>
              <FooterLink href="/">Главная</FooterLink>
              <FooterLink href="/cart">Корзина</FooterLink>
              <FooterLink href="/admin-panel/add">Добавление</FooterLink>
            </Column>
            <Column>
              <Heading>Сервис</Heading>
              <FooterLink href="/favorites">Избранное</FooterLink>
              <FooterLink href="/admin-panel">Админ панель</FooterLink>
              <FooterLink href="*">Ошибка</FooterLink>
            </Column>
            <Column>
              <Heading>Контакты</Heading>
              <FooterLink href="#">+996 555 222 111</FooterLink>
              <FooterLink href="#">+996 777 333 111</FooterLink>
              <FooterLink href="https://github.com/MorgDzh">Gitgub</FooterLink>
              <FooterLink href="https://www.whatsapp.com/?lang=ru">Whatsapp</FooterLink>
            </Column>
            <Column>
              <Heading>Соцсети</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
