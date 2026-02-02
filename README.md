# **React Internship Assignment**

This project is a single-page React application built as part of the **React Developer Intern Assignment**.  
 It demonstrates core React concepts such as state management, side effects, form handling, UI synchronization, and component modularity.

---

## **Features Implemented**

### **Task 1 – Todo Application**

* Add, delete, and complete tasks

* Task priority (High / Medium / Low)

* Filter tasks (All / Active / Completed)

* Data persistence using LocalStorage

* Modular components (`TodoApp`, `TodoItem`, `FilterControls`)

### **Task 2 – Form Handling & Validation**

* Controlled form inputs (Name, Email, ID, Password)

* Inline validation with error messages

* Email validation using regex

* Show / Hide password toggle

* Display submitted data below the form

* Form reset after successful submission

### **Task 3 – Multi Input Progress Bar**

* Multiple numeric inputs (0–100)

* Main progress bar based on average value

* Individual sub-progress bars

* Input validation (auto-clamp values)

* Animated progress updates

* Dynamic color changes based on percentage

### **Task 4 – Advanced Countdown Timer**

* Configurable timer input (default 10 seconds)

* Start, Pause, Resume, Reset controls

* Millisecond-level precision

* Timer status display (Idle, Running, Paused, Completed)

* Prevents multiple timers

* Timer persistence using LocalStorage (resumes after refresh)

* “Time’s up\!” message on completion

### **Task 5 – Live Search with Highlighting**

* Search through a predefined list of names

* Case-insensitive filtering

* Highlight matching text (supports multiple matches)

* Display count of matching results

* “No matches found” message

---

## **Tech Stack**

* **React** (Vite)

* **Tailwind CSS v4**

* **JavaScript (ES6+)**

* **LocalStorage API**

---

## **Project Structure**

`src/`

`├── components/`

`│   ├── Todo/`

`│   │   ├── TodoApp.jsx`

`│   │   ├── TodoItem.jsx`

`│   │   └── FilterControls.jsx`

`│   ├── Forms/`

`│   │   └── UserForm.jsx`

`│   ├── Progress/`

`│   │   └── MultiProgressBar.jsx`

`│   ├── Timer/`

`│   │   └── CountdownTimer.jsx`

`│   └── Search/`

`│       └── SearchList.jsx`

`├── App.jsx`

`├── main.jsx`

`└── index.css`

---

## **Setup & Run Locally**

### **Prerequisites**

* **Node.js**: v18 or higher

* **npm**: v9 or higher

### **Installation Steps**

`git clone <your-github-repo-url>`

`cd react-intern-assignment`

`npm install`

### **Start Development Server**

`npm run dev`

The application will be available at:

`http://localhost:5100`

---

## **Assumptions Made**

* The application is frontend-only (no backend integration)

* LocalStorage is sufficient for persistence

* Styling is kept minimal but responsive and readable

* Focus is on functionality, logic clarity, and modularity

---

## **Limitations / Trade-offs**

* No authentication or backend data storage

* UI kept intentionally simple (no external UI frameworks)

* Data resets if LocalStorage is cleared

---

## **Code Quality Highlights**

* Reusable, modular components

* Clean and readable JSX

* Meaningful variable and function naming

* Proper cleanup of timers to avoid memory leaks

* Responsive layout using CSS Grid

---

## **Author**

**Bonaboina Gowtham**  
React Developer Intern Candidate

#
