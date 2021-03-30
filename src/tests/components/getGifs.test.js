import React from 'react'
import { shallow } from 'enzyme'
import {getGifs} from '../../helpers/getGifs'

describe('Tests with getGifs fetch', () => {

    test('should return 10 elements', async() => {
        const gifs = await getGifs('Lebron');
        expect(gifs.length).toBe(10); 
    })

    test('should return 0 elements', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0); 
    })
})
