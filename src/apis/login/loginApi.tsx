import instance from "../apiConfig"

const logIn = async (data: any) => {
    try {
        const res = await instance.post("admins/auth/login", data)
        sessionStorage.setItem("access_token", res.data.tokens.accessToken);
        console.log(res)
        console.log(sessionStorage.getItem("access_token"))
        return res
    } catch (error) {
        console.error("Failed to fetch data")
    }
}

export { logIn }