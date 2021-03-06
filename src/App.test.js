import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from "enzyme-to-json";
import App from './App';

configure({adapter: new Adapter()});

test('renders correctly App component', () => {
    const component = shallow (<App />);
    const wrapper = component.find('.App');
    expect(toJson(wrapper)).toMatchSnapshot();
});