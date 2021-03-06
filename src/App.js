import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Checkout from '../src/components/checkout/checkout.component'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector'


class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){

    /*this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth)
      
      //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    }); */
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
         <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' 
            render={() => this.props.currentUser ? <Redirect to='/' /> : <SigninAndSignup /> }/>
          </Switch>
  
      </div>
    );
  }
  
}
const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
})

export default connect(mapStateToProps)(App);
