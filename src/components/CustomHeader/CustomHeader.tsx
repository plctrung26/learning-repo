import { Breadcrumb, Button, Input } from 'antd'
import './CustomHeader.scss'
import type { GetProps } from 'antd';
import useArticleStore from '../../store/article/useArticleStore';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const CustomHeader = () => {
    const { openArticleDrawer, setAction } = useArticleStore()

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
            </div>
            <Button
                className='filter-button'
                onClick={() => {
                    setAction("create")
                    openArticleDrawer()
                }}
            >
                Create
            </Button>
        </div>
    )
}

export default CustomHeader