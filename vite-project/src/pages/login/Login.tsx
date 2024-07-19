import { Input } from 'antd';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { loginUser } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../reducer/auth/authSlice';

// Form ma'lumotlari uchun interfeys
interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<LoginFormValues>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const token = await loginUser(data);
      if (token) {
        localStorage.setItem("token", token);
        reset();
        dispatch(authActions.login());
        navigate("/");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <div className='bg-blue-300 w-[300px] h-[300px] border m-auto mt-[100px] rounded-2xl'>
        <h1 className='font-bold text-[20px] text-center mt-[10px]'>Login</h1>
        <form className='w-[250px] h-[150px] m-auto flex flex-col justify-around mt-[10px]' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email must not be empty" }}
              render={({ field }) => (
                <Input placeholder="Email..."
                  {...field}
                  status={errors.email ? "error" : ""}
                />
              )}
            />
            {errors.email && <p>Email must not be empty</p>}
          </div>

          <div>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password must not be empty" }}
              render={({ field }) => (
                <Input placeholder="Password..."
                  {...field}
                  status={errors.password ? "error" : ""}
                />
              )}
            />
            {errors.password && <p>Password must not be empty</p>}
          </div>

          <button className='rounded bg-blue-500 text-white w-[90px]' type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
