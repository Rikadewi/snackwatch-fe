import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login';
import Hello from './hello';
import Know from './register/know';
import Allergy from './register/allergy';

const UserNavigator = createStackNavigator(
    {
        Allergy: { screen: Allergy },
        Hello: { screen: Hello },
        Know: { screen: Know },
        Login: { screen: Login },
    },
    {
        headerMode: "none",
    }
);

export default createAppContainer(UserNavigator);
