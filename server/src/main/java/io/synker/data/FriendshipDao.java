package io.synker.data;

import io.synker.api.Friendship;

import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import java.util.List;

@RegisterBeanMapper(Friendship.class)
public interface FriendshipDao {

    @SqlUpdate("INSERT INTO friendships (user_one, user_two, status, requester) VALUES (:userOneId, :userTwoId, :status, :requesterId)")
    @GetGeneratedKeys
    int createFriendship(@BindBean Friendship friendship);

    @SqlQuery("SELECT * FROM friendships WHERE id = :id")
    Friendship findById(@Bind("id") int id);

    @SqlQuery("SELECT * FROM friendships WHERE user_one = :userId OR user_two = :userId")
    List<Friendship> getFriendshipsForUser(@Bind("userId") int userId);

    @SqlQuery("SELECT * FROM friendships WHERE (user_one = :userId1 AND user_two = :userId2) " +
            "OR (user_one = :userId2 AND user_two = :userId1)")
    Friendship getFriendship(@Bind("userId1") int userId1, @Bind("userId2") int userId2);

    @SqlUpdate("UPDATE friendships SET status = :status WHERE id = :id")
    void updateStatus(@Bind("id") int id, @Bind("status") String status);

    @SqlUpdate("DELETE FROM friendships WHERE id = :id")
    void deleteFriendship(@Bind("id") int id);
}
