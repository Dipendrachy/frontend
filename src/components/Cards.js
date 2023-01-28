import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://static.toiimg.com/thumb/77333563/road-trip.jpg?width=1200&height=900'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              // label='Adventure'
              path='/showallflight'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
              text='Travel through the Islands of Bali in a Private Cruise'
              // label='Luxury'
              path='/showallflight'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSren-O2NS0qsBrBEIGI40q6QHcrlztEMxzWQ&usqp=CAU'
              text='Travel through the Islands of Bali in a Private Cruise'
              // label='Mystery'
              path='/showallflight'
            />
            <CardItem
              src='https://pix10.agoda.net/geo/city/5733/1_5733_02.jpg?s=1920x822'
              text='Experience Football on Top of the Himilayan Mountains'
              // label='Adventure'
              path='/showallflight'
            />
            <CardItem
              src='https://nypost.com/wp-content/uploads/sites/2/2020/04/gs-manhattan-skyline.jpg?quality=80&strip=all&w=618&h=410&crop=1'
              text='Ride through the Sahara Desert on a guided camel tour'
              // label='Adrenaline'
              path='/showallflight'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
