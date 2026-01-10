package org.awesome.routes.account.register;

import org.awesome.no_idea_for_a_name_yet.PenguinData;
import org.awesome.database.operations.PenguinOperations;

import java.util.Map;

public class RegisterService {
    public static void registerHelper(Map<String, Object> body) {
        String username = (String) body.get("username");
        String password = (String) body.get("password");
        String email = (String) body.get("email");
        String penguinColor = (String) body.get("penguinColor");

        // first check if this username exist in the database already
        PenguinData penguinData = PenguinOperations.getPenguinByUsername(username);
        if(penguinData != null) {
            // penguin name already exist
            System.out.println("penguin already exist");
            return;
        }

        boolean didCreatePenguin = PenguinOperations.createPenguin(username, password, email, penguinColor);
        if(!didCreatePenguin) {
            System.out.println("Failed to create penguin");
            return;
        }

        System.out.println("Woo it created");
    }
}
