import CustomHeader from "../../../../components/CustomHeader/CustomHeader"
import useAdminStore from "../../../../store/account/useAdminStore"
import AdminSearchBar from "./AdminSearchBar"


const AdminHeader = () => {
    const { openAdminDrawer, setAction } = useAdminStore()

    const handleClick = () => {
        setAction("create")
        openAdminDrawer()
    }
    return (
        <CustomHeader
            SearchBarRender={<AdminSearchBar />}
            beadcrumbTitle={[{ title: "Admin" }]}
            buttonText="Create Admin"
            handleButtonClick={handleClick} />
    )
}

export default AdminHeader