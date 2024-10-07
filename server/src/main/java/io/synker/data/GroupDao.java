package io.synker.data;

import io.synker.api.Group;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import java.util.List;

@RegisterBeanMapper(Group.class)
public interface GroupDao {

    @SqlUpdate("INSERT INTO `groups` (name, description, profile_picture_url) VALUES (:name, :description, :profilePictureUrl)")
    @GetGeneratedKeys
    int createGroup(@BindBean Group group);

    @SqlQuery("SELECT g.* FROM `groups` g JOIN group_memberships gm ON g.id = gm.group_id WHERE gm.user_id = :userId")
    List<Group> getUserGroups(@Bind("userId") int userId);

    @SqlUpdate("DELETE FROM group_memberships WHERE group_id = :groupId AND user_id = :userId")
    void deleteGroupMembership(@Bind("groupId") int groupId, @Bind("userId") int userId);

    @SqlUpdate("DELETE FROM `groups` WHERE id = :groupId")
    void deleteGroup(@Bind("groupId") int groupId);

    @SqlUpdate("INSERT INTO group_memberships (group_id, user_id, is_owner) VALUES (:groupId, :userId, :isOwner)")
    void joinGroup(@Bind("groupId") int groupId, @Bind("userId") int userId, @Bind("isOwner") boolean isOwner);
}
