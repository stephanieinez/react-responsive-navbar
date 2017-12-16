import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components';
import { FaBars, FaClose } from 'react-icons/lib/fa';

const Menu = styled.div`
  border-bottom: 2px solid MediumPurple;

  ul {
    padding: 0;
  }

  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: MediumPurple;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const ContentBox = styled.div`
  background-color: white;
  border: 2px solid MediumPurple;
  width: 60%;
  font-size: 15px;
  padding: 20px;
  margin: 20px;
  float: ${props => props.float};

  @media (max-width: 500px) {
    float: none;
    margin: 20px auto;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <ResponsiveMenu
          menuOpenButton={<FaBars size={30} color="MediumPurple" />}
          menuCloseButton={<FaClose size={30} color="MediumPurple" />}
          changeMenuOn="500px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <Menu>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
              </ul>
            </Menu>
          }
        />
        <ContentBox float="left">
          There is no set of problems addressed by all and only those thinkers
          labelled ‘existentialist’. However, most of them are interested in
          some of: What is it to exist? Does existence have a purpose? Is there
          an objective difference between right and wrong? Are we free? Are we
          responsible for our actions? What is the right sort of religious,
          political or sexual commitment? How should we face death?
        </ContentBox>
        <ContentBox float="right">
          I murmur: ‘It’s a seat,’ rather like an exorcism. But the word remains
          on my lips, it refuses to settle on the thing. It stays what it is,
          with its red plush, thousands of little red paws in the air, all
          stiff, little dead paws. This huge belly turns upwards, bleeding,
          puffed up – bloated with all its dead paws, this belly floating in
          this box, in this grey sky, is not a seat.
        </ContentBox>
        <ContentBox float="left">
          In Existentialism and Humanism Sartre clarifies and partly revises his
          view of existence and essence. He divides the things that exist into
          three kinds: human beings, artefacts, and naturally occurring objects.
          In the case of human beings existence precedes essence. In the case of
          artefacts essence precedes existence and in the case of naturally
          occurring objects existence and essence coincide.
        </ContentBox>
      </div>
    );
  }
}
