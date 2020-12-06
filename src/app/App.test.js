import { Homepage } from './../pages/Home';
import CountryDataTable from './../_components/home/CountryDataTable';
import TestRenderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

test('test render Homepage no crash', () => {
  let store = mockStore({
    app: {
      driven: {
        loading: false
      }
    },
    covid: {
      countries: []
    }
  });

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

test('test render Homepage', () => {
  let store = mockStore({
    app: {
      driven: {
        loading: false
      }
    },
    covid: {
      countries: []
    }
  });

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
  const testInstance = testRenderer.root;
  expect(testInstance.findByType('div').props.className).toBe('container');
  expect(testInstance.findByProps({className: 'container'}).children.length).toBe(3);
  // label check
  expect(testInstance.findByProps({className:'country-label'}).props.children).toBe('Country');
  expect(testInstance.findByProps({className:'from-label'}).props.children).toBe('From Date');
  expect(testInstance.findByProps({className:'to-label'}).props.children).toBe('To Date');
  // Button check
  expect(testInstance.findByProps({className:'btn-search'}).props.children).toBe('Search');
  expect(testInstance.findByProps({className:'btn-clear'}).props.children).toBe('Clear');
  // DatePicker check
  expect(testInstance.findByProps({className:'from-date'}).props.type).toBe('date');
  expect(testInstance.findByProps({className:'to-date'}).props.type).toBe('date');
  // Dropdown check
  expect(testInstance.findByProps({placeholder:'Select Country'}).props.icon).toBe('dropdown');
});

test('test render no crash', () => {
  const data = [];
  const testRenderer = TestRenderer.create(<CountryDataTable data={data}/>);
  expect(testRenderer.toJSON()).toMatchSnapshot();
});

test('test render table when no data', () => {
  const data = [];
  const testRenderer = TestRenderer.create(<CountryDataTable data={data}/>);
  const testInstance = testRenderer.root;
  
  expect(testInstance.findByType('table').props.className).toBe('ui celled table');
});

test('should call during componentDidMount', () => {
  let store = mockStore({
    app: {
      driven: {
        loading: false
      }
    },
    covid: {
      countries: []
    }
  });

  store.dispatch = jest.fn();

  TestRenderer.create(
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  
});

test('test get data from country', () => {
  let store = mockStore({
    app: {
      driven: {
        loading: false
      }
    },
    covid: {
      countries: [{key: 'vietnam', value:'vietnam', text: "Viet Nam"}]
    }
  });

  store.dispatch = jest.fn();

  const testRenderer = TestRenderer.create(
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
  
  TestRenderer.act(() => {
    testRenderer.root.findByProps({placeholder:'Select Country'})
    .props.onChange({ target: { value: 'vietnam'} }, { key: 'vietnam', text: 'Viet Nam', value: 'vietnam' });
    testRenderer.root.findByProps({className:'btn-search'}).props.onClick();
  });

  expect(store.dispatch).toHaveBeenCalledTimes(2);
});