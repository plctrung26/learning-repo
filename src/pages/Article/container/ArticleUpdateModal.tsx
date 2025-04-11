import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/articleStore/articleStore';
import { cancelSubmit, updateArticleData } from '../../../redux/articleStore/articleDrawerSlice';
import CustomModal from '../../../components/CutomModal/CustomModal';
import { useEffect } from 'react';


const ArticleUpdateModal = ({ formData }: { formData: any }) => {

    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.drawer.isSubmitOpen);
    const id = useSelector((state: RootState) => state.drawer.id)

    const handleConfirm = () => {
        if (formData && id) {
            const transformedData = {
                ...formData,
                picture: formData.picture?.uri || "",
            };
            dispatch(updateArticleData({ id, data: transformedData }));
        }
        dispatch(cancelSubmit());
    };

    useEffect(() => {
        console.log(formData)
    }, [formData])
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