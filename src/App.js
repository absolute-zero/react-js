import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Nav";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar state={this.props.store.getState().sideBar}/>
                    <main className='app-wrapper-Content'>
                        <Route path='/profile/:userId?'>
                            <ProfileContainer/>
                        </Route>
                        <Route path='/dialogs'>
                            <DialogsContainer/>
                        </Route>
                        <Route path='/friends'>
                            <UsersContainer/>
                        </Route>
                        <Route path='/login'>
                            <Login/>
                        </Route>
                        <Route path='/news'>
                            {/*<News />*/}
                        </Route>
                        <Route path='/music'>
                            {/*<Music />*/}
                        </Route>
                        <Route path='/setting'>
                            {/*<Setting />*/}
                        </Route>
                    </main>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
