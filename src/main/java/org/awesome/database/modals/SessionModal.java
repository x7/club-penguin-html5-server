package org.awesome.database.modals;

import org.awesome.annotations.DatabaseInit;
import org.awesome.annotations.DatabaseModal;
import org.awesome.database.Database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;

@DatabaseModal
public class SessionModal {
    @DatabaseInit
    public static void createSessionTable() {
        String sql = """
            CREATE TABLE IF NOT EXISTS sessions (
                id SERIAL PRIMARY KEY,
                penguin_id TEXT NOT NULL,
                username TEXT NOT NULL,
                session_id TEXT NOT NULL
            );
        """;

        Connection connection = Database.getDatabase();

        try (Statement stmt = connection.createStatement()) {
            stmt.execute(sql);
            System.out.println("Table 'sessions' created successfully.");
        } catch (Exception error) {
            error.printStackTrace();
        }
    }

    public static boolean createSession(String penguinId, String username, String session) {
        String sql = """
            INSERT INTO sessions (penguin_id, username, session_id)
            VALUES (?, ?, ?);
        """;

        Connection connection = Database.getDatabase();
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, penguinId);
            statement.setString(2, username);
            statement.setString(3, session);
            statement.executeUpdate();

            return true;
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("Error adding a value to sessions table");
            return false;
        }
    }
}