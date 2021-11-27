import styled from 'styled-components';

export const SidebarContent = styled.nav`
  width: 400px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    left: -100%;
    position: fixed;
    z-index: 9;
    height: 100vh;
    height: auto;
    background-color: #ccc;
    &.active {
      left: 0;
      overflow: hidden;
    }
  }
`;

export const SidebarItem = styled.div`
  padding: 15px 10px;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    border-bottom: 1px solid gray;
    margin: 0;
  }
`;
