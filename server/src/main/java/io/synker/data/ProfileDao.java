package io.synker.data;

import io.synker.api.Profile;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(Profile.class)
public interface ProfileDao {

    @SqlUpdate("INSERT INTO profiles (user_id) VALUES (:userId)")
    void insertProfile(@Bind("userId") int userId);

    @SqlUpdate("UPDATE profiles SET "
            + "description = COALESCE(:description, description), "
            + "status = COALESCE(:status, status), "
            + "profile_picture_url = COALESCE(:profilePictureUrl, profile_picture_url), "
            + "personality_one = COALESCE(:personalityOne, personality_one), "
            + "personality_two = COALESCE(:personalityTwo, personality_two), "
            + "personality_three = COALESCE(:personalityThree, personality_three), "
            + "personality_four = COALESCE(:personalityFour, personality_four) WHERE user_id = :userId")
    void updateProfile(@BindBean Profile profile);
}
