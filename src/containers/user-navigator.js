import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login';
import Hello from './hello';
import Know from './register/know';
import Allergy from './register/allergy';
import Illness from './register/illness';

const UserNavigator = createStackNavigator(
    {
        Hello: { screen: Hello },
        Know: { screen: Know },
        Allergy: { screen: Allergy },
        Illness: { screen: Illness },
        Login: { screen: Login },
    },
    {
        headerMode: "none",
    }
);

export default createAppContainer(UserNavigator);
