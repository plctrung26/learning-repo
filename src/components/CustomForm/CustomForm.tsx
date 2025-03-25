import { Button, Form, Input } from 'antd';


const CustomForm: React.FC = () => {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            layout="vertical"
        >
            <Form.Item label="Field A">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
                label="Field B"
            >
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default CustomForm;