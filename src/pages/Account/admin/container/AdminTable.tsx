import { useEffect } from "react";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import useAdminStore from "../../../../store/account/useAdminStore";
import useAdminData from "../../../../hooks/accountsHooks/admin/useAdminData";
import { TableColumnsType } from "antd";
import { AdminDataType } from "../../../../types/account/admin/AdminDataType";
import AdminButtonGroup from "./AdminButtonGroup";
import AdminDeleteModal from "./AdminDeleteModal";



const columns: TableColumnsType<AdminDataType> = [
    {
        title: 'Username',
        dataIndex: 'username',
        showSorterTooltip: { target: 'full-header' },
        sorter: (a, b) => a.username.length - b.username.length,
    },
    {
        title: 'First name',
        dataIndex: 'firstName',
        showSorterTooltip: { target: 'full-header' },
        sorter: (a, b) => a.firstName.length - b.firstName.length,
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        showSorterTooltip: { target: 'full-header' },
        sorter: (a, b) => a.lastName.length - b.lastName.length,

    },
    {
        title: 'Email',
        dataIndex: 'email',
        showSorterTooltip: { target: 'full-header' },
        sorter: (a, b) => a.email.length - b.email.length,

    },
    {
        title: 'Role',
        dataIndex: 'role',
        showSorterTooltip: { target: 'full-header' },
        sorter: (a, b) => a.role.length - b.role.length,

    },
    {
        title: 'Status',
        dataIndex: 'status',
        showSorterTooltip: { target: 'full-header' },
        sorter: (a, b) => a.status.length - b.status.length,

    },

    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        width: 120,
        fixed: "right",
        render: (_, record) => <AdminButtonGroup id={record.id} />,
    },
];

const AdminTable = () => {
    const { page, limit, setPage, setLimit, setTotal } = useAdminStore()
    const { total } = useAdminStore();
    const { queryString } = useAdminStore();
    const { data: AdminData, metadata, refetchTable } = useAdminData({
        page: page,
        limit: limit,
        ...(queryString !== "" && { search: queryString })
    });

    const handlePagination = ({ page, limit, total }: { page: number, limit: number, total: number }) => {
        setPage(page)
        setLimit(limit)
        setTotal(total)
    }

    useEffect(() => {
        refetchTable()
    }, [queryString]);


    useEffect(() => {
        if (metadata) {
            handlePagination({ page: metadata.page, limit: metadata.limit, total: metadata.totalPages * metadata.limit });
        }
    }, [metadata]);

    const handleTableChange = (pagination: any) => {
        const { current, pageSize } = pagination;
        console.log(current, pageSize)
        handlePagination({ page: current, limit: pageSize, total: metadata.totalPages * pageSize });
    };

    return (
        <div style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundColor: '#F7F8F9',
            boxSizing: 'border-box'
        }}>
            <CustomTable
                columns={columns}
                dataSource={AdminData}
                pagination={{
                    total: total,
                    showSizeChanger: true,
                    pageSize: metadata?.limit,
                    current: metadata?.page,
                    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`
                }}
                onChange={handleTableChange}
            />
            <AdminDeleteModal refetchTable={refetchTable} />
        </div>
    );
}

export default AdminTable;