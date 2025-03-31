import { EditOutlined, RestOutlined } from '@ant-design/icons';
import './ButtonGroup.scss'
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { openDrawer } from '../../redux/drawerSlice';
import ArticleDrawer from '../CustomDrawer/ArticleDrawer';
import { useState } from 'react';
import { ArticleData } from '../../DataTypes/ArticleDataType';
import axios from 'axios';

const ArticleButtonGroup = ({ id }: { id: string }) => {

    const [formData, setFormData] = useState<ArticleData>()

    const fetchData = async (): Promise<ArticleData | any> => {
        try {
            const response = await axios.get<ArticleData>(`https://dev-api-nurture.vinova.sg/api/v1/admins/articles/${id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                }
            });
            console.log('Success')
            return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
            return error;
        }
    };

    const dispatch = useDispatch()

    return (
        <div className="button-group-container">
            <Button
                icon={<EditOutlined className='button-icon' />}
                className='button-group-item'
                shape='circle'
                onClick={async () => {
                    console.log(id)
                    await fetchData().then((data) => {
                        setFormData(data.data)
                        console.log("i am fetching")
                    })
                    console.log("i am drawing")
                    dispatch(openDrawer())
                }}
            />
            <ArticleDrawer data={formData} />
            <Button
                icon={<RestOutlined className='button-icon delete-button' />}
                className='button-group-item'
                shape='circle'
            />
        </div>
    )
}

export default ArticleButtonGroup
