import CustomModal from '../../../components/CutomModal/CustomModal';
import useTableRowData from '../../../hooks/articleHooks/useTableRowData';
import useArticleStore from '../../../store/article/useArticleStore';


const ArticleUpdateModal = ({ formData }: { formData: any }) => {

    const { id, closeArticleModal, closeArticleDrawer } = useArticleStore()
    const isModalOpen = useArticleStore((state) => state.isOpen && state.action === 'update' && state.isSubmitOpen)
    const { updateArticle } = useTableRowData(id);

    const handleConfirm = async () => {
        if (formData && id) {
            try {
                const transformedData = {
                    ...formData,
                    picture: formData.picture?.uri || "",
                };
                updateArticle({ id: id, data: transformedData });
            } catch (error) {
                console.error("Failed to update data")
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

export default ArticleUpdateModal;