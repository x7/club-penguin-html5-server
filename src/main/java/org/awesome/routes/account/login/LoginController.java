package org.awesome.routes.account.login;

import org.awesome.no_idea_for_a_name_yet.PenguinData;
import org.awesome.database.operations.PenguinOperations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@Controller
public class LoginController {
    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody Map<String, Object> body) {
        String username = (String) body.get("username");
        String password = (String) body.get("password");

        PenguinData penguinData = PenguinOperations.getPenguinByUsername(username);
        if(penguinData == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("bad");
        }

        if(username.equalsIgnoreCase(penguinData.getUsername()) && penguinData.getPassword().equals(password)) {
            return ResponseEntity.status(HttpStatus.OK).body("success");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("bad");
    }
}
