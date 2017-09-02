// React/Redux
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// Store + React components
import Header from '../react/header.jsx';
import Main from '../react/main.jsx';
// import store from './redux/Store';

/*      Search Bar       */
render(
  //   <Provider store={store}>
  <div>
    <Header />
    <Main />
  </div>,
  //   </Provider>,
  document.getElementById('root')
);
