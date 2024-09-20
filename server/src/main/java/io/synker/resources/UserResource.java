package io.synker.resources;

import io.synker.api.User;
import io.synker.data.UserDao;
import org.jdbi.v3.core.Jdbi;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    private final UserDao userDao;

    // Constructor where JDBI and DAO are initialized
    public UserResource(Jdbi jdbi) {
        this.userDao = jdbi.onDemand(UserDao.class);
    }

    // Endpoint to get all users
    @GET
    public List<User> getUsers() {
        return userDao.getAllUsers();
    }

    // Endpoint to create a new user
    @POST
    public Response createUser(User user) {
        userDao.insertUser(user.getName(), user.getEmail(), user.getPassword());

        return Response.status(Response.Status.CREATED).build();
    }
}
