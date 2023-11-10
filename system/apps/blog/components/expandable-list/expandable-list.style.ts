import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 20px;
    color: rgb(237, 159, 159);
    font-size: 16px;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-flow: column;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      align-items: center;
      margin-bottom: 12px;

      div {
        flex-flow: column;
        margin-right: 16px;

        span {
          font-size: 16px;
          font-weight: bold;
          margin: 0;
          color: rgb(255, 255, 255);
        }

        p {
          margin-top: 2px;
          color: rgb(199, 199, 199);
          font-size: 14px;
          line-height: 24px;
          font-weight: normal;
          margin: 0;
          color: rgb(199, 199, 199);
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: transparent;
        border: 1px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        height: 40px;
        width: 40px;
        border-radius: 4px;
        span {
          display: flex;
          margin: auto;
          svg {
            color: #fff;
          }
        }
      }
    }
  }
`;

export const SubList = styled.ul`
  padding: 0px 0px 20px;
  margin: 0px;
  flex-flow: column;

  li {
    margin: 0px 0px 12px;
    border-radius: 4px;
    background: rgb(41, 41, 41);
    padding: 12px;
    cursor: pointer;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      p:first-child {
        font-size: 16px;
        line-height: 28px;
        font-weight: normal;
        margin: 0;
        color: rgb(255, 255, 255);
      }

      p:last-child {
        margin-left: 20px;
        flex-shrink: 0;
        font-size: 14px;
        line-height: 24px;
        font-weight: normal;
        margin: 0;
        color: rgb(255, 255, 255);
      }
    }
  }
`;
