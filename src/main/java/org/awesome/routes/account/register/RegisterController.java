package org.awesome.routes.account.register;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.awesome.util.JsonUtil;
import org.awesome.util.Util;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Controller
public class RegisterController {
    @PostMapping("/api/register")
    public ResponseEntity<?> register(@RequestBody Map<String, Object> body) throws JsonProcessingException {
        String username = (String) body.get("username");
        String password = (String) body.get("password");
        String email = (String) body.get("email");
        String penguinColor = (String) body.get("penguinColor");

        if(username == null || password == null || email == null || penguinColor == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("bad");
        }

        RegisterService.registerHelper(body);

        return ResponseEntity.status(HttpStatus.OK).body("ok");
    }
}
