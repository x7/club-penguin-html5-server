package org.awesome.no_idea_for_a_name_yet;

public class PenguinData {
    private final String id;
    private final String username;
    private final String password;
    private final String email;
    private final String penguinColor;

    public PenguinData(String id, String username, String password, String email, String penguinColor) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.penguinColor = penguinColor;
    }

    public String getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPenguinColor() {
        return this.penguinColor;
    }
}
