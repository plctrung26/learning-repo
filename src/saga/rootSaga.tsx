import { all } from 'redux-saga/effects';
import { watchUpdateArticleData } from './articleUpdateData';
import { watchDeleteArticleData } from './articleDeleteData';

export default function* rootSaga() {
    yield all([
        watchUpdateArticleData(),
        watchDeleteArticleData()
    ]);
}
