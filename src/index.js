import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SmallMenu = styled.div`
  display: none;
  text-align: center;
  @media (max-width: ${props => props.size}) {
    display: block;
  }
`;
const LargeMenu = styled.div`
  display: block;
  text-align: center;
  @media (max-width: ${props => props.size}) {
    display: none;
  }
`;

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);

const Menu = ({
  menu,
  largeMenuClassName,
  smallMenuClassName,
  changeMenuOn,
  menuOpenButton,
  menuCloseButton
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);

  return (
    <div>
      <LargeMenu className={largeMenuClassName} size={changeMenuOn}>
        {menu}
      </LargeMenu>
      <SmallMenu className={smallMenuClassName} size={changeMenuOn}>
        {!showMenu ? (
          <MenuIcon onClick={handleClick} icon={menuOpenButton} />
        ) : (
          <MenuIcon onClick={handleClick} icon={menuCloseButton} />
        )}
        {showMenu ? <div>{menu}</div> : null}
      </SmallMenu>
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.node.isRequired,
  largeMenuClassName: PropTypes.string,
  smallMenuClassName: PropTypes.string,
  changeMenuOn: PropTypes.string.isRequired,
  menuOpenButton: PropTypes.node.isRequired,
  menuCloseButton: PropTypes.node.isRequired
};

Menu.defaultProps = {
  largeMenuClassName: "",
  smallMenuClassName: ""
};

export default Menu;
