import { ExclamationCircleTwoTone } from '@ant-design/icons';
import CustomModal from '../../../components/CutomModal/CustomModal';
import useArticleStore from '../../../store/article/useArticleStore';
import useDeleteData from '../../../hooks/articleHooks/useDeleteData';
const ArticleDeleteModal = ({ formData }: { formData: any }) => {
    const { closeArticleModal } = useArticleStore()
    const { mutate } = useDeleteData()
    const isModalOpen = useArticleStore((state) => state.isOpen && state.type === 'modal' && state.isSubmitOpen && state.action === 'delete')
    const handleOk = () => {
        try {
            if (formData) {
                mutate(formData)
                closeArticleModal()

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
            open={isModalOpen}
            onOk={handleOk}
            onCancel={closeArticleModal}
        >
            <div>Are you sure you want to delete this item?</div>
        </CustomModal>

    );
};

export default ArticleDeleteModal;