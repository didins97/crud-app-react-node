CREATE TABLE `todo` (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN,
    priority ENUM('low', 'medium', 'high') DEFAULT 'low',
    status ENUM('active', 'completed') DEFAULT 'active'
)

INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy milk', false, 1, 1);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy eggs', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy bread', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy cheese', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy butter', true);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy milk', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy eggs', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy bread', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy cheese', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy butter', true);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy milk', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy eggs', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy bread', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy cheese', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy butter', true);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy milk', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy eggs', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy bread', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy cheese', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy butter', true);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy milk', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy eggs', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy bread', false);
INSERT INTO `todo` (title, completed, priority, status) VALUES ('Buy cheese', false);
