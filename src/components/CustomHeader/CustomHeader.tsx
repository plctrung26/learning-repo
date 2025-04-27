import { Breadcrumb, Button } from 'antd'
import './CustomHeader.scss'
import useArticleStore from '../../store/article/useArticleStore';
import CustomSearchBar from '../CustomSearchBar/CustomSearchBar';

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
                <CustomSearchBar />
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