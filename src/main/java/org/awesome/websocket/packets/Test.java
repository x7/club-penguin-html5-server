package org.awesome.websocket.packets;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Map;

@Controller
public class Test {
    @MessageMapping("/test")
    @SendTo("/client/test")
    public Map<String, Object> testResponse(@Payload Map<String, Object> packet) {
        System.out.println("packet received");
        System.out.println(packet);

        return Map.of("type", "hi");
    }
}
