import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
`;

export const Header = styled.div`
  height: 60px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.0333333px;
  color: #18191f;
`;

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px 20px;
  margin: -20px;
  background: #efefef;
`;

export const MailWrap = styled.div`
  height: 210px;
  padding: 18px;
  margin-top: 14px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(184, 187, 192, 0.24);
  position: relative;
`;

export const MailTitle = styled.div`
  margin-top: 7px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 1px;
  color: #222b45;
`;

export const MailDesc = styled.div`
  margin-top: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.75px;
  color: #adadad;
`;

export const AudioWrap = styled.div`
  width: 100%;
`;

export const UserWrap = styled.div`
  width: calc(100% - 38px);
  height: 48px;
  padding-top: 15px;
  border-top: 1px solid #dfdfdf;
  position: absolute;
  bottom: 0;
`;

export const From = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.75px;
  color: #3ec192;
  float: left;
`;

export const To = styled(From)`
  float: right;
`;

export const PlusBtn = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background: #3ec192;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.0784314);
  position: fixed;
  bottom: 79px;
  right: 20px;
`;
