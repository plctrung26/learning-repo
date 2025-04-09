import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/articleStore/articleStore';
import { closeArticleModal } from '../../redux/articleStore/articleDrawerSlice';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import CustomModal from './CustomModal';

const ArticleDeleteModal = () => {

    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.drawer.isArticleDrawerOpen && state.drawer.type === "modal");

    return (
        <>
            <CustomModal
                title={
                    <div style={{ textAlign: 'left' }}>
                        <div style={{
                            border: "2px"
                        }}>
                            <ExclamationCircleTwoTone style={{
                                fontSize: "30px",
                                marginBottom: 16,
                                color: 'red',
                                backgroundColor: "#F8C3C3",

                            }} />
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Delete Article?</div>
                    </div>
                }
                centered
                open={isOpen}
                onOk={() => dispatch(closeArticleModal())}
                onCancel={() => dispatch(closeArticleModal())}
            >
                <div>Are you sure you want to delete this item?</div>
            </CustomModal>
        </>
    );
};

export default ArticleDeleteModal;