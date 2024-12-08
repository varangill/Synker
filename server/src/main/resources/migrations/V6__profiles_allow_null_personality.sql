ALTER TABLE profiles
    MODIFY personality_one TINYINT UNSIGNED NULL CHECK (personality_one BETWEEN 1 AND 10 OR personality_one IS NULL),
    MODIFY personality_two TINYINT UNSIGNED NULL CHECK (personality_two BETWEEN 1 AND 10 OR personality_two IS NULL),
    MODIFY personality_three TINYINT UNSIGNED NULL CHECK (personality_three BETWEEN 1 AND 10 OR personality_three IS NULL),
    MODIFY personality_four TINYINT UNSIGNED NULL CHECK (personality_four BETWEEN 1 AND 10 OR personality_four IS NULL);