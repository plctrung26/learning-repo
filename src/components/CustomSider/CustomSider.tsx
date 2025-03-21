import { AppstoreOutlined, DesktopOutlined, EllipsisOutlined, FileOutlined, GiftOutlined, MessageOutlined, ProfileOutlined, SearchOutlined, TeamOutlined, UnorderedListOutlined, WalletOutlined } from '@ant-design/icons';
import './CustomSider.scss'
import { Avatar, Button, Dropdown, Menu, MenuProps } from 'antd';
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
    {
        key: 'static', label: 'Static Content', icon: <DesktopOutlined className='menu-icon' />, className: 'menu-button'
    },
    {
        key: 'accounts', label: 'Accounts', icon: <TeamOutlined className='menu-icon' />, className: 'menu-button menu-group', children: [
            { key: 'admin', label: 'Admin Management', className: 'menu-button' },
            { key: 'doula', label: 'Doula Management', className: 'menu-button' },
            { key: 'client', label: 'Client Management', className: 'menu-button' },
        ]
    },
    {
        key: 'article', label: 'Article', icon: <MessageOutlined className='menu-icon' />, className: 'menu-button'
    },
    {
        key: 'pd-session', label: 'PD Session', icon: <ProfileOutlined className='menu-icon' />, className: 'menu-button'
    },
    {
        key: 'category', label: 'Category', icon: <AppstoreOutlined className='menu-icon' />, className: 'menu-button'
    },
    {
        key: 'subscriptions', label: 'Subscriptions', icon: <WalletOutlined className='menu-icon' />, className: 'menu-button'
    },
    {
        key: 'voucher', label: 'Voucher', icon: <GiftOutlined className='menu-icon' />, className: 'menu-button'
    },
    {
        key: 'help-documents', label: 'Help Documents', icon: <FileOutlined className='menu-icon' />, className: 'menu-button'
    },
    {
        key: 'search-settings', label: 'Search Settings', icon: <SearchOutlined className='menu-icon' />, className: 'menu-button'
    },
];


const CustomSider = () => {
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    }

    const userMoreItems: MenuProps['items'] = [
        {
            key: 'logout', label: 'Logout', onClick: () => {
                console.log('success')
                sessionStorage.removeItem('access_token')
                navigate("/login", { replace: true });
            }
        },
        {
            key: 'change-password', label: 'Change Password',
        },
    ];
    return (
        <div className="custom-sider">
            <div className="sider-top">
                <div className="sider-name">
                    NutureWave
                    <div className="sider-icon">
                        <UnorderedListOutlined />
                    </div>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['static']}
                    defaultOpenKeys={['sub1']}
                    className='sider-menu'
                    items={items}
                    onClick={onClick}
                />
            </div>
            <div className="sider-bottom">
                <div className="sider-bottom-left">
                    <Avatar className='user-image'>
                        A
                    </Avatar>
                    <div>
                        {"Super Admin"}
                    </div>
                </div>
                <Dropdown menu={{ items: userMoreItems }} placement="topRight" trigger={['click']}>
                    <Button className='more-button' shape="circle">
                        <EllipsisOutlined className='more-icon' />
                    </Button>
                </Dropdown>

            </div>
        </div>
    )
}
export default CustomSider
