import React from 'react'
import { shallow } from 'enzyme'
import {GifGridItem} from '../../components/GifGridItem'

describe('Tests of GifGrid Item', () => {

    const title = 'Un Título';
    const url = 'https://local.paco.gpi'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>) 
    
    test('should show components correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have card title', () => {
        const titleTest = wrapper.find('#tit');
        expect(titleTest.text().trim()).toBe(title);
    })

    test('should have proper image from url and alt', () => {
        const imgTest = wrapper.find('#im');
        expect(imgTest.prop('src')).toBe(url);
        expect(imgTest.prop('alt')).toBe(title);
        
    })

    test('should have css classes', () => {
        const card = wrapper.find('Card');
        expect(card.hasClass('cardd')).toBe(true);
    })
    
    
})
