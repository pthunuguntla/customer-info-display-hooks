
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './';

describe('<Button /> with no props', () => {
    it('should match the snapshot', () => {
        const wrapper = shallow(<Button name={"Add"} onClick={jest.fn()} />);
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
});