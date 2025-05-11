import CustomSearchBar from "../../../../components/CustomSearchBar/CustomSearchBar"
import useAdminStore from "../../../../store/account/useAdminStore"

const AdminSearchBar = () => {
    const { setQueryString } = useAdminStore()
    return (
        <CustomSearchBar queryFunction={setQueryString} />
    )
}

export default AdminSearchBar