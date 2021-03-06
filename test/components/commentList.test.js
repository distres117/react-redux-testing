import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/commentList';

describe('CommentList', () =>{
    let component;
    
    beforeEach(()=>{
        const props = {comments: ['comment!', 'other new comment']};
        component = renderComponent(CommentList, null, props);
    });
    it('shows an LI for each comment', ()=>{
        expect(component.find('li').length).to.equal(2);
    });
    it('shows each comment that is provided', ()=>{
        expect(component).to.contain('comment!');
        expect(component).to.contain('other new comment');
    });
});