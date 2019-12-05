import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header'


describe('test <Header/>', () => {
    it('should render', () => {
        const wrapper = shallow(<Header title={"test"}/>);
        const contains = wrapper.contains(<h3>{"test"}</h3>)
        expect(contains).toBeTruthy();
    })
})
