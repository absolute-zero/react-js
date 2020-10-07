import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Nav";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

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
                        <Suspense fallback={<div>Loading</div>}>
                            <ProfileContainer/>
                        </Suspense>
                    </Route>
                    <Route path='/dialogs'>
                        <Suspense fallback={<div>Loading</div>}>
                            <DialogsContainer/>
                        </Suspense>
                    </Route>
                    <Route path='/friends'>
                        <Suspense fallback={<div>Loading</div>}>
                            <UsersContainer/>
                        </Suspense>
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
                    <Route path='/login'>
                        <Login/>
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
