# Password Generator App

A React application that allows users to select password requirements using checkboxes.

Password Generator App is a tool designed to help users generate secure and customizable passwords. The app provides a simple interface where users can generate passwords with varying lengths and complexity, including numbers, symbols, and lowercase letters. It also allows users to copy the generated password with just one click.

Key features of the app:

Customizable Password Length:

The password length can be adjusted using a range slider (from 8 to 22 characters). This gives users control over how long or short their password should be.
Password Complexity Options:

Include Numbers: Users can choose to add numbers to their password.
Include Symbols: Users can choose to add special characters such as @, #, and \* to their password.
Include Lowercase Letters: Users can choose to include lowercase letters in the generated password.
All of these options make it easy to customize the strength of the password.
Real-Time Password Generation:

The password is generated automatically in real-time based on the selected options. Whenever any of the settings (length, numbers, symbols, or lowercase letters) are changed, the password is updated instantly.
One-Click Copy:

Once the password is generated, users can copy the password to the clipboard with a simple button click. After the password is copied, the button text changes from "Copy" to "Copied!" as a confirmation, and reverts back after a short delay.
React Hooks and State Management:

The app uses React's useState for managing the state of the password, settings (e.g., whether numbers, symbols, or lowercase letters should be included), and the input range for password length.
The useEffect hook is used to re-generate the password whenever any of the settings are changed.
The useRef hook is used to control the "Copy" button and update its text content after copying the password.
Responsive Layout:

The app features a clean and responsive layout, ensuring that the user experience is smooth across different screen sizes.
Memoized Password Generation:

The GeneratePassword function is wrapped in a useCallback hook to avoid unnecessary re-renders. This ensures optimal performance, especially when dealing with state changes.
Styling:

The app is styled using external CSS, making it visually appealing with color-coded sections, clearly labeled controls, and a user-friendly interface.

# How It Works:

Range Slider: Adjust the range slider to set the desired length for your password (from 8 to 22 characters).

Checkboxes: Enable or disable options for numbers, symbols, and lowercase letters to customize the generated password.

Generated Password: The password appears in a read-only input field. Click the "Copy" button to copy the password to your clipboard.

Copy Feedback: After clicking "Copy," the button text changes to "Copied!" for a brief moment, providing feedback to the user.

# Getting Started

To get started with this project, follow these steps:

Prerequisites
Node.js (version 14 or higher)
npm (version 6 or higher)
React (version 17 or higher)
Installation
Clone the repository: git clone https://github.com/your-username/your-repo-name.git
Install dependencies: npm install
Start the application: npm start
Project Structure
public/: Public assets, such as index.html and favicon.ico
src/: Source code for the application
components/: React components
containers/: React containers
actions/: Action creators for state management
reducers/: Reducers for state management
index.js: Entry point for the application
Components
PasswordRequirementsForm.js: The main form component that renders the checkboxes
Checkbox.js: A reusable checkbox component
