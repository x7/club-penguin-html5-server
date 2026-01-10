package org.awesome.preflight;

import com.fasterxml.jackson.databind.JsonNode;
import org.awesome.database.Database;
import org.awesome.util.config.ConfigHelper;

import java.sql.Connection;
import java.util.Objects;

public class DatabaseCheck {
    public static void checkDatabase() {
        // check the config first to see if the values are actually set
        JsonNode host = ConfigHelper.getValue("database.host");
        JsonNode port = ConfigHelper.getValue("database.port");
        JsonNode username =  ConfigHelper.getValue("database.username");
        JsonNode password =  ConfigHelper.getValue("database.password");
        JsonNode databaseName =  ConfigHelper.getValue("database.database_name");

        if(host == null || !host.isTextual() || host.asText().isBlank()) {
            System.out.println("Database host is not valid");
            return;
        }

        if(port == null || !port.canConvertToInt()) {
            System.out.println(port);
            System.out.println("Database port is not valid");
            return;
        }

        if(username == null || !username.isTextual() || username.asText().isBlank()) {
            System.out.println(username);
            System.out.println("Database username is not valid");
            return;
        }

        if(password == null || !password.isTextual() || password.asText().isBlank()) {
            System.out.println("Database password is not valid");
            return;
        }

        if(databaseName == null || !databaseName.isTextual() || databaseName.asText().isBlank()) {
            System.out.println("Database name is not valid");
            return;
        }

        Database.connectToDatabase(host.asText(), port.asInt(), username.asText(), password.asText(), databaseName.asText());
        Connection connection = Database.getDatabase();

        if(connection == null) {
            System.out.println("Failed to connect to database exiting program");
            return;
        }

        // loads all modals
        Database.initAll("org.awesome.database.modals");
    }
}
