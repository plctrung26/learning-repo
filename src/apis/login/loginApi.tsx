import { jwtDecode } from "jwt-decode";
import useGlobalStore from "../../store/useGlobalStore";
import { checkExpiredToken } from "../../utils/checkExpiredToken";
import instance from "../apiConfig"
import { useNavigate } from "react-router-dom";

const logIn = async (data: any) => {
    try {
        const res = await instance.post("admins/auth/login", data)
        console.log(res)
        sessionStorage.setItem("access_token", res.data.tokens.accessToken);
        sessionStorage.setItem("refresh_token", res.data.tokens.refreshToken);
        useGlobalStore.getState().setIsAccessToken(true)
        return res
    } catch (error) {
        console.error("Failed to fetch data")
    }
}

const refreshAccessToken = async () => {
    try {
        const navigate = useNavigate()
        const refreshToken = sessionStorage.getItem("refresh_token")
        if (refreshToken) {
            const expiredTime = jwtDecode(refreshToken)?.exp || -1
            if (checkExpiredToken(expiredTime)) {
                sessionStorage.removeItem("refresh_token")
                navigate("/login")
            } else {
                const res = await instance.post("admins/auth/refresh-access-token", refreshToken)
                sessionStorage.setItem("access_token", res?.data.tokens.accessToken)
            }

        } else {
            console.error("There is no token founded")
        }
    } catch (err) {
        console.error(err)
    }
}

export { logIn, refreshAccessToken }