import styled from 'styled-components';

export const SidebarContent = styled.nav`
  width: 400px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled.div`
  padding: 12px 10px;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
`;
