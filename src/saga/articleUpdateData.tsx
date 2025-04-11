import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ArticleData } from '../types/article/ArticleDataType';
import { updateArticleData, updateArticleDataFailure, updateArticleDataSuccess } from '../redux/articleStore/articleDrawerSlice';

interface UpdateArticleAction {
    payload: {
        id: string
        data: ArticleData
    }
    type: string;
}

function* updateUserWorker(action: UpdateArticleAction): Generator {
    try {
        const { id, data } = action.payload;

        yield call(
            axios.put,
            `https://dev-api-nurture.vinova.sg/api/v1/admins/articles/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
                },
            }
        );
        yield put(updateArticleDataSuccess());
        console.log("I updated data")
    } catch (error) {
        console.log("I Updated Data but failed")
        yield put(updateArticleDataFailure('Failed'));
    }
}

export function* watchUpdateArticleData() {
    yield takeLatest(updateArticleData.type, updateUserWorker);
}