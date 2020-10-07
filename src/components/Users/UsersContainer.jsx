import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, requestUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
        document.addEventListener('scroll', this.onScrollUser);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScrollUser);
    }

    onScrollUser = () => {
        if (!this.props.isFetching){
            const windowHeight = window.innerHeight
            const documentHeight = document.body.clientHeight
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            if (windowHeight + scrollTop + 100 >= documentHeight && getIsFetching) {
                this.onPageChanged(this.props.currentPage, this.props.pageSize);
            }
        }
    }

    onPageChanged = (pageNumber, pageSize) => {
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <Users
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        requestUsers, toggleFollowingProgress
    })(UsersContainer);
