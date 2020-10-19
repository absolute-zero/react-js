import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "886c1936-e61e-4e36-b11d-9b344d1c02a8"
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
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    },

    savePhoto(photo) {
        const formData = new FormData();
        formData.append(`image`,photo )
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
}

