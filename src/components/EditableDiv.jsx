import { useEffect, useRef, useState } from 'react';

function EditableDiv() {
  const editorRef = useRef(null);
  const [showSlashCommands, setShowSlashCommands] = useState(false);
  const [showMentions, setShowMentions] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent && editorRef.current) {
      editorRef.current.innerHTML = savedContent;
    }
  }, []);

  const handleInput = (e) => {
    const text = e.target.innerText;

    if (text.endsWith('/')) {
      setShowSlashCommands(true);
    } else {
      setShowSlashCommands(false);
    }

    if (text.endsWith('@')) {
      setShowMentions(true);
    } else {
      setShowMentions(false);
    }

    localStorage.setItem('editorContent', editorRef.current.innerHTML);
  };

  const insertBlock = (blockType) => {
    if (!editorRef.current) return;
    const block = document.createElement('div');
    block.className = 'block-element';
    block.innerText = blockType === 'quote' ? 'New Quote Block' : 'New Code Block';
    editorRef.current.appendChild(block);
    setShowSlashCommands(false);
  };

  const insertMention = (userName) => {
    if (!editorRef.current) return;
    const span = document.createElement('span');
    span.className = 'mention';
    span.innerText = `@${userName}`;
    editorRef.current.appendChild(span);
    setShowMentions(false);
  };

  return (
    <div className="editor-wrapper">
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="editor"
        aria-label="Rich text editor"
        role="textbox"
      />
      
      {showSlashCommands && (
        <div className="dropdown">
          <button onClick={() => insertBlock('quote')}>Insert Quote</button>
          <button onClick={() => insertBlock('code')}>Insert Code Block</button>
        </div>
      )}

      {showMentions && (
        <div className="dropdown" style={{ left: '200px' }}>
          <button onClick={() => insertMention('JohnDoe')}>@Kohli</button>
          <button onClick={() => insertMention('JaneSmith')}>@Rohit</button>
        </div>
      )}
    </div>
  );
}

export default EditableDiv;
