import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { loginSuccess, logout } from "../slice/authSlice";
import { authService } from "../service/authService";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state: any) => state.auth);

  const login = async (username: string, password: string) => {
    const data = await authService.login(username, password);
    dispatch(loginSuccess(data));
  };

  const signOut = () => {
    dispatch(logout());
  };

  return { token, user, login, signOut };
};
