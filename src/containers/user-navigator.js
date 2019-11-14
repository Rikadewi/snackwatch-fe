import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login';
import Hello from './hello';
import Know from './register/know';

const UserNavigator = createStackNavigator(
    {
        Know: { screen: Know },
        Hello: { screen: Hello },
        Login: { screen: Login },
    },
    {
        headerMode: "none",
    }
);

export default createAppContainer(UserNavigator);
