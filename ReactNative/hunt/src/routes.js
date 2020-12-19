import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';
import Product from './pages/product';

const MainNavigator = createStackNavigator(
    { Main, Product },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#da552f'
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }
    },
);

const App = createAppContainer(MainNavigator);

export default App;