import { useGetProductsQuery } from "../services/productsApi";
import "../styles/Profile.css";

function Profile() {
  const { data, isLoading, isFetching } = useGetProductsQuery();
  console.log("products data", data);
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <p>
        Welcome to your profile! Here you can view and edit your personal
        information.
      </p>
      <form className="profile-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
