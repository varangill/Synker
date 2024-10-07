package io.synker.api;

import java.time.LocalDate;

public class GroupMembership {
    private int groupId;
    private int userId;
    private boolean isOwner;
    private LocalDate joinDate; // if you want to track when the user joined

    // Constructors, getters, and setters

    public GroupMembership(int groupId, int userId, boolean isOwner, LocalDate joinDate) {
        this.groupId = groupId;
        this.userId = userId;
        this.isOwner = isOwner;
        this.joinDate = joinDate;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public boolean isOwner() {
        return isOwner;
    }

    public void setOwner(boolean owner) {
        isOwner = owner;
    }

    public LocalDate getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(LocalDate joinDate) {
        this.joinDate = joinDate;
    }
}
