## 🚀 Installation Instructions

> ⚠️ **WARNING 1:** Not following **any** of the steps correctly may result in a **broken installation**, requiring a **complete Node.js and bot reinstallation**.
> ⚠️ **WARNING 2:** On **Windows**, **do NOT run or install** the bot as Administrator — this may **corrupt files** and force you to reinstall the bot.


### 📦 Step 1: Install Node.js (Version 18.20.04 Required)

* You must install **Node.js 18.20.04**.
* During installation, **check the box for "Extra Tools"**. Do **not** skip any installation pages.

#### 🔗 Download Node.js:

* **Windows:** [Download from NodeJS website](https://nodejs.org/en) → Choose **v18.20.04**
* **Linux:** Install via [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) → Then select **v18.20.04**
* **macOS:** Install via [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) → Then select **v18.20.04**


### 📥 Step 2: Clone the Repository

* Go to the View Bot’s GitHub page.
* Click the **blue "Code" button**, then choose **"Download ZIP"**.
* Unzip the folder if necessary.


### 🛠️ Step 3: Install Dependencies

Run the installation script based on your OS:

* **Windows:**

  ```bash
  install.bat
  ```

* **Linux & macOS:**

  ```bash
  ./install.sh
  ```


### ▶️ Step 4: Running the Bot

#### 🖥️ Option A: Run with UI Application

* **Windows:**

  ```bash
  run.bat
  ```

* **Linux & macOS:**

  ```bash
  ./headless_run.sh
  ```

#### 🌐 Option B: Run Headlessly (Web-Controlled)

* **Windows:**

  ```bash
  headless_run.bat
  ```

* **Linux & macOS:**

  ```bash
  ./headless_run.sh
  ```


### 🌍 Accessing the Bot Interface

Once running, control the bot via your browser:

* [http://127.0.0.1:6554](http://127.0.0.1:6554) (Local machine)
* Or:
  `http://<ip_of_your_machine>:6554` (If running remotely)
