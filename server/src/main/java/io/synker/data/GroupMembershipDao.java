package io.synker.data;

import io.synker.api.GroupMembership;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.List;

@RegisterBeanMapper(GroupMembership.class)
public interface GroupMembershipDao {

    // Join a group (insert into group_memberships)
    @SqlUpdate("INSERT INTO group_memberships (group_id, user_id, is_owner, join_date) " +
            "VALUES (:groupId, :userId, :isOwner, NOW())")
    void joinGroup(@BindBean GroupMembership groupMembership);

    // Delete a group membership
    @SqlUpdate("DELETE FROM group_memberships WHERE group_id = :groupId AND user_id = :userId")
    void deleteGroupMembership(@Bind("groupId") int groupId, @Bind("userId") int userId);

    // Optionally, you can add methods for additional queries, like fetching members of a group
    @SqlUpdate("DELETE FROM group_memberships WHERE group_id = :groupId")
    void deleteAllGroupMemberships(@Bind("groupId") int groupId); // To delete all memberships if needed
}