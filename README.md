# 📝 Todo List Application

A React-based Todo List application that allows users to create, manage, and organize daily tasks efficiently.  
Built using Create React App with a modular component structure.

---

## 📌 Features

- Add new todos
- Display list of todos
- Delete todos
- Component-based architecture
- Basic routing support (Contact / ContactMe pages)

---

## 🛠 Tech Stack

- **Frontend:** React (Create React App)
- **Styling:** CSS
- **Testing:** Jest + React Testing Library

---

## 📂 Project Structure

```
TODO-LIST/
│
├── node_modules/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Contact.js
│   │   ├── ContactMe.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── todoAdd.js
│   │   ├── TodoDisplay.js
│   │   └── Todos.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── App.test.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package.json
└── package-lock.json
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/your-username/TODO-LIST.git
```

### 2. Navigate to the Project Directory

```
cd TODO-LIST
```

### 3. Install Dependencies

```
npm install
```

### 4. Start Development Server

```
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 📖 Application Flow

1. User enters a task in the input field.
2. `todoAdd` component captures the input.
3. State is updated in the parent component.
4. `TodoDisplay` renders the updated list dynamically.
5. User can delete tasks from the list.

---

## 🧪 Running Tests

```
npm test
```

---

## 📌 Future Improvements

- Edit todo functionality
- Mark todos as completed
- Persist data using Local Storage
- Add filtering (All / Completed / Pending)
- Improve UI with a component library
- Deploy on Vercel / Netlify

---

## 📄 License

This project is developed for educational purposes.
