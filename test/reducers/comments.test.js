import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments reducer', ()=>{
    it('handles action with unknown type', ()=>{
        expect(commentReducer(undefined, {})).to.eql([]);
    });
    it('SAVE_COMMENT', ()=>{
        let action = {type: SAVE_COMMENT, payload: 'new comment'};
        expect(commentReducer(undefined,action)).to.eql(['new comment']);
    });
})