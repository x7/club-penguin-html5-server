package org.awesome.websocket;

import org.springframework.stereotype.Service;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketSession;

@Service
public class DisconnectWebsocket {
    public boolean kickSession(String sessionId) {
        WebSocketSession session = WebSocketConfig.WS_SESSIONS.get(sessionId);
        if(session == null) {
            return false;
        }

        try {
            session.close(CloseStatus.NORMAL);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }
}
