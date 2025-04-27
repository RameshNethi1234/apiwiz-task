function Toolbar() {
    const formatText = (command) => {
      document.execCommand(command, false, null);
    };
  
    return (
      <div className="toolbar">
        <button onClick={() => formatText('bold')}>Bold</button>
        <button onClick={() => formatText('italic')}>Italic</button>
        <button onClick={() => formatText('underline')}>Underline</button>
      </div>
    );
  }
  
  export default Toolbar;
  