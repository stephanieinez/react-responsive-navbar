# react-responsive-navbar

Nothing crazy, nothing flashy, just a simple, flexible & completely customisable
responsive navigation bar component. Check out
[this demo](https://www.stephanieinez.github.io/react-responsive-navbar).

[![NPM](https://img.shields.io/npm/v/react-responsive-navbar.svg)](https://www.npmjs.com/package/react-responsive-navbar)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-responsive-navbar
```

## Usage

```jsx
import React, { Component } from 'react'

import ResponsiveMenu from 'react-responsive-navbar'

class Example extends Component {
  render () {
    return (
      <ResponsiveMenu
        menuOpenButton={<icon>}
        menuCloseButton={<icon>}
        changeMenuOn="<width>"
        largeMenuClassName="<className>"
        smallMenuClassName="<className>"
        menu={
          <Menu>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </Menu>
        }
      />
    );
  }
}
```

## Props

* **menuOpenButton** & **menuCloseButton**: icons for small screens. I use
  `react-icons` however you are free to use any icon or image that you please.
* **changeMenuOn**: specify the page width that you would like to switch between
  the small and large menu.
* **menu**: takes in any div to create your menu content. A <Menu> styled div is
  supplied (which you can change the CSS), however, you are free to create your
  own content.
* You can also specify individual stylings for each of the large or small menus
  by adding a `className` to **largeMenuClassName** or **smallMenuClassName**

## License

MIT © [Stephanie Tassone](https://github.com/stephanieinez)
