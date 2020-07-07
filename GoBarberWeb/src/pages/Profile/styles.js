import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background: #fff; */
  /* border-radius: 10px; */
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 480px;
  margin: 40px auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      width: 90%;
      background: rgba(254, 254, 254, 0.5);
      color: ${darken(0.2, '#7159c1')};
      /* border: 1px solid ${darken(0.15, '#7159c1')}; */
      border: 0;
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

    hr {
      width: 89%;
      border: 0;
      height: 1px;
      background: ${lighten(0.2, '#7159c1')};
      margin: 10px 0 20px;
    }

    button {
      margin-top: 5px;
      padding: 10px 15px;
      width: 90%;
      background: #3b9eff;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.09, '#3b9eff')};
      }
    }
  }

  > button {
    margin-top: 10px;
    padding: 10px 15px;
    width: 90%;
    background: #f64c75;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.09, '#f64c75')};
    }
  }
`;
