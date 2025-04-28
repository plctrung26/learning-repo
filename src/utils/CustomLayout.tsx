import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import CustomSider from "../components/CustomSider/CustomSider";
import CustomHeader from "../components/CustomHeader/CustomHeader";

const { Content, Sider } = Layout;

interface CustomLayoutProps {
    header?: React.ReactNode;
    sider?: React.ReactNode;
}

const CustomLayout = ({ header = <CustomHeader />, sider = <CustomSider /> }: CustomLayoutProps) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider width={250} style={{ background: colorBgContainer }}>
                {sider}
            </Sider>
            <Layout>
                {header}
                <Layout style={{ padding: '0px' }}>
                    <Content
                        style={{
                            height: '92vh',
                            padding: 0,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            boxSizing: 'border-box',
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            padding: '20px',
                            backgroundColor: '#F7F8F9',
                            boxSizing: 'border-box',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}>
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>

    )
}

export default CustomLayout;