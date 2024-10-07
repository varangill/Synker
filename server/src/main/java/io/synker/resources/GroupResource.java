package io.synker.resources;

import io.synker.api.Group;
import io.synker.api.GroupMembership;
import io.synker.data.GroupDao;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/groups")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GroupResource {

    private final GroupDao groupDao;
    private final GroupMembershipDao groupMembershipDao;

    public GroupResource(GroupDao groupDao, GroupMembershipDao groupMembershipDao) {
        this.groupDao = groupDao;
        this.groupMembershipDao = groupMembershipDao;
    }

    // Create a new group
    @POST
    public Response createGroup(Group group) {
        int groupId = groupDao.createGroup(group);
        return Response.status(Response.Status.CREATED).entity(groupId).build();
    }

    // Get all groups for a user
    @GET
    @Path("/user/{userId}")
    public Response getGroupsForUser(@PathParam("userId") int userId) {
        List<Group> groups = groupDao.getUserGroups(userId);
        if (groups.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(groups).build();
    }

    // Join a group
    @POST
    @Path("/{groupId}/join")
    public Response joinGroup(@PathParam("groupId") int groupId, @QueryParam("userId") int userId) {
        GroupMembership membership = new GroupMembership(groupId, userId, false, null); // Not owner, current time
        groupMembershipDao.joinGroup(membership);
        return Response.status(Response.Status.CREATED).build();
    }

    // Delete a group membership
    @DELETE
    @Path("/{groupId}/user/{userId}")
    public Response deleteGroupMembership(@PathParam("groupId") int groupId, @PathParam("userId") int userId) {
        groupMembershipDao.deleteGroupMembership(groupId, userId);
        return Response.status(Response.Status.NO_CONTENT).build();
    }

    // Delete a group
    @DELETE
    @Path("/{groupId}")
    public Response deleteGroup(@PathParam("groupId") int groupId) {
        groupDao.deleteGroup(groupId);
        return Response.status(Response.Status.NO_CONTENT).build();
    }
}