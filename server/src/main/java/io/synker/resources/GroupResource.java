package io.synker.resources;

import io.synker.api.Group;
import io.synker.api.GroupMembership;
import io.synker.data.GroupDao;
import io.synker.data.GroupMembershipDao;
import org.jdbi.v3.core.Jdbi;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/groups")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GroupResource {

    private final GroupMembershipDao groupMembershipDao;
    private final GroupDao groupDao;

    public GroupResource(Jdbi jdbi) {
        this.groupMembershipDao = jdbi.onDemand(GroupMembershipDao.class);
        this.groupDao = jdbi.onDemand(GroupDao.class);
    }

    @POST
    public Response createGroup(Group group) {
        int groupId = groupDao.createGroup(group);
        return Response.status(Response.Status.CREATED).entity(groupId).build();
    }

    @GET
    @Path("/user/{userId}")
    public Response getGroupsForUser(@PathParam("userId") int userId) {
        List<Group> groups = groupDao.getUserGroups(userId);
        if (groups.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(groups).build();
    }

    @POST
    @Path("/{groupId}/join")
    public Response joinGroup(@PathParam("groupId") int groupId, @QueryParam("userId") int userId) {
        GroupMembership membership = new GroupMembership(groupId, userId, false, null); // Not owner, current time
        groupMembershipDao.joinGroup(membership);
        return Response.status(Response.Status.CREATED).build();
    }

    @DELETE
    @Path("/{groupId}/user/{userId}")
    public Response deleteGroupMembership(@PathParam("groupId") int groupId, @PathParam("userId") int userId) {
        groupMembershipDao.deleteGroupMembership(groupId, userId);
        return Response.status(Response.Status.NO_CONTENT).build();
    }

    @DELETE
    @Path("/{groupId}")
    public Response deleteGroup(@PathParam("groupId") int groupId) {
        groupDao.deleteGroup(groupId);
        return Response.status(Response.Status.NO_CONTENT).build();
    }
}