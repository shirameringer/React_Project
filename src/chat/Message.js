import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Message() {
  const massagesRef = useRef(null);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [listMassage, setListMassage] = useState([]);

  const addMassage = () => {
    if (inputValue.trim() !== "") { 
      setListMassage((prevArr) => [
        ...prevArr,
        { id: prevArr.length + 1, value: inputValue },
      ]);
      setInputValue(""); // Clear input field after adding message
    }
  };

  useEffect(() => {
    if (massagesRef.current) {
      massagesRef.current.scrollTop = massagesRef.current.scrollHeight;
    }
  }, [listMassage]);

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      {/* חלון הצ'אט */}
      <div 
        style={{
          height: "400px",  // הגובה הוגדל
          overflowY: "auto",
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px',
          backgroundColor: '#f1f1f1'
        }} 
        ref={massagesRef}
      >
        {listMassage.map((message) => (
          <div key={message.id} className={`d-flex ${message.id % 2 === 0 ? 'justify-content-start' : 'justify-content-end'} mb-2`}>
            <div 
              className="card p-2 rounded"
              style={{
                width: "auto",
                maxWidth: "60%",
                backgroundColor: message.id % 2 === 0 ? '#ffffff' : '#dcf8c6',
                border: message.id % 2 === 0 ? '1px solid #ccc' : '1px solid #007bff',
              }}
            >
              <div>{message.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* אזור הקלט */}
      <div className="d-flex justify-content-between mt-3" style={{ alignItems: 'center' }}>
        <input
          ref={inputRef}
          className="form-control"
          style={{ width: "80%" }}  // הוזז קטן יותר כדי לפנות מקום לכפתור
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="הקלד הודעה"
        />
        
        {/* כפתור שליחה - מלבן */}
        <Button 
          variant="primary" 
          onClick={addMassage} 
          style={{
            width: "15%",  // הרחבתי את רוחב הכפתור
            padding: '12px 20px',
            backgroundColor: '#007bff',
            border: '1px solid #007bff',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '5px'
          }}
        >
          שליחה
        </Button>
      </div>
    </div>
  );
}

export default Message;

