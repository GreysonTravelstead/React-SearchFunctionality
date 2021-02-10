import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundry';



class App extends React.Component {

    //App component has two states. Robots and search field. We use the constructor function to capture this state.
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json();})
            .then(users => this.setState({robots: users}));
        
    }

    //On the search change we will set the new state to the triggered event and the set that as the state.
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    //Render the new state/show the search results
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //allows us to notify the user that the render is loading if it takes time
        //below is the same as an if else structure 
        return (!robots.length) ?
        <h1>loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Search Functionality</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

        
            
    


export default App;