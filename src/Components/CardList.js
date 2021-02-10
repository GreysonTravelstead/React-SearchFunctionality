import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {

    
    //We use brackets to indicate we are using javascript. This allows us to combine javascript and html together
    //using map below we are able to loop through each item in robots array. Remember when using a loop with react we should give each iteration a key
    return(
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    );
                })
            }   
        </div>
    );
}

export default CardList;