
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Input from './';

describe('<Button /> with no props', () => {
    it('renders correctly ', () => {
        const wrapper = shallow(
            <Input
                placeholder={"Type Something"}
                searchValue={"test"}
                onInputChange={jest.fn().mockImplementation(() => { return 'test' })}
            />);
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should return test after executing  onInputChange', () => {

        const onInputChangeMock = jest.fn().mockImplementation(() => { return 'test' });

        const wrapper = mount(
            <Input
                placeholder={"Type Something"}
                searchValue={"test"}
                onInputChange={onInputChangeMock}
            />);

        wrapper.find('input').simulate('change');
        expect(onInputChangeMock).toBeCalledWith('test');
    });
});