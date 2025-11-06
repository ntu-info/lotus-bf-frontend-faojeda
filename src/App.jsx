
import { Terms } from "./components/Terms";
import { QueryBuilder } from "./components/QueryBuilder";
import { Studies } from "./components/Studies";
import { Locations } from "./components/Locations";
import { NiiViewer } from "./components/NiiViewer";
import './App.css';

function App() {
  return (
    <div className="app-shell">
      {/* top / hero */}
      <header className="hero">
        <div>
          <p className="eyebrow">LoTUS-BF · NTU</p>
          <h1>Semantic & location-based brain search</h1>
          <p className="subtitle">
            Build a query from terms, inspect the returned studies, and view the
            NIfTI map — all in one workspace.
          </p>
        </div>
        <div className="hero-pill">
          <p className="hero-pill-title">Fabiana · 2025</p>
          <p className="hero-pill-text">Frontend showcase</p>
        </div>
      </header>

      {/* main layout */}
      <div className="page-grid">
        {/* left column */}
        <aside className="column column-left">
          <div className="panel">
            <div className="panel-header">
              <h2>Terms</h2>
              <p>Browse / search controlled vocabulary</p>
            </div>
            <Terms />
          </div>
          <div className="panel">
            <div className="panel-header">
              <h2>Query builder</h2>
              <p>Combine terms using AND / OR / NOT</p>
            </div>
            <QueryBuilder />
          </div>
        </aside>

        {/* center = viewer */}
        <main className="column column-center">
          <div className="panel viewer-panel">
            <div className="panel-header row-between">
              <div>
                <h2>Brain map</h2>
                <p>Rendered NIfTI from LoTUS-BF</p>
              </div>
              <span className="badge badge-green">live</span>
            </div>
            <div className="viewer-shell">
              <NiiViewer />
            </div>
          </div>
        </main>

        {/* right column */}
        <aside className="column column-right">
          <div className="panel">
            <div className="panel-header">
              <h2>Studies</h2>
              <p>Publications matching your query</p>
            </div>
            <Studies />
          </div>
          <div className="panel floating-panel">
            <div className="panel-header">
              <h2>Locations</h2>
              <p>MNI / voxel space details</p>
            </div>
            <Locations />
          </div>
          <div className="mini-card">
            <p className="mini-title">Tip</p>
            <p className="mini-text">
              Try combining an anatomical term with a clinical term to see
              narrower results.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
