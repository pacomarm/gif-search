import React from 'react'
import { shallow } from 'enzyme'
import {AddCategory} from '../../components/AddCategory'
import { ToggleButton } from 'react-bootstrap';
import '@testing-library/jest-dom'

describe('Tests in AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    })

    test('should show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change text box', () => {

        const input = wrapper.find('input');
        const value = 'Waddup'
        input.simulate('change', {target:{value}}); 
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('should not submit info on submit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled(); 
    })
    
})
