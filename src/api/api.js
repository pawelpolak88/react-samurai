import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a7ae1cfc-4e90-4cb7-b083-6d3c4b2d4bbd"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage = 1}&count=${pageSize = 10}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const headersAPI = {
    login() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/ ` + userId)
    }
}
