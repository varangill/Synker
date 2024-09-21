CREATE TABLE friendships (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_one INT NOT NULL,
    user_two INT NOT NULL,
    status ENUM('ACCEPTED', 'PENDING', 'NONE', 'BLOCKED') DEFAULT 'PENDING',
    requester INT,

    CONSTRAINT fk_user_one FOREIGN KEY (user_one) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_user_two FOREIGN KEY (user_two) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_requester FOREIGN KEY (requester) REFERENCES users(id) ON DELETE CASCADE,

    CONSTRAINT unique_friendship UNIQUE (user_one, user_two),
    CONSTRAINT check_requester CHECK (requester IN (user_one, user_two))
);