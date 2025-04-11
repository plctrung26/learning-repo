import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { confirmDelete, deleteArticleDataFailure, deleteArticleDataSuccess } from '../redux/articleStore/articleDrawerSlice';
interface DeleteArticleAction {
    payload: {
        "ids": string[]
    },
    type: string
}

function* deleteArticleData(action: DeleteArticleAction): Generator {
    try {
        console.log("IM saga", action)
        const id = action.payload
        console.log(id)
        yield call(axios.delete, 'https://dev-api-nurture.vinova.sg/api/v1/admins/articles', {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
            },
            data: id
        });
        yield put(deleteArticleDataSuccess());
        console.log("I deleted data")
    } catch (error) {
        console.log("I Deleted Data but failed")
        yield put(deleteArticleDataFailure('Failed'));
    }
}

export function* watchDeleteArticleData() {
    yield takeLatest(confirmDelete.type, deleteArticleData);
}