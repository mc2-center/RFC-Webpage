import React, { useState } from 'react';
import './App.css';
import mc2Image from './MC2Logo.png'; // Update the path to your image file

function App() {
  const [comments, setComments] = useState(["", "", "", ""]);
  const [newAttributes, setNewAttributes] = useState([{
    name: "",
    description: "",
    values: "",
    validation: "",
    useCases: ""
  }]);

  const [showCommentHelp, setShowCommentHelp] = useState(false);
  const [showAttributeHelp, setShowAttributeHelp] = useState(false);

  const handleCommentChange = (index, value) => {
    const newComments = [...comments];
    newComments[index] = value;
    setComments(newComments);
  };

  const handleAttributeChange = (index, field, value) => {
    const newAttributesList = [...newAttributes];
    newAttributesList[index][field] = value;
    setNewAttributes(newAttributesList);
  };

  const handleAddAttribute = () => {
    setNewAttributes([
      ...newAttributes,
      { name: "", description: "", values: "", validation: "", useCases: "" }
    ]);
  };

  const handleSubmit = () => {
    console.log("Submitted comments:", comments);
    alert("Comments submitted successfully!");
  };

  const handleSubmitAttributes = () => {
    console.log("Suggested new attributes:", newAttributes);
    alert("New attributes suggested successfully!");
  };

  return (
    <div className="App">
      {/* Embedding the image */}
      <div>
        <img src={mc2Image} alt="MC2 Data Model" style={{ width: '50%', height: 'auto' }} />
      </div>

      {/* Embedding the iframe */}
      <div className="iframe-container">
        <iframe
          src="https://mc2-center.github.io/schema_visualization/"
          title="Schema Visualization"
          width="100%"
          height="500px"
          style={{ border: 'none' }}
        />
      </div>

      {/* Contribute Comments Table */}
      <div className="table-container">
        <div className="table-header" onClick={() => setShowCommentHelp(!showCommentHelp)}>
          <h2>Contribute Comments</h2>
          <span className="collapsible-toggle">{showCommentHelp ? '-' : '+'}</span>
        </div>
        {showCommentHelp && (
          <div className="collapsible-content">
            <p>To contribute comments, please enter your feedback in the input boxes provided under each attribute. Once you have filled out your comments, click the "Submit comments" button to send your feedback.</p>
          </div>
        )}
        <table className="styled-table">
          <thead>
            <tr>
              <th>Attribute Name</th>
              <th>Attribute Description</th>
              <th>Attribute Values</th>
              <th>Attribute Validation Rules</th>
              <th>Attribute Use Cases</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, index) => (
              <tr key={index}>
                <td>Attribute {index + 1}</td>
                <td>Description {index + 1}</td>
                <td>Value {index + 1}</td>
                <td>Validation {index + 1}</td>
                <td>Use Case {index + 1}</td>
                <td>
                  <input
                    type="text"
                    value={comments[index]}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-group">
          <button onClick={handleSubmit}>Submit comments</button>
        </div>
      </div>

      {/* Suggest a New Attribute Table */}
      <div className="table-container">
        <div className="table-header" onClick={() => setShowAttributeHelp(!showAttributeHelp)}>
          <h2>Suggest a New Attribute</h2>
          <span className="collapsible-toggle">{showAttributeHelp ? '-' : '+'}</span>
        </div>
        {showAttributeHelp && (
          <div className="collapsible-content">
            <p>To suggest a new attribute, please fill out the fields for the new attribute you would like to add. Once you have entered all necessary details, click the "Suggest a new attribute" button to add another row to the table. After completing your suggestions, click the "Submit attributes" button to send your suggestions.</p>
          </div>
        )}
        <table className="styled-table">
          <thead>
            <tr>
              <th>Attribute Name</th>
              <th>Attribute Description</th>
              <th>Attribute Values</th>
              <th>Attribute Validation Rules</th>
              <th>Attribute Use Cases</th>
            </tr>
          </thead>
          <tbody>
            {newAttributes.map((attr, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={attr.name}
                    onChange={(e) => handleAttributeChange(index, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={attr.description}
                    onChange={(e) => handleAttributeChange(index, 'description', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={attr.values}
                    onChange={(e) => handleAttributeChange(index, 'values', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={attr.validation}
                    onChange={(e) => handleAttributeChange(index, 'validation', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={attr.useCases}
                    onChange={(e) => handleAttributeChange(index, 'useCases', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-group">
          <button onClick={handleAddAttribute}>Suggest a new attribute</button>
          <button onClick={handleSubmitAttributes}>Submit attributes</button>
        </div>
      </div>
    </div>
  );
}

export default App;

