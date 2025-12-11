# Kushtia City Directory
Mobile-Responsive Community & Geo-Data Aggregator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/kushtia/city-directory/main.svg?style=flat-square)](https://travis-ci.org/kushtia/city-directory)
[![Code Coverage](https://img.shields.io/codecov/c/github/kushtia/city-directory/main.svg?style=flat-square)](https://codecov.io/gh/kushtia/city-directory)

---

## 📖 Description

The **Kushtia City Directory** is a vital, mobile-responsive community resource platform designed to aggregate and categorize essential local geographical and service data within the Kushtia administrative area (Thana/Upazila). Built on the modern Next.js framework for a blazing-fast frontend and robust Node.js/Express API for data management, this platform acts as a centralized hub for residents and visitors.

The core mission is to provide instantaneous access to critical information, including locations of emergency services (Police Stations, Fire Services), verified directories of life-saving resources (Blood Donors), and structured listings of local commercial establishments and service providers. This dual-stack application ensures high performance, maintainability, and scalability.

## 🚀 Key Features

This project utilizes a powerful micro-service approach where the Next.js frontend consumes data served efficiently by the custom Node.js/Express API connected to MongoDB.

### Data Aggregation & Service Features

*   **Geo-Data Indexing:** Precise mapping and location data for key infrastructure (e.g., Police Thana locations, Hospitals, Public Utility Offices).
*   **Emergency Service Locator:** Fast and filterable search functionality for nearby critical services.
*   **Verified Blood Donor Registry:** A comprehensive, searchable database of registered volunteer blood donors, filterable by blood type and proximity.
*   **Local Business Directory (Shop Location):** Categorized listings of local shops, restaurants, and professional services, enhanced with contact details and operational hours.
*   **Mobile-First Design (Tailwind CSS):** Ensures a seamless and highly responsive user experience across all devices, prioritizing speed and accessibility on mobile networks.

### Technical & Architectural Features

*   **Server-Side Rendering (SSR) / Static Site Generation (SSG):** Leverages Next.js capabilities for optimal SEO performance and faster initial load times.
*   **RESTful API:** A clean, versioned API built with Express.js ensuring secure and standardized data delivery.
*   **Centralized Database (MongoDB):** Flexible schema structure ideal for handling diverse location and directory data.
*   **Custom Filtering and Search:** Advanced query system for filtering data based on categories, administrative zones, and keywords.

## 🛠️ Installation

This project requires simultaneous setup for both the frontend (`client/`) and the backend (`server/`). Ensure you have the necessary prerequisites installed before proceeding.

### Prerequisites

*   [Node.js (LTS recommended)](https://nodejs.org/)
*   [npm or Yarn](https://classic.yarnpkg.com/en/docs/install/)
*   [MongoDB Instance](https://www.mongodb.com/try/download/community) (Local or Cloud Atlas)
*   [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Step 1: Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/yourusername/kushtia-city.git
cd kushtia-city
```

### Step 2: Backend Setup (Node.js/Express API)

Navigate to the `server` directory and install dependencies.

```bash
cd server
npm install
# or
# yarn install
```

#### Backend Environment Configuration

Create a file named `.env` in the `server` directory and populate it with your configuration details:

```bash
touch .env
```

**Content of `server/.env`:**

```env
PORT=5000
NODE_ENV=development
MONGO_URI="mongodb://localhost:27017/kushtia_city_db"
# If using JWT for Admin authentication
JWT_SECRET="your_strong_api_secret_key"
```

### Step 3: Frontend Setup (Next.js)

Navigate back to the root directory and then into the `client` directory. Install dependencies.

```bash
cd ../client
npm install
# or
# yarn install
```

#### Frontend Environment Configuration

Create a file named `.env.local` in the `client` directory. This tells the Next.js application where to find the running API server.

```bash
touch .env.local
```

**Content of `client/.env.local`:**

```env
# The URL where the backend API is running
NEXT_PUBLIC_API_URL="http://localhost:5000/api/v1"

# Example of a mapping service key (if used for displaying maps)
NEXT_PUBLIC_MAP_SERVICE_KEY="your_map_api_key_optional"
```

## ▶️ Getting Started (Usage)

To run the full application, you must start both the backend API and the frontend development server simultaneously.

### 1. Start the Backend API Server

Navigate to the `server` directory and execute the start script.

```bash
cd server
npm run dev
```

The API should now be running, typically accessible at `http://localhost:5000`.

### 2. Start the Frontend Development Server

Open a **new terminal tab or window**. Navigate to the `client` directory and execute the start script.

```bash
cd client
npm run dev
```

The Next.js application will compile and start, typically accessible at `http://localhost:3000`.

### Accessing the Application

Open your web browser and navigate to:

```
http://localhost:3000
```

The application is now fully operational, fetching data from the local API server.

---


## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

We are actively seeking contributions in data verification, UI improvements, and API stability enhancements.

### Guidelines for Contribution

1.  **Fork the Project:** Start by forking the `kushtia-city` repository.
2.  **Create your Feature Branch:**
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3.  **Install and Test Locally:** Ensure all tests pass and the application runs correctly after your changes.
4.  **Commit your Changes:** Write clear, descriptive commit messages.
    ```bash
    git commit -m 'feat: Add feature for filtering blood donors by area'
    ```
5.  **Push to the Branch:**
    ```bash
    git push origin feature/AmazingFeature
    ```
6.  **Open a Pull Request (PR):** Submit a pull request detailing the changes you made and the problem they solve.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```
Copyright (c) 2023 Kushtia City Development Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
