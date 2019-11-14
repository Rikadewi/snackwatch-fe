import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login';
import Hello from './hello';

const UserNavigator = createStackNavigator(
    {
        Hello: { screen: Hello },
        Login: { screen: Login },
    },
    {
        headerMode: "none",
    }
);

export default createAppContainer(UserNavigator);
