import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View } from 'react-native';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
      };
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
}

  render() {
 
    return (
        <Menu dishes={this.state.dishes} />
    );
  }
}
  
export default Main;