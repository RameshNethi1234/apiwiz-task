import EditableDiv from './components/EditableDiv';
import Toolbar from './components/ToolBar';

function App() {
  return (
    <div className="page">
      <div className="editor-container">
        <Toolbar />
        <EditableDiv />
      </div>
    </div>
  );
}

export default App;
