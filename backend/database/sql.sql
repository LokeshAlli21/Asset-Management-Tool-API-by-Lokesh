CREATE TABLE assets (
    id SERIAL PRIMARY KEY,
    asset_type VARCHAR(50) NOT NULL, -- e.g., 'laptop', 'monitor', 'license'
    serial_number VARCHAR(255) UNIQUE NOT NULL,
    model VARCHAR(255),
    purchase_date DATE,
    status VARCHAR(50) NOT NULL DEFAULT 'available', -- e.g., 'available', 'assigned', 'in_repair', 'retired'
    notes TEXT,
    assigned_to_user_id INT, -- NULL if not assigned, references users.id
    assignment_date DATE,
    FOREIGN KEY (assigned_to_user_id) REFERENCES users(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);


-- insert users
INSERT INTO users (name, email) VALUES
('Alice Johnson', 'alice.j@example.com'),
('Bob Smith', 'bob.s@example.com'),
('Charlie Brown', 'charlie.b@example.com');
