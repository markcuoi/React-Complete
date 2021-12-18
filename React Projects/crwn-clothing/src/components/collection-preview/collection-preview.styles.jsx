import styled from "styled-components";

export const CollectionPreviewContainer = styled.div``;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  margin-top: 50px;

  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 35px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
