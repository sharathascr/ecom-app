import { useForm } from "react-hook-form";
import "../styles/Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (loginData) => {
    // Handle login logic here
    console.log("Login data:", loginData);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error">Email is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">Password is required</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
