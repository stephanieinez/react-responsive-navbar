import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const {
      menu,
      largeMenuClassName,
      smallMenuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton
    } = this.props;
    return (
      <div>
        <LargeMenu className={largeMenuClassName} size={changeMenuOn}>
          {menu}
        </LargeMenu>
        <SmallMenu className={smallMenuClassName} size={changeMenuOn}>
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick} icon={menuCloseButton} />
          )}
          {this.state.showMenu ? <div>{menu}</div> : null}
        </SmallMenu>
      </div>
    );
  }
}
ResponsiveMenu.propTypes = {
  menu: PropTypes.node.isRequired,
  largeMenuClassName: PropTypes.string,
  smallMenuClassName: PropTypes.string,
  changeMenuOn: PropTypes.string.isRequired,
  menuOpenButton: PropTypes.node.isRequired,
  menuCloseButton: PropTypes.node.isRequired
};

ResponsiveMenu.defaultProps = {
  largeMenuClassName: '',
  smallMenuClassName: ''
};
export default ResponsiveMenu;
