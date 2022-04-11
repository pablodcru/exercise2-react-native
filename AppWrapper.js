import { Provider } from 'react-redux';
import configureStore from './redux-store/store';
import App from './App';

export default AppWrapper = () => {
    const store = configureStore();
  
    return (
      <Provider store={store}> 
        <App /> 
      </Provider>
    )
}