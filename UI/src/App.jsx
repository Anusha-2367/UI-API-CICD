import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api-appservice.azurewebsites.net/api/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getEmployees = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      setEmployees(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to connect to API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.department} ${employee.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const onLeaveEmployees = employees.filter(
    (employee) => employee.status === "On Leave"
  ).length;

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">E</div>
          <div>
            <h2>EmployeeHub</h2>
            <span>Management Portal</span>
          </div>
        </div>

        <nav>
          <a className="nav-item active">
            <span>▦</span>
            Dashboard
          </a>

          <a className="nav-item">
            <span>♙</span>
            Employees
          </a>

          <a className="nav-item">
            <span>▤</span>
            Departments
          </a>

          <a className="nav-item">
            <span>◷</span>
            Attendance
          </a>

          <a className="nav-item">
            <span>⚙</span>
            Settings
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="user-avatar">AD</div>
          <div>
            <strong>Anusha</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Dashboard / Overview</p>
            <h1>Employee Dashboard</h1>
          </div>

          <div className="topbar-right">
            <button className="notification">🔔</button>
            <div className="profile">
              <div className="profile-avatar">AD</div>
              <div>
                <strong>Anusha Daredla</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <h2>Good morning, Anusha 👋</h2>
            <p>
              Here's what's happening with your organization today.
            </p>
          </div>

          <button className="refresh-btn" onClick={getEmployees}>
            ↻ Refresh Data
          </button>
        </section>

        {/* Statistics */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon employees-icon">♙</div>
            <div>
              <span>Total Employees</span>
              <h3>{employees.length}</h3>
              <small>Registered employees</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon active-icon">✓</div>
            <div>
              <span>Active Employees</span>
              <h3>{activeEmployees}</h3>
              <small>Currently working</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon leave-icon">◷</div>
            <div>
              <span> Leave</span>
              <h3>{onLeaveEmployees}</h3>
              <small>Currently unavailable</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon department-icon">▦</div>
            <div>
              <span>Departments</span>
              <h3>{departments}</h3>
              <small>Across organization</small>
            </div>
          </div>
        </section>

        {/* Employees */}
        <section className="employees-section">
          <div className="section-header">
            <div>
              <h2>Recent Employees</h2>
              <p>Employee information retrieved from Spring Boot API</p>
            </div>

            <div className="search-box">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {loading && (
            <div className="state-message">
              Loading employee data...
            </div>
          )}

          {error && (
            <div className="state-message error">
              {error}
              <button onClick={getEmployees}>Try Again</button>
            </div>
          )}

          {!loading && !error && (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>EMPLOYEE</th>
                    <th>DEPARTMENT</th>
                    <th>ROLE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <div className="employee-info">
                          <div className="employee-avatar">
                            {employee.name.charAt(0)}
                          </div>

                          <div>
                            <strong>{employee.name}</strong>
                            <span>EMP-{String(employee.id).padStart(4, "0")}</span>
                          </div>
                        </div>
                      </td>

                      <td>{employee.department}</td>

                      <td>{employee.role}</td>

                      <td>
                        <span
                          className={`status ${
                            employee.status === "Active"
                              ? "status-active"
                              : "status-leave"
                          }`}
                        >
                          <span className="status-dot"></span>
                          {employee.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredEmployees.length === 0 && (
                <div className="empty-message">
                  No employees found.
                </div>
              )}
            </div>
          )}
        </section>

        <footer>
          <span>EmployeeHub © 2026 | CICD Test</span>
          <span>Powered by React + Spring Boot + Azure</span>
        </footer>
      </main>
    </div>
  );
}

export default App;

