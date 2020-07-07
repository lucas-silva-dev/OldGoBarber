import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* background: #fff; */
  /* border-radius: 10px; */
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 40px auto;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  opacity: ${(props) => (props.past ? 0.6 : 1)};

  strong {
    color: ${(props) => (props.available ? '#46C24C' : '#7159c1')};
    opacity: ${(props) => (props.available ? 0.7 : 1)};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    margin-top: 3px;
    color: ${(props) => (props.available ? '#46C24C' : '#7159c1')};
    opacity: ${(props) => (props.available ? 0.7 : 1)};
  }
`;
