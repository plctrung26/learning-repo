import AdminTable from "./container/AdminTable"
import AdminUpdateDrawer from "./container/AdminUpdateDrawer";
import AdminCreateDrawer from "./container/AdminCreateDrawer";

const Account = () => {


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            boxSizing: 'border-box'
        }}  >
            <AdminTable />
            <AdminUpdateDrawer />
            <AdminCreateDrawer />

        </div>

    )

}

export default Account