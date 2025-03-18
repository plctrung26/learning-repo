import { Breadcrumb, Button, Dropdown, Input, MenuProps } from 'antd'
import { DownloadOutlined, DownOutlined, FilterOutlined } from '@ant-design/icons';
import './CustomHeader.scss'
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const CustomHeader = () => {
    return (
        <div className="custom-navbar">
            <div className="pagination">
                <Breadcrumb
                    items={[{ title: 'Text', }, { title: 'beadcrumb', }
                    ]}
                />
            </div>
            <div className='search-items'>
                <Search placeholder="input search text" onSearch={onSearch} className='search-bar' />
                <Button icon={<FilterOutlined />} className='filter-button'>Filter</Button>
            </div>
            <div className="right-buttons">
                <Dropdown menu={{ items }} placement="bottomRight" >
                    <Button icon={<DownOutlined />} iconPosition={'end'} className='nav-button'>Bulk Action</Button>
                </Dropdown>
                <Button icon={<DownloadOutlined />} iconPosition={'end'} className='nav-button'>
                    Export to CSV
                </Button>
                <Button className='nav-button create-button' >
                    Create
                </Button>
            </div>
        </div>
    )
}

export default CustomHeader