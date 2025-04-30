# 🧩 Pull Request: Database Schema Design for Event Coordination and Planning CMS

## 📚 Description

This PR introduces the initial database schema design for the **Event Coordination and Planning using CMS** project. The schema includes core tables and attributes to support user roles, event management, organizer functions, and admin controls.

## 🏗️ Schema Tables Designed

### 1. `users`

Handles all system users with roles (participant, organizer, admin).

- `user_id` (PK, AI)
- `name`, `email`, `password`
- `role`
- `created_at`

### 2. `organizer_profiles`

Extended profile for organizers.

- `organizer_id` (FK to users)
- `organization`, `bio`, `contact_number`

### 3. `admin_logs` (optional)

Logs admin actions for auditing.

- `log_id`, `admin_id`, `action`, `timestamp`

### 4. `events`

Main event data table.

- `event_id`, `title`, `description`, `category`, `tags`
- `event_date`, `start_time`, `end_time`, `location`
- `organizer_id` (FK), `max_participants`, `status`, `banner_url`
- `created_at`

### 5. `registrations`

Tracks user registrations for events.

- `registration_id`, `event_id`, `user_id`
- `registered_at`, `status`

## 🧠 Rationale

- Ensures clear separation of user roles and responsibilities.
- Supports extendable event types and filters.
- Enables integration with CMS and future scalability.

## ✅ Checklist

- [x] Follows naming conventions
- [x] Supports normalization and relationships
- [x] Includes foreign key constraints
- [x] Covers first 4 core modules
- [ ] Future-proof for feedback, feedback replies, and notifications (to be added later)

## 🚧 Next Steps

- Create migration scripts
- Design ER diagram
- Add sample seed data for testing

---

Please review and suggest any improvements to the schema design or relationships.
