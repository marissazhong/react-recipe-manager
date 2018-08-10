import React from 'react';

import NavBar from '../components/NavBar';

class UserRecipesPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <h1>User recipes index page (with new recipe form)</h1>
            </div>
        );
    }
  }
  
  export default UserRecipesPage;