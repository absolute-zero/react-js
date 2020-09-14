import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "aeffa8b0-484b-45e5-b130-291cfdecf438"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)// currentPage -     pageSize -
            .then(response => response.data)
    },

    followUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    unfollowUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)

    }
}

export const authAPI = {
    getLogin() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }

}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(response => response.data)
    }
}

