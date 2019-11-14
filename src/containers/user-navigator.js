import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login';
import Hello from './hello';
import Know from './register/know';

const UserNavigator = createStackNavigator(
    {
        Hello: { screen: Hello },
        Know: { screen: Know },
        Login: { screen: Login },
    },
    {
        headerMode: "none",
    }
);

export default createAppContainer(UserNavigator);
