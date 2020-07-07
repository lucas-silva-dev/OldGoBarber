import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff892e;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(254, 254, 254, 0.5);
  border-radius: 10px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -16px;
    width: 0;
    height: 0;

    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 16px solid rgba(254, 254, 254, 0.5);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: ${darken(0.2, '#7159c1')};

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #555;
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    color: ${lighten(0.1, '#7159c1')};
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.06, '#7159c1')};
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        margin-left: 5px;
        width: 8px;
        height: 8px;
        background: ${darken(0.1, '#ff892e')};
        opacity: 0.8;
        border-radius: 50%;
      }
    `}
`;
