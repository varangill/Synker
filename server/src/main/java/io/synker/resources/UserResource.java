package io.synker.resources;

import io.synker.api.User;
import io.synker.data.UserDao;

import org.mindrot.jbcrypt.BCrypt;
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

    public UserResource(Jdbi jdbi) {
        this.userDao = jdbi.onDemand(UserDao.class);
    }

    // GET all users
    @GET
    public List<User> getUsers() {
        return userDao.getAllUsers();
    }

    // Create a new user
    @POST
    public Response createUser(User user) {
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);

        int userId = userDao.insertUser(user.getName(), user.getEmail(), user.getPassword());
        User newUser = userDao.findById(userId);

        return Response.status(Response.Status.CREATED).entity(newUser).build();
    }

    // Attempt logging in a user given name and password
    @POST
    @Path("/login")
    public Response loginUser(User user) {
        String email = user.getEmail();
        User storedUser = userDao.findByEmail(email);

        String inputPassword = user.getPassword();
        String storedPassword = storedUser.getPassword();


        if (BCrypt.checkpw(inputPassword, storedPassword)) {
            return Response.status(Response.Status.OK).build();
        }

        return Response.status(Response.Status.UNAUTHORIZED).build();
    }
}
