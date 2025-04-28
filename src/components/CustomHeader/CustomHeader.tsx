import { Breadcrumb, Button } from 'antd'
import './CustomHeader.scss'
import CustomSearchBar from '../CustomSearchBar/CustomSearchBar';

interface CustomHeaderProps {
    handleButtonClick?: () => void
}

const CustomHeader = ({ handleButtonClick = () => { } }: CustomHeaderProps) => {
    // const { openArticleDrawer, setAction } = useArticleStore()

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
                onClick={handleButtonClick}
            >
                Create
            </Button>
        </div>
    )
}

export default CustomHeader