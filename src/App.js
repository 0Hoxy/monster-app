import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
    console.log('1');
  }
  componentDidMount() {
    console.log('3');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }, () => {
        console.log(this.state);
      }));
  }
  render() {
    console.log('2');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={e => {
          const searchString = e.target.value.toLowerCase();
          const filterMonsters = this.state.monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchString);
          });

          this.setState({ monsters: filterMonsters });
          {
            this.state.monsters.map((monster) => {
              return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
              );
            });
          }
      </div>
    );

  }
}

export default App;
