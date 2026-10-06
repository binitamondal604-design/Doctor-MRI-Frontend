import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!registrationNumber) {
      newErrors.registrationNumber = "Registration number is required.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    navigate("/home");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Doctor Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Registration Number</label>

            <input
              type="text"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />

            {errors.registrationNumber && (
              <p className="error-text">{errors.registrationNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <button type="submit">Login</button>
          <p className="register-link">
  Don't have an account? <Link to="/register">Register</Link>
</p>
        </form>
      </div>
    </div>
  );
}

export default Login;