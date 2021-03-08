import { render, screen } from '@testing-library/react';
import App from './App';

import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Counter Testing ', () => {
 
  

 test('Title of Counter', () =>{
  // Shallow is testing the outer markup only "not the inner structure of the included compnents"
  const wrapper = shallow(<App/>);
  expect(wrapper.find("h1").text()).toContain('Counter App');    
 });
 
 test('render a button with text of "incerement"',()=>{
  const wrapper = shallow(<App/>);
  expect(wrapper.find('#increment-btn').text()).toBe('Increment');
 });

 test('render a button with text of "decrement"',()=>{
  const wrapper = shallow(<App/>);
  expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
 });

 test('render the initial value of the state in a div',()=>{
   const wrapper  = shallow(<App/>);
   expect(wrapper.find('#counter-value').text()).toBe("0");
 });
 
 test('render the click event of increment button and increment counter value',()=>{
   const wrapper  = shallow(<App/>);
   wrapper.find('#increment-btn').simulate('click');
   expect(wrapper.find('#counter-value').text()).toBe('1');
 });
 test('render the click event of decrement button and decrement counter value',()=>{
    const wrapper  = shallow(<App/>);
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('-1');
  });

});

