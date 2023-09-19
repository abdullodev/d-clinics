import styled from "styled-components";

export const NotFoundStyled = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
  -moz-box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);
  box-shadow: 0px 0px 7px 0px rgba(170, 198, 212, 1);

  h2 {
    font-size: 24px;
    color: rgba(81, 99, 119, 1);
    font-weight: 600;
  }
  .youtube_contents {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 25px;
  }
`;
