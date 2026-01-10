package org.awesome.database.modals;

import org.awesome.annotations.DatabaseInit;
import org.awesome.annotations.DatabaseModal;
import org.awesome.database.Database;

import java.sql.Connection;
import java.sql.Statement;

@DatabaseModal
public class PenguinModal {
    @DatabaseInit
    public static void createPenguinTable() {
        String sql = """
            CREATE TABLE IF NOT EXISTS penguins (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                email_address TEXT NOT NULL,
                penguin_color TEXT NOT NULL
            );
        """;

        Connection connection = Database.getDatabase();

        try (Statement stmt = connection.createStatement()) {
            stmt.execute(sql);
            System.out.println("Table 'penguins' created successfully.");
        } catch (Exception error) {
            error.printStackTrace();
        }
    }
}
