# FGPC-API
created a comprehensive API for managing magazines, texts, and photos, 

---

**Node.js API for Notifications, Banners, and Meetings Links**

This repository contains a Node.js and Express.js powered API designed for managing notifications, banners, and meetings links. It provides endpoints for adding, editing, and retrieving these resources, offering a seamless integration for web applications needing dynamic content management.

### Key Features:
- **Notifications Management:** Add, edit, and retrieve notifications dynamically.
- **Banner Display:** CRUD operations for banners to display important messages.
- **Meetings Links:** Store and manage links to meetings or events effortlessly.

### Technologies Used:
- **Node.js**: Runtime environment for server-side JavaScript execution.
- **Express.js**: Web application framework for Node.js, simplifying API development.
- **RESTful API**: Follows best practices for REST APIs, ensuring scalability and maintainability.
- **JSON Data Storage**: Utilizes JSON files for data storage, which are suitable for small-scale deployments.

### API Links
-**Notification**: https://fgpc-api.onrender.com/api/texts
-**Banner**: https://fgpc-api.onrender.com/api/photos
-**Meetings**: https://fgpc-api.onrender.com/api/links

### Getting Started:
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the server:**
   ```
   npm start
   ```

4. **API Endpoints:**
   - `POST /notifications`: Add a new notification.
   - `PUT /notifications/:id`: Update an existing notification.
   - `GET /notifications/:id`: Retrieve a notification by ID.
   - `POST /banners`: Create a new banner message.
   - `PUT /banners/:id`: Update an existing banner message.
   - `GET /banners/:id`: Retrieve a banner message by ID.
   - `POST /meetings`: Add a new meeting link.
   - `PUT /meetings/:id`: Update an existing meeting link.
   - `GET /meetings/:id`: Retrieve a meeting link by ID.

### Contribution:
Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you think would benefit the project.

---
