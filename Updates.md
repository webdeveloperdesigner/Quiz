# Welcome to the Quiz Application

<!-- Version: 0.0.7 -->
<!-- Note: Update the version number automatically after each commit -->

Below is a breakdown of each commit in the repository with details on which files were changed and a summary of the code or content modifications made. Note that the descriptions below are based on the diffs as seen in GitHub’s commit views:

---

### 1. Commit `7f519e9` – *Quiz v0.0.1*  
- **Date:** February 3, 2025  
- **Files Added (11 files):**  
  - **.github/workflows/evaluate.yml:** Contains a GitHub Actions workflow for evaluating the quiz (e.g. checking out the code, installing Node.js, installing dependencies, starting the server, waiting briefly, and running tests).  
  - **.gitignore:** A simple file to ignore the `node_modules` folder.  
  - **README.md:** A comprehensive project description, outlining objectives, structure, implementation steps, and evaluation criteria.  
  - **evaluate.js:** A script that tests the running server, the `/questions` endpoint, and that the frontend files are served properly.  
  - **package.json** and **package-lock.json:** Files setting up the Node.js project and its dependencies.  
  - **public/index.html:** The basic HTML file providing the structure for the quiz game UI.  
  - **public/script.js:** The initial JavaScript file intended to power the quiz functionality (initial placeholder code was present).  
  - **public/style.css:** The base CSS file with minimal styling.  
  - **questions.json:** A JSON file containing the quiz questions and answers.  
  - **server.js:** The Node.js server that serves the quiz application.  
- **Summary:** This commit sets up the entire project structure and introduces all the essential files that will be built upon in later commits.  

---

### 2. Commit `a8155c4` – *Quiz v0.0.1*  
- **Date:** February 3, 2025  
- **File Changed:**  
  - **public/script.js:**  
    - **Diff:** This commit removed 21 lines from the file.  
- **Summary:** The changes appear to be cleanup modifications—removing extra or placeholder lines from the initial JavaScript file to streamline the code base.  

---

### 3. Commit `abc7b96` – *Quiz v0.0.2*  
- **Date:** February 3, 2025  
- **Files Changed:**  
  - **public/script.js:**  
    - **Diff:** 21 lines were added.  
    - **Details:** The commit adds the main quiz functionality. It sets up an event listener for `DOMContentLoaded` that fetches quiz questions from the `/questions` endpoint, initializes variables (`index` and `score`), defines a function (`loadQuestion`) to display the current question and its options, and updates the UI when the quiz ends.  
  - **public/style.css:**  
    - **Diff:** 2 additions and 2 deletions.  
    - **Details:** Minor style adjustments were made—likely cleaning up comments or tweaking spacing and basic styling to complement the newly added JavaScript functionality.  
- **Summary:** This update transitions the project from a mere file scaffold into a functioning quiz game by implementing the core logic and adjusting the presentation.

---

### 4. Commit `d02cb58` – *Quiz v0.0.3*  
- **Date:** February 3, 2025  
- **File Changed:**  
  - **public/style.css:**  
    - **Diff:** 29 lines added and 3 lines deleted.  
    - **Details:** Major improvements to the CSS were introduced:
      - The body styling was enhanced with a new font (switching to 'Poppins'), a gradient background, and white text.
      - The quiz container (`#quiz-container`) received styling updates (adjusted width, padding, border-radius, and added a subtle box-shadow).
      - Button styles were refined (improved padding, font size, border radius, and visual feedback on hover).
- **Summary:** This commit improves the visual design and overall user interface by refining the CSS, which contributes to a more appealing quiz layout.

---

### 5. Commit `918f9b2` – *Quiz v0.0.4*  
- **Date:** February 3, 2025  
- **Files Changed:**  
  - **.github/workflows/evaluate.yml:**  
    - **Diff:** The workflow file was entirely removed (28 deletions).  
  - **public/index.html:**  
    - **Diff:** 6 changes (3 additions and 3 deletions).  
    - **Details:** Modifications here include removing duplicate or redundant elements (for example, duplicate `<div>`s or buttons) to clean up the HTML structure.
  - **public/style.css:**  
    - **Diff:** 1 addition; a minor style tweak was applied.
  - **questions.json:**  
    - **Diff:** 2 changes (1 addition and 1 deletion).  
    - **Details:** Likely a correction to the quiz questions—possibly removing a duplicate key or adjusting spacing.
- **Summary:** This commit focuses on refining the project structure by cleaning up the HTML and JSON data and, notably, removing the GitHub Actions workflow file (which is later re-added).

---

### 6. Commit `0d0e085` – *Quiz v0.0.4*  
- **Date:** February 3, 2025  
- **File Changed:**  
  - **.github/workflows/evaluate.yml:**  
    - **Diff:** 28 lines were added.
    - **Details:** The GitHub Actions workflow file was reintroduced with the same content as in the initial commit.  
- **Summary:** This commit restores the evaluation workflow file, ensuring that automated tests can run on pull requests.

---

### 7. Commit `c616b0f` – *Quiz v0.0.5*  
- **Date:** February 3, 2025  
- **File Changed:**  
  - **public/script.js:**  
    - **Diff:** 8 additions and 2 deletions.
    - **Details:** The JavaScript code is refined to fix the answer-checking logic. The original loop inside the button click handler is replaced with a single, correct check: when a user clicks an option, the code now correctly compares the selected option with the answer, increments the score if correct, then advances to the next question while updating the UI.
- **Summary:** This update fixes a logical error in the quiz functionality, ensuring that answer verification and score tracking work as intended.

---

### 8. Commit `685acf6` – *Quiz v0.0.6*  
- **Date:** February 4, 2025  
- **Files Changed:**  
  - **package.json** and **package-lock.json:**  
    - **Diff:** Significant updates (along with 646 additions overall in this commit), suggesting that new dependencies or script improvements were introduced.  
  - **public/script.js:**  
    - **Diff:** The quiz logic may have been further enhanced, although the precise changes aren’t fully detailed beyond the summary of additions and minor deletions.
- **Summary:** This commit represents a major update where dependency management is improved and further enhancements to the quiz logic are made. The large number of added lines indicates that new features, improvements, or refactoring (perhaps including error handling or additional functionality) have been introduced.
  
*Note:* The exact diff for some parts (e.g. the extensive changes in package files) isn’t fully broken down in the summary, but the commit overall signals a robust update to project dependencies and core script functionality.

---

### 9. Commit `048ffec` – *Quiz v0.0.7*  
- **Date:** February 6, 2025  
- **Files Changed:**  
  - **package.json:**  
    - **Diff:** 9 changes (5 additions and 4 deletions).  
    - **Details:** The file is updated to reflect new dependencies (for example, adding packages such as `dotenv` and `express`) or modified start scripts.
  - **public/index.html:**  
    - **Diff:** 17 changes (13 additions and 4 deletions).  
    - **Details:** The HTML layout is further refined. Duplicate elements (like multiple "Next" buttons) are removed or reorganized, and additional elements (such as a progress bar container) are added to enhance the user interface.
  - **public/script.js:**  
    - **Diff:** 17 changes (13 additions and 4 deletions).  
    - **Details:** The JavaScript is upgraded:
      - A new mechanism selects a subset of questions (using a `selectedQuestions` array).
      - A new function, `updateProgress()`, is added to adjust the width of a progress bar based on quiz progress.
      - The button click handler is updated to incorporate progress updates and, once the quiz finishes, a new UI is rendered that displays the score along with a restart button.
  - **public/style.css:**  
    - **Diff:** 126 changes (106 additions and 20 deletions).  
    - **Details:** A complete style overhaul is performed:
      - New fonts are imported (e.g. from Google Fonts).
      - The body background is updated to a dynamic gradient with refined spacing.
      - The quiz container is restyled with modern UI effects (such as blur, improved shadows, and rounded borders).
      - Buttons receive updated styles including hover animations, keyframe-based fade-ins, and interactive effects.
      - A new progress bar style is defined with transitions and a dynamic width change.
- **Summary:** This final commit in the series represents a comprehensive upgrade to the project:
  - It modernizes dependency management.
  - It refines the HTML structure for better usability.
  - It introduces new functionality (like progress tracking and a restart option) in the JavaScript.
  - It dramatically improves the visual design via a complete CSS refresh.
  
---

### Final Note

Each commit builds on the previous one—from setting up the initial project skeleton (v0.0.1), through iterative refinements and bug fixes (v0.0.2 and v0.0.3), to structural cleanups and workflow adjustments (v0.0.4), followed by logic fixes (v0.0.5), dependency and feature enhancements (v0.0.6), and finally, a comprehensive update that overhauls the user experience (v0.0.7).

For more in-depth per-commit details (including full diffs), you can review the commit history directly on GitHub at: [https://github.com/webdeveloperdesigner/Quiz/commits](https://github.com/webdeveloperdesigner/Quiz/commits).
