import { Breadcrumb, Button } from 'antd'
import './CustomHeader.scss'
import CustomSearchBar from '../CustomSearchBar/CustomSearchBar';
interface CustomHeaderProps {
    buttonText?: string
    beadcrumbTitle?: { 'title': string }[]
    SearchBarRender?: React.ReactNode;
    handleButtonClick?: () => void
}

const CustomHeader = ({ SearchBarRender = <CustomSearchBar placeholder='Default' />, buttonText: articleButtonText = 'create', beadcrumbTitle = [{ "title": "none" }], handleButtonClick = () => { } }: CustomHeaderProps) => {

    return (
        <div className="custom-navbar">
            <div className="pagination">
                <Breadcrumb
                    items={beadcrumbTitle}
                />
            </div>
            <div className='search-items'>
                {SearchBarRender}
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