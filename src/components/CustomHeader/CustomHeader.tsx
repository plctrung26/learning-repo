import { Breadcrumb, Button } from 'antd'
import './CustomHeader.scss'
import CustomSearchBar from '../CustomSearchBar/CustomSearchBar';

interface CustomHeaderProps {
    articleButtonText?: string
    beadcrumbTitle?: { 'title': string }[]
    handleButtonClick?: () => void
}

const CustomHeader = ({ articleButtonText = 'create', beadcrumbTitle = [{ "title": "none" }], handleButtonClick = () => { } }: CustomHeaderProps) => {

    return (
        <div className="custom-navbar">
            <div className="pagination">
                <Breadcrumb
                    items={beadcrumbTitle}
                />
            </div>
            <div className='search-items'>
                <CustomSearchBar placeholder='Search' />
            </div>
            <Button
                className='filter-button'
                onClick={handleButtonClick}
            >
                {articleButtonText}
            </Button>
        </div>
    )
}

export default CustomHeader