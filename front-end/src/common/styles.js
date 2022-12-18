import styled from "styled-components";

export const SubTitle = styled.div`
  color: #cf2020;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const MainTitle = styled.h2`
  color: #413e4b;
  font-size: 32px;
  font-weight: ${props => props.fw ? props.fw : '700'};
  text-transform: none;
  line-height: 1.4em;
`;

export const FastNavItem = styled.span`
  padding: 0.4rem 0.5rem;
  
  @media (min-width: 992px) {
    padding: 0.5rem 1.8rem;
  }

  font-size: 14px;
  
  border-radius: 20px;
  
  filter: grayscale(0.2);
  transition: all 0.3s;

  &:hover {
    color: white;
    background-color: var(--theme-red);
  }
`;