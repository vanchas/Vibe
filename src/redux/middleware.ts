import { TEST_CREATE_POST } from './actions/types'
import { showAlert } from './actions/actions'

const forbidden = ['fuck', 'spam'];

export function forbiddenWordsMiddlwware({ dispatch }: any) {
  return function (next: any) {
    return function (action: any) {
      if (action.type === TEST_CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert('It\'s a spam!'));
        }
      }
      return next(action);
    }
  }
}