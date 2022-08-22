import styled from 'styled-components'


export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 15px;
  width: 90%;
  height: 20%;
  font-family: 'Luckiest Guy', cursive;
  font-size: 2em;
  letter-spacing: 1px;
  color: #FAC269;
  text-shadow: -1px -1px 0 #5f3a00;
  transition: 300ms;
  border-radius: 10px;

  background: linear-gradient(327.68deg, #588DD8 -2.66%, #324FA5 80.63%),
  linear-gradient(180deg, #FFCD7E 0%, #E18A00 100%);

  border: 3px solid #ffcd7e;

@media (max-width: 950px) {
    font-size: 1.5em;
}

@media (max-width: 575px) {
    font-size: 0.8em;
}

@media (max-width: 330px) {
    font-size: 0.5em;
}
`;