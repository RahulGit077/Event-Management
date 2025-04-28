# Event Coordination and Planning CMS - API Documentation

## Authentication Routes

| Method | Endpoint            | Description                          |
|:------:|:-------------------:|:------------------------------------:|
| POST   | `/api/auth/register` | Register a new user                  |
| POST   | `/api/auth/login`    | Login an existing user               |
| POST   | `/api/auth/logout`   | Logout the user                      |
| GET    | `/api/auth/me`       | Get current logged-in user info      |

---

## User Management

| Method | Endpoint            | Description                         |
|:------:|:-------------------:|:-----------------------------------:|
| GET    | `/api/users`         | Get all users (Admin only)           |
| GET    | `/api/users/:id`     | Get details of a specific user       |
| PUT    | `/api/users/:id`     | Update user profile                 |
| DELETE | `/api/users/:id`     | Delete a user (Admin only)           |

---

## Event Management

| Method | Endpoint              | Description                        |
|:------:|:---------------------:|:----------------------------------:|
| POST   | `/api/events`          | Create a new event (Admin/Manager) |
| GET    | `/api/events`          | List all events                   |
| GET    | `/api/events/:id`      | Get details of a specific event    |
| PUT    | `/api/events/:id`      | Update an event                   |
| DELETE | `/api/events/:id`      | Delete an event                   |

---

## Venue Management

| Method | Endpoint              | Description                        |
|:------:|:---------------------:|:----------------------------------:|
| POST   | `/api/venues`          | Add a new venue (Admin)            |
| GET    | `/api/venues`          | List all venues                   |
| GET    | `/api/venues/:id`      | View details of a specific venue   |
| PUT    | `/api/venues/:id`      | Update venue details              |
| DELETE | `/api/venues/:id`      | Delete a venue                    |

---

## Event Registration (RSVP)

| Method | Endpoint                      | Description                         |
|:------:|:-----------------------------:|:-----------------------------------:|
| POST   | `/api/events/:id/register`     | Register for an event               |
| GET    | `/api/events/:id/registrations`| Get all registrations for an event (Admin/Event Owner) |
| DELETE | `/api/events/:id/unregister`   | Unregister from an event            |

---

## Task and Schedule Management (Optional)

| Method | Endpoint                        | Description                          |
|:------:|:-------------------------------:|:------------------------------------:|
| POST   | `/api/events/:id/tasks`          | Add a task to an event               |
| GET    | `/api/events/:id/tasks`          | List all tasks for an event          |
| PUT    | `/api/tasks/:taskId`             | Update a specific task               |
| DELETE | `/api/tasks/:taskId`             | Delete a specific task               |

---

## File Uploads

| Method | Endpoint             | Description                         |
|:------:|:--------------------:|:-----------------------------------:|
| POST   | `/api/upload`         | Upload event images, PDFs, or docs  |

---

## Admin Dashboard APIs (Optional)

| Method | Endpoint                | Description                          |
|:------:|:-----------------------:|:------------------------------------:|
| GET    | `/api/admin/analytics`   | Fetch statistics (total users, events, upcoming events, etc.) |

---

##  Project Structure Overview
```plaintext
/routes
    auth.js
    users.js
    events.js
    venues.js
    registrations.js
    tasks.js
    uploads.js
/controllers
    authController.js
    userController.js
    eventController.js
    venueController.js
    registrationController.js
    taskController.js
    uploadController.js
/middlewares
    authMiddleware.js
    roleMiddleware.js
```

---

# Notes
- Role-based access control is highly recommended (`Admin`, `Event Manager`, `User`).
- Always validate inputs properly to ensure data integrity.
- Secure your APIs with proper authentication (JWT or OAuth).
- File uploads should be sanitized and validated.
