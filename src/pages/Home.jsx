import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
const [error, setError] = useState("");
const [analysisStarted, setAnalysisStarted] = useState(false);
const [isAnalyzing, setIsAnalyzing] = useState(false);

const [patientName, setPatientName] = useState("");
const [patientId, setPatientId] = useState("");
const [patientAge, setPatientAge] = useState("");
const [gender, setGender] = useState("");
  return (
    <div className="home-page">
     <header className="home-header">
  <h1>MRI Portal</h1>

  <div className="header-actions">
    <Link to="/dashboard" className="dashboard-link">
      Dashboard
    </Link>

    <button onClick={() => navigate("/login")}>
  Logout
</button>
  </div>
</header>

      <main className="home-content">
        <h2>Welcome</h2>

        <p>
          Upload an MRI scan to check for tumor detection.
        </p>

        <div className="upload-section">
            <h3>Patient Details</h3>
<div className="patient-form">

  <div className="form-group">
    <label>Patient Name</label>
    <input
      type="text"
      placeholder="Enter patient name"
      value={patientName}
      onChange={(e) => setPatientName(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Patient ID</label>
    <input
      type="text"
      placeholder="Enter patient ID"
      value={patientId}
      onChange={(e) => setPatientId(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Patient Age</label>
    <input
      type="number"
      placeholder="Enter patient age"
      value={patientAge}
      onChange={(e) => setPatientAge(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Gender</label>
    <select
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    >
      <option value="" disabled>
        Select gender
      </option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>

</div>
          <h3>Upload MRI</h3>

         <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    setSelectedFile(e.target.files[0]);
    setError("");
  }}
/>
{selectedFile && (
    <p>Selected file: {selectedFile.name}</p>
)}

{selectedFile && (
  <div className="mri-preview">
    <img
      src={URL.createObjectURL(selectedFile)}
      alt="Selected MRI"
    />
  </div>
)}

   

          <button
  onClick={() => {
    if (!patientName.trim()) {
      setError("Please enter patient name.");
      return;
    }

    if (!patientId.trim()) {
      setError("Please enter patient ID.");
      return;
    }

    if (!patientAge) {
      setError("Please enter patient age.");
      return;
    }

    if (!gender) {
      setError("Please select gender.");
      return;
    }

    if (!selectedFile) {
      setError("Please select an MRI image first.");
      return;
    }

    setError("");
    setIsAnalyzing(true);
    setAnalysisStarted(false);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisStarted(true);
    }, 2000);
  }}
  disabled={isAnalyzing}
>
  {isAnalyzing ? "Analyzing MRI..." : "Analyze MRI"}
</button>
{error && <p className="error-message">{error}</p>}
{analysisStarted && (
  <div className="analysis-result">
    <h3>Prediction Result</h3>

    <div className="result-status">
      <span className="result-label">Prediction</span>
      <span className="result-value">Tumor Detected</span>
    </div>

    <div className="result-status">
      <span className="result-label">Confidence</span>
      <span className="result-value">94%</span>
    </div>

    <div className="result-status">
      <span className="result-label">Tumor Probability</span>
      <span className="result-value">94%</span>
    </div>

    <div className="result-status">
      <span className="result-label">No Tumor Probability</span>
      <span className="result-value">6%</span>
    </div>

    <p className="demo-note">
      Sample prediction shown for frontend demonstration.
    </p>

    <button
  className="new-analysis-btn"
  onClick={() => {
    setAnalysisStarted(false);
    setSelectedFile(null);
    setPatientName("");
    setPatientId("");
    setPatientAge("");
    setGender("");
    setError("");
  }}
>
  New Analysis
</button>
  </div>
)}
        </div>
      </main>
    </div>
  );
}

export default Home;