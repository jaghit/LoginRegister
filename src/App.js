import { StackNavigator } from 'react-navigation';
import Welcome from './component/Welcome';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Home from './component/Home';

const STACKNavigator = StackNavigator({
    WELCOME: {
        screen: Welcome
    },
    SIGNIN: {
        screen: SignIn
    },
    SIGNUP: {
        screen: SignUp
    },
    HOME: {
        screen: Home
    }
});

export default STACKNavigator;
