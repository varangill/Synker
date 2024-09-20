package io.synker.data;

import io.synker.api.User;

import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import java.util.List;

public interface UserDao {

    @SqlUpdate("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)")
    @GetGeneratedKeys
    int insertUser(@Bind("name") String name, @Bind("email") String email, @Bind("password") String password);

    @SqlQuery("SELECT * FROM users WHERE id = :id")
    @RegisterBeanMapper(User.class)
    User findById(@Bind("id") int id);

    @SqlQuery("SELECT * FROM users")
    @RegisterBeanMapper(User.class)
    List<User> getAllUsers();
}

