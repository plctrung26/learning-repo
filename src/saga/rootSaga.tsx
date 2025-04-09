import { all } from 'redux-saga/effects';
import { watchUpdateArticleData } from './articleUpdateData';

export default function* rootSaga() {
    yield all([watchUpdateArticleData()]);
}
