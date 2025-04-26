import CustomModal from '../../../components/CutomModal/CustomModal';
import useCreateData from '../../../hooks/articleHooks/useCreateData';
import useArticleStore from '../../../store/article/useArticleStore';


const ArticleCreateModal = ({ formData }: { formData: any }) => {

    const { closeArticleModal, closeArticleDrawer } = useArticleStore()
    const isModalOpen = useArticleStore((state) => state.isOpen && state.action === 'create' && state.isSubmitOpen)
    const { mutate } = useCreateData();

    const handleConfirm = async () => {
        if (formData) {
            try {
                const formattedValues = {
                    ...formData,
                    picture: formData.picture.uri,
                    categoryId: formData.category,
                    type: "article"
                }
                mutate(formattedValues)
            } catch (error) {
                console.error("Failed to create data: ", error)
            }
        }
        closeArticleModal()
        closeArticleDrawer()
    };

    return (
        <>
            <CustomModal
                title={"This is confirm Submit modal"}
                centered
                open={isModalOpen}
                onOk={handleConfirm}
                onCancel={closeArticleModal}
            >

            </CustomModal>
        </>
    );
};

export default ArticleCreateModal;