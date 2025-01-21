This project is a React-based implementation of a dynamic table with dropdowns that includes single-select and multi-select functionality. It also allows users to add new rows, clear all rows, and submit the selected data.

Features
Single Select Dropdown:

Each row has a single-select dropdown (Label 1).
Options selected in one row cannot be reselected in another row.
Multi-Select Dropdown:

Each row also contains a multi-select dropdown (Label 2).
Users can select multiple options for each row.
The dropdown includes an input field at the bottom to dynamically add new items to the options list.
Add New Row:

Users can add as many rows as needed using the "Add New Row" button.
Clear All Rows:

Clears all rows and resets the table to its initial state with one empty row.
Submit Button:

Submits the data from all rows and logs it to the console.
Displays a confirmation alert on successful submission.
Dynamic Option Validation:

Options already selected in the Label 1 dropdown are automatically disabled in other rows to prevent duplication.
Usage
Select options from the dropdown menus in each row.
Add additional rows using the "Add New Row" button.
Add custom items to the multi-select dropdown by typing in the input field at the bottom and pressing "Enter" or clicking the "Add" button.
Clear all rows using the "Clear" button.
Submit the current data using the "Submit" button, and check the console for logged data.

How It Works
Single Select (Label 1):

Options dynamically adjust based on selections in other rows.
Each option can only be selected once.
Multi-Select with Custom Options (Label 2):

Add new items directly within the dropdown.
Existing options and newly added items can both be selected.
Clear & Submit Buttons:

Clear: Resets all rows to the initial state.
Submit: Logs the current table data in the console for further processing.
Enhancements
Bonus Features
Dynamic Addition of Options: Custom options can be added to the multi-select dropdown.
Validation: Ensures no duplicate options are selected in Label 1.
Interactive Feedback: A confirmation alert appears on successful data submission.
Future Improvements
Add backend integration to save submitted data.
Improve styling for better responsiveness and accessibility.
Provide error handling for invalid or incomplete inputs.

Author
Developed by Tushar Arora.