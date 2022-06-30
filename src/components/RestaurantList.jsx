import {useEffect} from 'react';
import {connect} from 'react-redux';
import {List, ListItem, ListItemText} from '@mui/material';

import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      {restaurants.map(restaurant => (
        <ListItem key={restaurant.id} className="">
          <ListItemText>{restaurant.name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
