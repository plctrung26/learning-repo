
import CustomButtonGroup from "../../../../components/ButtonGroup/CustomButtonGroup"
import useAdminStore from "../../../../store/account/useAdminStore"

const AdminButtonGroup = ({ id }: { id: string }) => {

    const { setId, openAdminDrawer, setAction, openAdminModal2, setType } = useAdminStore()

    const handleEditClick = () => {
        setId(id)
        setType('drawer')
        setAction("update")
        openAdminDrawer()
    }

    const handleDeleteClick = () => {
        setId(id)
        setType('modal')
        setAction("delete")
        openAdminModal2()
    }


    return (
        <CustomButtonGroup
            isDelete={true}
            isEdit={true}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
        />
    )
}

export default AdminButtonGroup