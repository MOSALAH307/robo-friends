import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './searchBox';
import Scroll from './Scroll';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');
    
    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }
   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => setRobots(users));
    },[])
    
    const filteredRobots = robots.filter((robots) => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    
    return (
        <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBox search={ onSearchChange }/>
            <Scroll>
                <CardList robots={ filteredRobots }/>
            </Scroll>
        </div>
    );
    }


export default App;