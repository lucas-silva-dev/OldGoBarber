import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  height: 50px;
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 10px;

    strong {
      color: #333;
    }

    a {
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  a {
    height: 100%;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;
