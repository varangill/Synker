package io.synker.api;

import org.jdbi.v3.core.mapper.reflect.ColumnName;

public class Friendship {

    private int id;
    private int userOneId;
    private int userTwoId;
    private int requester;
    private Status status;

    public enum Status {
        ACCEPTED, PENDING, NONE, BLOCKED
    }

    public Friendship() {
    }

    public Friendship(int userOneId, int userTwoId, int requesterId, Status status) {
        this.userOneId = userOneId;
        this.userTwoId = userTwoId;
        this.requester = requesterId;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @ColumnName("user_one")
    public int getUserOneId() {
        return userOneId;
    }

    public void setUserOneId(int userOneId) {
        this.userOneId = userOneId;
    }

    @ColumnName("user_two")
    public int getUserTwoId() {
        return userTwoId;
    }

    public void setUserTwoId(int userTwoId) {
        this.userTwoId = userTwoId;
    }

    public int getRequester() {
        return requester;
    }

    public void setRequester(int requesterId) {
        this.requester = requesterId;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}