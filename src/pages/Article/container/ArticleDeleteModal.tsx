import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/articleStore/articleStore';
import { closeArticleModal } from '../../../redux/articleStore/articleDrawerSlice';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import CustomModal from '../../../components/CutomModal/CustomModal';
import { deleteArticleData } from '../../../apis/article/articleApi';
const ArticleDeleteModal = ({ formData }: { formData: any }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.drawer.isArticleDrawerOpen && state.drawer.type === "modal");
    const handleOk = async () => {
        try {
            if (formData) {
                const formattedData = { "ids": [formData] }
                console.log(formattedData)
                const res = await deleteArticleData(formattedData)
                console.log(res)
            }

        } catch (error) {
            console.error("Failed: ", error)
        }
    }

    return (

        <CustomModal
            title={
                <div style={{ textAlign: 'left' }}>
                    <div style={{
                        border: "2px"
                    }}>
                        <ExclamationCircleTwoTone />
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: 20 }}>Delete Article?</div>
                </div>
            }
            centered
            open={isOpen}
            onOk={handleOk}
            onCancel={() => dispatch(closeArticleModal())}
        >
            <div>Are you sure you want to delete this item?</div>
        </CustomModal>

    );
};

export default ArticleDeleteModal;