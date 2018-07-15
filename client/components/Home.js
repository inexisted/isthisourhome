import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'ss'
    };
  }

  componentDidMount() {
    // fetch('/api/counters')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       counters: json
    //     });
    //   });

    this.Counts();
  }

  Counts()
  {
    //fetch('/api/test')
    // .then(response => response.json())
    // .then(( results ) => this.setState({ message: results }),
    // (error) => {
    //   this.setState({
    //     message: 'erro2r'
    //   });
    // });


  // fetch('/api/test')
  // .then(function(response) {
  //   this.setState({ message: response.json()})

  // })

  fetch('/api/test') // Call the fetch function passing the url of the API as a parameter
  .then((response ) => response .json()) // Transform the data into json
  .then(( results ) => this.setState({ message: results.message }),
  (error) => { this.setState({ message: 'erro2r'})});
}

  render(){
    return(
    <div>
    <h2>'Home'</h2>
    <nav>
      <ul> <span>hello + {this.state.message} </span>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/notfound'>NotFound</Link></li>
        <li><Link to='/helloworld'>helloworld</Link></li>
      </ul>
    </nav>
    </div>
    )
  }

}


export default Home;
