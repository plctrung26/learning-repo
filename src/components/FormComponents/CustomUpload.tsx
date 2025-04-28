import { GetProp, Image, Upload, UploadFile, UploadProps } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

interface image {
    picture: {
        uri: string;
        type: string;
        createdAt: string;
        metadata?: {
            thumb?: { uri: string };
            medium?: { uri: string };
        };
    };
}

interface CustomUploadProps extends Omit<UploadProps, 'onChange' | 'fileList' | 'value'> {
    value?: image['picture'] | null;
    onChange?: (value: image['picture'] | null) => void;
}

const CustomUpload: React.FC<CustomUploadProps> = ({ value, onChange, ...UploadProps }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
        setFileList(newFileList);

        if (newFileList.length > 0) {
            const file = newFileList[0];
            let uri = file.url;
            if (!uri && file.originFileObj) {
                uri = await getBase64(file.originFileObj as FileType);
            }
            const picture: image['picture'] = {
                uri: "https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F9d20a6b8-3eb8-4cb6-8de1-c570199221d4_image_picker_2E5934AD-1857-400D-A81C-E6A462961598-8551-0000107C2821B06C.png", //|| '',
                type: file.type || '',
                createdAt: new Date().toISOString(),
            };
            onChange?.(picture);
        } else {
            onChange?.(null);
        }
    };


    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    useEffect(() => {
        if (value?.uri) {
            setFileList([
                {
                    uid: "-1",
                    name: value.uri.split('/').pop() || 'image.webp',
                    url: value.uri,
                    type: "image/webp",
                },
            ]);
        } else {
            setFileList([])
        }
    }, [value]);

    const handleRemove: UploadProps['onRemove'] = () => {
        setFileList([])
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <>
            <Upload
                {...UploadProps}
                fileList={fileList}
                action={undefined}
                listType="picture-card"
                onPreview={handlePreview}
                onChange={handleChange}
                onRemove={handleRemove}

            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {
                previewImage && (
                    <Image
                        wrapperStyle={{ display: 'none' }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: (visible) => setPreviewOpen(visible),
                            afterOpenChange: (visible) => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                    />
                )
            }
        </>

    )
}
export default CustomUpload