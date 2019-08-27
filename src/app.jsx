import React, { Component } from 'react';
import styles from './styles/main.scss';

import Navbar from './components/navbar'
import Routes from './routes'
import Menu from './components/menu'

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuItems: [{
        title: 'Custom Gift Box',
        quantity: 'Assorted Flavors',
        description: `This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes! \n
        We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!`,
        image: require('./images/custom_gift_box.png')
      },
      {
        title: 'Vanilla Earl Grey Macaron',
        quantity: '1 Piece',
        description: `Our most popular flavor! Each macaron is filled with earl grey ganache.`,
        image: require('./images/vanilla.png')
      },
      {
        title: 'Rose Macarons',
        quantity: '1 Piece',
        description: `Our most romatic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise.`,
        image: require('./images/rose.png')
      }]
    }
  }
  render() {
    // let image = this.state.images[0];
    // console.log(image)
    return (
      <div>
        <Navbar />
        <Routes />
        <Menu {...this.state} />
        {/* <div className={styles["resizeable-both"]}>{this.state.hello}</div> */}

      </div>
    );
  }
}

export default App;
