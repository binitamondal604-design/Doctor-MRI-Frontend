import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of recent MRI analyses</p>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Total Analyses</h3>
            <p>24</p>
          </div>

          <div className="dashboard-card">
            <h3>Tumor Detected</h3>
            <p>8</p>
          </div>

          <div className="dashboard-card">
            <h3>No Tumor</h3>
            <p>16</p>
          </div>
        </div>

        <section className="history-section">
          <h2>Recent Analysis History</h2>

          <div className="history-table">
            <div className="history-row history-header">
              <span>Patient</span>
              <span>Patient ID</span>
              <span>Result</span>
              <span>Confidence</span>
            </div>

            <div className="history-row">
              <span>Rahul Sharma</span>
              <span>PT001</span>
              <span className="tumor-result">Tumor Detected</span>
              <span>94%</span>
            </div>

            <div className="history-row">
              <span>Ananya Das</span>
              <span>PT002</span>
              <span className="normal-result">No Tumor</span>
              <span>97%</span>
            </div>

            <div className="history-row">
              <span>Arjun Roy</span>
              <span>PT003</span>
              <span className="tumor-result">Tumor Detected</span>
              <span>91%</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;