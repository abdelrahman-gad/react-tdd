import { render, screen } from '@testing-library/react';
import App from './App';

import {shallow} from 'enzyme';

describe('Counter Testing ', () => {
 
  let wrapper; 
  beforeEach(()=>{
      // Shallow is testing the outer markup only "not the inner structure of the included compnents"
    wrapper = shallow(<App/>);
  }); 
 
 test('Title of Counter', () =>{
  expect(wrapper.find("h1").text()).toContain('Counter App');    
 });
 
 test('render a button with text of "incerement"',()=>{
  expect(wrapper.find('#increment-btn').text()).toBe('Increment');
 });

 test('render a button with text of "decrement"',()=>{
  expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
 });

 test('render the initial value of the state in a div',()=>{
   expect(wrapper.find('#counter-value').text()).toBe("0");
 });
 
 test('render the click event of increment button and increment counter value',()=>{
   wrapper.find('#increment-btn').simulate('click');
   expect(wrapper.find('#counter-value').text()).toBe('1');
 });
 test('render the click event of decrement button and decrement counter value',()=>{
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('-1');
  });

});

