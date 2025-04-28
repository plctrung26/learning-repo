import { Spin } from 'antd';

const PageLoading = () => (
    <div style={{
        position: 'fixed',
        left: 0, top: 0, right: 0, bottom: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.7)', zIndex: 9999
    }}>
        <Spin size="large" />
    </div>
);

export default PageLoading;