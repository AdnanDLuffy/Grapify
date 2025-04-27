# Grapify

A lightweight npm package for generating graphs based on user inputs. Easily create visual representations like percentage-based charts, bar graphs, or pie (under construction) charts with customizable options. Ideal for data visualization in Node.js applications.

## Features

- Generate **percentage-based charts**.
- Create **bar graphs** with customizable options.
- Support for **pie charts** (under development).
- Lightweight and easy to integrate into Node.js applications.

## Installation

Install Grapify using npm:

```bash
npm install grapify 
```

## Usage

```js 
const graph = require("grapify");

const resultingGraph = graph(2,100,{subjectArray:"English,Math"},{Marks:"100,100"});
console.log(resultingGraph);
```
# Output 

```json
[
  { subject: 'English', markPercentage: 100 },
  { subject: 'Math', markPercentage: 100 }
]
```


## Roadmap
- [x] Percentage-based charts
- [x] Bar graphs
- [] Pie charts (in progress)

### Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**:
   - Click the "Fork" button on the top right of this repository.
2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/AdnanDLuffy/Grapify.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature-or-bugfix-name
   ```
4. **Make your changes** and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
5. **Push your changes** to your fork:
   ```bash
   git push origin feature-or-bugfix-name
   ```
6. **Submit a Pull Request**:
   - Open a pull request from your branch to the `main` branch of this repository.
   - Provide a clear description of the changes and reference any relevant issues.

We appreciate your contributions and will review your pull request as soon as possible!

---

### Issues

If you encounter any bugs, have feature requests, or need assistance, please open an issue in the [Issues](https://github.com/AdnanDLuffy/Grapify/issues) section of this repository. Be sure to include:

- A clear description of the issue or feature request.
- Steps to reproduce the issue (if applicable).
- Any relevant screenshots or error logs.

Your feedback helps us improve!

---

### License

This project is licensed under the [MIT License](https://github.com/AdnanDLuffy/Grapify/blob/main/LICENSE). 

You are free to use, modify, and distribute this software under the terms of the MIT License. See the `LICENSE` file for more details.

---

