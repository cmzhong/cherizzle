import React from 'react';
import CityDisplay from './CityDisplay';
import CityContainer from '../containers/CityContainer'

const CitiesDisplay = (props) => {
  let cities = [];

  for (let i = 0; i < props.citiesList.length; i++){
      cities.push(<CityDisplay key={i} cityClicked={ props.cityClicked } 
      cityId={ props.citiesList[i].cityId } cityName={ props.citiesList[i].name }/>)
  }
  const showAllCities = props.showAllCities;

  return (
    <div className="displayBox">
    <h3>Cities</h3>
    { showAllCities ?
     cities
     : <CityContainer cityClicked={ props.cityClicked } clickedCityId={ props.clickedCityId } 
     clickedCityName = { props.clickedCityName } deleteCity={ props.deleteCity } /> 
    }
    
    </div>
    )
}

export default CitiesDisplay;