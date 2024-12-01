package io.synker.api;

import org.jdbi.v3.core.mapper.reflect.ColumnName;

public class Profile {

    @ColumnName("user_id")
    private int userId;

    @ColumnName("description")
    private String description;

    @ColumnName("profile_picture_url")
    private String profilePictureUrl;

    @ColumnName("status")
    private String status;

    @ColumnName("personality_one")
    private int personalityOne;

    @ColumnName("personality_two")
    private int personalityTwo;

    @ColumnName("personality_three")
    private int personalityThree;

    @ColumnName("personality_four")
    private int personalityFour;

    public Profile() {
    }
    
    public Profile(int userId, String description, String profilePictureUrl, String status,
                   int personalityOne, int personalityTwo, int personalityThree, int personalityFour) {
        this.userId = userId;
        this.description = description;
        this.profilePictureUrl = profilePictureUrl;
        this.status = status;
        this.personalityOne = personalityOne;
        this.personalityTwo = personalityTwo;
        this.personalityThree = personalityThree;
        this.personalityFour = personalityFour;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getPersonalityOne() {
        return personalityOne;
    }

    public void setPersonalityOne(int personalityOne) {
        this.personalityOne = personalityOne;
    }

    public int getPersonalityTwo() {
        return personalityTwo;
    }

    public void setPersonalityTwo(int personalityTwo) {
        this.personalityTwo = personalityTwo;
    }

    public int getPersonalityThree() {
        return personalityThree;
    }

    public void setPersonalityThree(int personalityThree) {
        this.personalityThree = personalityThree;
    }

    public int getPersonalityFour() {
        return personalityFour;
    }

    public void setPersonalityFour(int personalityFour) {
        this.personalityFour = personalityFour;
    }
}
