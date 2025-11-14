# ⏳ chronosFX: Lightweight Date & Time Utilities

> A clean, modern, and dependency-free **JavaScript date & time utility library**.  
> Format dates, compare timestamps, calculate day differences, and generate human-friendly relative times — all in a tiny package.

---

## 📌 Status & Badges

[![npm](https://img.shields.io/badge/npm-chronosfx-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/package/chronosfx)
[![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Size](https://img.shields.io/badge/Package_Size-2KB-green)]()
[![Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen)]()

---

## 📖 About chronosFX

**chronosFX** is a lightweight, beginner-friendly, and dependency-free **date & time utility library** written using pure JavaScript ES Modules.

It provides essential utilities like:

- Date formatting
- Time formatting
- Human-readable “time ago”
- Adding / subtracting days
- Checking valid dates
- Converting dates to ISO format
- Calculating the number of days between two dates

No dependencies.  
Super lightweight.  
Perfect for any JavaScript/Node.js project.

---

## ✨ Example Output

```js
import chronos from "chronosfx";

chronos.formatDate("2025-11-14");
// "14 Nov 2025"

chronos.timeAgo(Date.now() - 60000);
// "1 minutes ago"

chronos.addDays("2025-11-14", 10);
// "2025-11-24"
```

## 🚀 Features

- 🗓 **Format Dates** → `"14 Nov 2025"`
- ⏱ **Format Time** → `"06:22 PM"` / `"18:22"`
- 🔁 **Time Ago** → `"5 minutes ago"`
- ➕ **Add Days** → `"2025-11-21"`
- 🔍 **Validate Date Inputs**
- 🔢 **Days Between Two Dates**
- 🔗 **Convert to ISO Format**
- ⚡ **Get Current Timestamp**
- 🟢 **Zero Dependencies**
- 📦 **Tiny & Fast**
- 🧑‍💻 **Easy to Understand Code**

---

## 📦 Installation

### Using npm

```bash
npm install chronosfx
```

### Using pnpm

```bash
pnpm add chronosfx
```

### Using yarn

```bash
yarn add chronosfx
```

---

### 📚 Usage

## ✔ ES Module Import

```js
import chronos from "chronosfx";

console.log(chronos.formatTime("2025-11-14T18:30:00"));
// "06:30 PM"
```

## ✔ Named Import

```js
import { addDays, timeAgo } from "chronosfx";

addDays("2025-11-14", 7);
// "2025-11-21"

timeAgo(Date.now() - 3000);
// "3 seconds ago"
```

## 🛠 API Reference

### `isValidDate(input)`

Checks if the input is a valid date.

- **Example:**

  - **Input:** `"2025-02-30"`

  - **Returns:** `false`

---

### `formatDate(input)`

Returns `"DD Mon YYYY"`.

- **Example:**

  - **Input:** `"2025-11-20"`

  - **Returns:** `"20 Nov 2025"`

---

### `formatTime(input, { hour12: true })`

Formats time in **12-hour** or **24-hour** format.

- **Example:**

  - **Input:** `new Date("2025-11-20T14:30:00")`, `{ hour12: true }`

  - **Returns:** `"02:30 PM"`

---

### `getCurrentTimestamp()`

Returns the **current timestamp** in milliseconds.

- **Example:**

  - **Input:** (none)

  - **Returns:** `1732085400000` (value will vary)

---

### `toISO(input)`

Converts any valid date to an **ISO formatted string**.

- **Example:**

  - **Input:** `new Date("2025-11-20T14:30:00Z")`

  - **Returns:** `"2025-11-20T14:30:00.000Z"`

---

### `addDays(input, days)`

Adds days and returns a formatted date: `"YYYY-MM-DD"`.

- **Example:**

  - **Input:** `"2025-11-20"`, `10`

  - **Returns:** `"2025-11-30"`

---

### `daysBetween(a, b)`

Returns the **number of days** between two dates.

- **Example:**

  - **Input:** `"2025-11-20"`, `"2025-11-30"`

  - **Returns:** `10`

---

### `timeAgo(input)`

Returns human-readable relative time such as:

- `"just now"`

- `"5 minutes ago"`

- `"yesterday"`

- **Example:**

  - **Input:** `1731590100000` (a timestamp from 5 minutes ago)

  - **Returns:** `"5 minutes ago"`

---

### 📂 Project Structure

```bash
chronosfx/
├── index.js         # Main ES module code
├── package.json     # Package metadata
├── README.md        # Documentation
└── LICENSE          # MIT License
```

---

## 🛠 Development & Contribution

### 🧹 Code Style

- Pure **ES Modules** (no CommonJS)
- Beginner-friendly, easy-to-read code
- Uses **no external libraries**
- Lightweight and clean utility functions

---

### 🤝 Contributing

1. **Fork** the repository
2. Create a new branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add new feature"
   ```
4. Push and open a PR

## 📝 License

This project is licensed under the **MIT License** — free for personal and commercial use.

---

## 👨‍💻 Author

**Rohit Pakhre**  
Creator of **chronosFX**
