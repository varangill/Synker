package io.synker.resources;

import io.synker.api.Profile;
import io.synker.api.User;
import io.synker.data.ProfileDao;
import io.synker.data.UserDao;

import org.mindrot.jbcrypt.BCrypt;
import org.jdbi.v3.core.Jdbi;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    private final UserDao userDao;
    private final ProfileDao profileDao;

    public UserResource(Jdbi jdbi) {
        this.userDao = jdbi.onDemand(UserDao.class);
        this.profileDao = jdbi.onDemand(ProfileDao.class);
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
        profileDao.insertProfile(userId);


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

        Map<String, Boolean> resBody = new HashMap<>();
        if (BCrypt.checkpw(inputPassword, storedPassword)) {
            resBody.put("authenticated", true);
            return Response.status(Response.Status.OK).entity(resBody).build();
        }

        resBody.put("authenticated", false);
        return Response.status(Response.Status.UNAUTHORIZED).entity(resBody).build();
    }

    // Update an existing user
    @PATCH
    @Path("/{id}")
    public Response updateUser(@PathParam("id") int id, User user) {
        String hashedPassword = user.getPassword() != null
                ? BCrypt.hashpw(user.getPassword(), BCrypt.gensalt())
                : null;

        userDao.updateUser(id, hashedPassword, user.getBirthday());

        return Response.ok().build();
    }

    @PATCH
    @Path("/{id}/profile")
    public Response updateProfile(@PathParam("id") int id, Profile profile) {
        profile.setUserId(id);
        profileDao.updateProfile(profile);
        return Response.ok().build();
    }
}
