import useGlobalStore from "../../store/useGlobalStore";
import instance from "../apiConfig"

const logIn = async (data: any) => {
    try {
        const res = await instance.post("admins/auth/login", data)
        sessionStorage.setItem("access_token", res.data.tokens.accessToken);
        // if (sessionStorage.getItem('access_token')) {
        useGlobalStore.getState().setIsAccessToken(true)
        // }
        return res
    } catch (error) {
        console.error("Failed to fetch data")
    }
}

export { logIn }