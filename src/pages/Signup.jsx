import { useForm } from "react-hook-form";
import "../styles/Signup.css";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Handle signup logic here
    console.log(data);
  };
  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="error">Name is required</span>}
        </div>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
