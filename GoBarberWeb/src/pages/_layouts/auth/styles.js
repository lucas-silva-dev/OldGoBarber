import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  background: ${darken(0.2, '#7159c1')};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 315px;
  height: 100%;
  max-height: 380px;

  img {
    flex: 1;
    width: 90px;
    height: 68px;
  }

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    input {
      /* background: rgba(113, 89, 193, 0.8); */
      background: rgba(254, 254, 254, 0.5);
      /* color: #fff; */
      color: ${darken(0.2, '#7159c1')};
      border: 1px solid ${darken(0.15, '#7159c1')};
      border-radius: 10px;
      padding: 8px 15px;
      margin-bottom: 10px;

      &::placeholder {
        /* color: rgba(255, 255, 255, 0.7); */
        color: ${darken(0.15, '#7159c1')};
      }
    }
    span {
      color: #f64c75;
      align-self: flex-start;
      font-size: 13px;
      margin: -5px 0 10px;
    }

    button {
      margin-top: 5px;
      padding: 8px 15px;
      width: 100%;
      background: #7159c1;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.15, '#7159c1')};
      }
    }

    a {
      margin: 15px 0;
      color: #7159c1;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;
