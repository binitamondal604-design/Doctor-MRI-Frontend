import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const navigate = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [degree, setDegree] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!registrationNumber) {
    newErrors.registrationNumber = "Registration number is required.";
  }

  if (!degree) {
    newErrors.degree = "Please select your degree.";
  }

  if (!password) {
    newErrors.password = "Password is required.";
  }

  if (!confirmPassword) {
    newErrors.confirmPassword = "Please confirm your password.";
  }

  if (password && confirmPassword && password !== confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
   navigate("/login");
  }
};

  return (
    <div className="register-page">
        <div className="register-card">
      <h1>Doctor Registration</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Registration Number</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />

          {errors.registrationNumber && (
  <p>{errors.registrationNumber}</p>
)}
        </div>

        <div>
          <label>Degree</label>
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          >
            <option value="">Select Degree</option>
            <option value="MBBS">MBBS</option>
            <option value="MD">MD</option>
            <option value="MS">MS</option>
            <option value="DM">DM</option>
          </select>

          {errors.degree && (
  <p>{errors.degree}</p>
)}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password && (
  <p>{errors.password}</p>
)}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {errors.confirmPassword && (
  <p>{errors.confirmPassword}</p>
)}
        </div>

        <button type="submit">Register</button>
        <p>
  Already have an account? <Link to="/login">Login</Link>
</p>
      </form>
      </div>
    </div>
  );
}

export default Register;