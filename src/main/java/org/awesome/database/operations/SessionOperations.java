package org.awesome.database.operations;

import org.awesome.database.Database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class SessionOperations {
    public static void getSessionBySession(String session) {
        String sql = """
            SELECT id, penguin_id, username, session_id
            FROM sessions
            WHERE session_id = ?;
        """;

        Connection connection = Database.getDatabase();
        try(PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, session);

            try(ResultSet resultSet = preparedStatement.executeQuery()) {
                if(resultSet == null || !resultSet.next()) {
                    System.out.println("No session found with session id " + session);
                    return;
                }

                String id = resultSet.getString(1);
                String penguinId = resultSet.getString(2);
                String username = resultSet.getString(3);
                String sessionId = resultSet.getString(4);

//                PenguinData penguinData = new PenguinData(id, penguinUsername, password, email, penguinColor);
                System.out.println(id + " " + penguinId + username + sessionId);
//                return penguinData;
            }
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("Error pulling session data for session id " + session);
            return;
        }
    }
}
