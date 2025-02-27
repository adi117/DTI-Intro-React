import { FC } from "react";
import styled from "styled-components";
import "../../global.css";

const Header: FC = () => {
  const Header = styled.nav`
    display: flex;
    padding: 26px 80px 0 80px;
    width: 100vw;
  `;

  const GridHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const MenuList = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 40px;

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: rgba(11, 12, 14, 1);
      font-family: "PP Neue Montreal", sans-serif;
      font-size: 18px;
      font-weight: 400;
    }
  `;

  const NameHeader = styled.h1`
    font-family: "PP Neue Montreal", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: rgba(11, 12, 14, 1);
  `;

  return (
    <Header>
      <GridHeader>
        <NameHeader>@Ayush Barnwal</NameHeader>
        <MenuList>
          <li><a href="">About</a></li>
          <li><a href="">Work</a></li>
          <li><a href="">Contact</a></li>
        </MenuList>
      </GridHeader>
    </Header>
  );
};

export default Header;
