CREATE TABLE profiles (
    user_id INT NOT NULL,
    description TEXT,
    profile_picture_url VARCHAR(2048),
    status VARCHAR(255),
    personality_one TINYINT UNSIGNED CHECK (personality_one BETWEEN 1 AND 10),
    personality_two TINYINT UNSIGNED CHECK (personality_two BETWEEN 1 AND 10),
    personality_three TINYINT UNSIGNED CHECK (personality_three BETWEEN 1 AND 10),
    personality_four TINYINT UNSIGNED CHECK (personality_four BETWEEN 1 AND 10),
    PRIMARY KEY (user_id),
    CONSTRAINT fk_profiles_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);