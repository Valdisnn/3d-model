import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./assets/logo.svg";
import Laptop from "./assets/icon-laptop.svg";
import Twitter from "./assets/icon-twitter.svg";
import Youtube from "./assets/icon-youtube.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/ygc8w8EG-CwFdlqs/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Скачать</a>
          </li>
          <li>
            <a href="#">Приложение</a>
          </li>
          <li>
            <a href="#">Войти</a>
          </li>
          <li>
            <button>Быстрый старт</button>
          </li>
        </Menu>
        <h1>Начните с друзьями</h1>
        <p>
          Соберите свою команду и создайте свое сообщество с помощью нашего
          кросс-платформенного приложения, которое позволяет вам общаться через
          чат, голос, а также обмениваться и хранить неограниченное количество
          медиафайлов. <br />
          <br />
          Мир ждет вас. Присоединяйтесь к закрытому бета-тестированию.
        </p>
        <button>
          <img src={Laptop} alt="icon-laptop" /> Скачать для Mac
        </button>
      </Content>
      <Social>
        <div />
        <img src={Twitter} alt="Twitter" />
        <img src={Youtube} alt="Youtube" />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-style: 16px;
  color: white;
  // position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: relative;
    margin: 0;
    top: 0;
    right: 0;
    // left: 20vh;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }

    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }

    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }

    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  pointer-events: none;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 60px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px
      max-width: 400px;
    }

    @media (max-width: 800px) {
      font-size: 40px
      max-width: 300px;
    }

    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgb(0 0 0 / 20%);
    -webkit-transition: 1s;
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 12px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    :hover {
      border: 1 px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      hover: {
        border: 1 px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
