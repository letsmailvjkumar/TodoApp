import { useContext } from "react";
import UserContent from "../contexts/UserContent";
import Login from '../pages/Login'

export const withAuthorization = (WrappedComponent) => {
    return (props) => {
        const { user } = useContext(UserContent);
        if (user?.isLoggedIn) {
        return <WrappedComponent {...props} />;
        } else {
        return <Login />;
        }
    }
}