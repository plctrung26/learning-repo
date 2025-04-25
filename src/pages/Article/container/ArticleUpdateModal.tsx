import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/articleStore/articleStore';
import CustomModal from '../../../components/CutomModal/CustomModal';
import { cancelSubmit } from '../../../redux/articleStore/articleDrawerSlice';
import useTableRowData from '../../../hooks/articleHooks/useTableRowData';


const ArticleUpdateModal = ({ formData }: { formData: any }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.drawer.isSubmitOpen);
    const id = useSelector((state: RootState) => state.drawer.id)
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
        dispatch(cancelSubmit());
    };

    return (
        <>
            <CustomModal
                title={"This is confirm Submit modal"}
                centered
                open={isOpen}
                onOk={handleConfirm}
                onCancel={() => dispatch(cancelSubmit())}
            >

            </CustomModal>
        </>
    );
};

export default ArticleUpdateModal;