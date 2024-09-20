package io.synker.data;

import io.synker.api.User;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.List;

// DAO for User
public interface UserDao {

    @SqlUpdate("CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100))")
    void createTable();

    @SqlUpdate("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)")
    void insertUser(@Bind("name") String name, @Bind("email") String email, @Bind("password") String password);

    @SqlQuery("SELECT * FROM users")
    @RegisterBeanMapper(User.class)
    List<User> getAllUsers();
}

