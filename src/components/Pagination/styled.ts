import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;

export const PreviousLink = styled.div``;
export const NextLink = styled.div`
  margin-left: auto;
`;
