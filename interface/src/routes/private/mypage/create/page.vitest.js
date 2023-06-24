import { render, fireEvent, screen } from '@testing-library/svelte';

import { assert, describe, it,  vi} from "vitest";
import {client as singletonClient } from '../../../../../node_modules/@sveltejs/kit/src/runtime/client/singletons'

import page from './+page.svelte';


describe('Server test', () => {
    it('shoud return index', async () => {
        
        let apiCalled = false
        let initState = singletonClient.goto;
        let res;
        const proms = new Promise(function(_res) {
            res = _res;
        })
        const mockGoto = {
            goto:function(...args) {
                console.dir(args);
                res();

            }
        }
        singletonClient.goto = mockGoto;

        async function spy () {
            apiCalled = true
            return new Response('{ "key": "value" }', { status: 200 })
        } 

        vi.spyOn(global, 'fetch').mockImplementation(spy);
        
        render(page);
        
        await fireEvent.click(screen.getByTestId('save'))
        
       
        await proms;
        singletonClient.goto = initState;
        assert.ok(apiCalled);

    })
});