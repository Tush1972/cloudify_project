import React, { useState } from "react";
import Select from "react-select";
import "./App.css";

const App = () => {
  const initialOptions = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];

  const [rows, setRows] = useState([
    { id: 1, selectedOption1: null, selectedOptions2: [] },
  ]);

  const [options, setOptions] = useState(initialOptions);

  
  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, selectedOption1: null, selectedOptions2: [] }]);
  };

  
  const clearAllRows = () => {
    setRows([{ id: 1, selectedOption1: null, selectedOptions2: [] }]);
  };

  
  const handleSubmit = () => {
    console.log("Submitted Data:", rows);
    alert("Data submitted successfully! Check the console for details.");
  };

  
  const getAvailableOptions = (currentRowId) => {
    const selectedValues = rows
      .filter((row) => row.id !== currentRowId && row.selectedOption1)
      .map((row) => row.selectedOption1.value);
    return options.map((option) => ({
      ...option,
      isDisabled: selectedValues.includes(option.value),
    }));
  };

  
  const handleAddNewItem = (inputValue) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions([...options, newOption]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                {}
                <Select
                  options={getAvailableOptions(row.id)}
                  value={row.selectedOption1}
                  onChange={(selectedOption1) =>
                    setRows(
                      rows.map((r) =>
                        r.id === row.id ? { ...r, selectedOption1 } : r
                      )
                    )
                  }
                  placeholder="Select Option"
                  isClearable
                />
              </td>
              <td>
                {}
                <Select
                  components={{
                    DropdownIndicator: () => null,
                    ClearIndicator: () => null,
                  }}
                  value={row.selectedOptions2}
                  onChange={(selectedOptions2) =>
                    setRows(
                      rows.map((r) =>
                        r.id === row.id
                          ? { ...r, selectedOptions2 }
                          : r
                      )
                    )
                  }
                  placeholder="Select Options"
                  isMulti
                  options={[
                    ...options,
                    {
                      label: (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <input
                            type="text"
                            placeholder="Add new item"
                            style={{
                              border: "none",
                              borderBottom: "1px solid #ccc",
                              outline: "none",
                              marginRight: "8px",
                              padding: "4px",
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                handleAddNewItem(e.target.value);
                                e.target.value = "";
                              }
                            }}
                          />
                          <button
                            style={{
                              padding: "4px 8px",
                              backgroundColor: "#000",
                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                              borderRadius: "4px",
                            }}
                            onClick={(e) => {
                              const inputField = e.target.previousSibling;
                              handleAddNewItem(inputField.value);
                              inputField.value = "";
                            }}
                          >
                            Add
                          </button>
                        </div>
                      ),
                      value: "add_new_item",
                      isDisabled: true,
                    },
                  ]}
                />
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => setRows(rows.filter((r) => r.id !== row.id))}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <button onClick={addRow} className="action-btn">
          Add New Row
        </button>
        <button onClick={clearAllRows} className="action-btn" style={{ marginLeft: "10px" }}>
          Clear
        </button>
        <button onClick={handleSubmit} className="action-btn" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
