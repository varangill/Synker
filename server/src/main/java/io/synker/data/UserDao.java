package io.synker.data;

import io.synker.api.User;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.List;

public interface UserDao {

    @SqlUpdate("INSERT INTO users (id, name, email, password, birthdate) VALUES (:id, :name, :email, :password, :birthdate)")
    void createUser(@Bind("id") String id, @Bind("name") String name, @Bind("email") String email, @Bind("password") String password, @Bind("birthdate") String birthdate);

    @SqlQuery("SELECT * FROM users WHERE id = :id")
    User getUserById(@Bind("id") String id);

    @SqlQuery("SELECT * FROM users")
    List<User> getAllUsers();
}

