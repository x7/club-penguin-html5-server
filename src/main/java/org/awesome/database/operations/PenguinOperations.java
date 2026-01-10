package org.awesome.database.operations;

import org.awesome.no_idea_for_a_name_yet.PenguinData;
import org.awesome.database.Database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class PenguinOperations {
    public static PenguinData getPenguinByUsername(String username) {
        String sql = """
            SELECT id, username, password, email_address, penguin_color
            FROM penguins
            WHERE username = ?;
        """;

        Connection connection = Database.getDatabase();
        try(PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, username);

            try(ResultSet resultSet = preparedStatement.executeQuery()) {
                if(resultSet == null || !resultSet.next()) {
                    System.out.println("No penguin found with username " + username);
                    return null;
                }

                String id = resultSet.getString(1);
                String penguinUsername = resultSet.getString(2);
                String password = resultSet.getString(3);
                String email = resultSet.getString(4);
                String penguinColor = resultSet.getString(5);

                PenguinData penguinData = new PenguinData(id, penguinUsername, password, email, penguinColor);
                System.out.println(penguinData);
                return penguinData;
            }
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("Error pulling penguin data for username " + username);
            return null;
        }
    }

    public static boolean createPenguin(String username, String password, String email, String penguinColor) {
        String sql = """
            INSERT INTO penguins (username, password, email_address, penguin_color)
            VALUES (?, ?, ?, ?);
        """;

        Connection connection = Database.getDatabase();
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, username);
            statement.setString(2, password);
            statement.setString(3, email);
            statement.setString(4, penguinColor);
            statement.executeUpdate();

            return true;
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("Error adding a value to penguins table");
            return false;
        }
    }

    public static void getPenguinById() {

    }

    public static void updatePenguin() {

    }

    public static void deletePenguin() {

    }

    public static void getAllPenguins() {

    }
}
