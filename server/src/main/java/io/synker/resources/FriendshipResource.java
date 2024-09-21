package io.synker.resources;

import io.synker.api.Friendship;
import io.synker.data.FriendshipDao;
import org.jdbi.v3.core.Jdbi;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/friendships")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class FriendshipResource {
    private final FriendshipDao friendshipDao;

    public FriendshipResource(Jdbi jdbi) {
        this.friendshipDao = jdbi.onDemand(FriendshipDao.class);
    }

    @POST
    public Response createFriendship(Friendship friendship) {
        friendship.setRequester(friendship.getUserOneId());
        int friendshipId = friendshipDao.createFriendship(friendship);
        return Response.status(Response.Status.CREATED).entity(friendshipId).build();
    }

    // Get a user's friends list
    @GET
    @Path("/{userId}")
    public List<Friendship> getUserFriendships(@PathParam("userId") int userId) {
        return friendshipDao.getFriendshipsForUser(userId);
    }

    // Get a specific friendship
    @GET
    @Path("/{userOneId}/{userTwoId}")
    public Response getFriendship(@PathParam("userOneId") int userOneId, @PathParam("userTwoId") int userTwoId) {
        Friendship friendship = friendshipDao.getFriendship(userOneId, userTwoId);
        if (friendship != null) {
            return Response.ok(friendship).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    // Delete a friendship
    @DELETE
    @Path("/{userId1}/{userId2}")
    public Response deleteFriendship(@PathParam("userId1") int userId1, @PathParam("userId2") int userId2) {
        Friendship friendship = friendshipDao.getFriendship(userId1, userId2);
        if (friendship == null) {
            return Response.status(Response.Status.NO_CONTENT).build();
        }
        friendshipDao.deleteFriendship(friendship.getId());
        return Response.status(Response.Status.ACCEPTED).build();
    }
}
