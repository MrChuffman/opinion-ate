import {useEffect} from 'react';
export const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  return <div>RestaurantList</div>;
};
