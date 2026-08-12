package org.awesome.websocket;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.config.annotation.*;
import org.springframework.web.socket.handler.WebSocketHandlerDecorator;
import org.springframework.web.socket.handler.WebSocketHandlerDecoratorFactory;
import org.springframework.web.socket.messaging.DefaultSimpUserRegistry;

import java.security.Principal;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    public static final Map<String, WebSocketSession> WS_SESSIONS = new ConcurrentHashMap<>();

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").
                setAllowedOriginPatterns("*");
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/client", "/user", "/queue");
        registry.setApplicationDestinationPrefixes("/server");
        registry.setUserDestinationPrefix("/user");
    }

    @Override
    public void configureWebSocketTransport(WebSocketTransportRegistration registry) {
        registry.addDecoratorFactory(new WebSocketHandlerDecoratorFactory() {
            @Override
            public WebSocketHandlerDecorator decorate(org.springframework.web.socket.WebSocketHandler handler) {
                return new WebSocketHandlerDecorator(handler) {

                    @Override
                    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
                        WS_SESSIONS.put(session.getId(), session);
                        super.afterConnectionEstablished(session);
                    }

                    @Override
                    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
                        WS_SESSIONS.remove(session.getId());
                        super.afterConnectionClosed(session, closeStatus);
                    }
                };
            }
        });
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {
            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                StompHeaderAccessor accessor =
                        MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);

                if(StompCommand.CONNECT.equals(accessor.getCommand())) {
                    String username = accessor.getFirstNativeHeader("username");
                    System.out.println("=== CONNECT - Setting Principal ===");
                    System.out.println("Username: " + username);

                    if(username != null) {
                        Principal principal = new Principal() {
                            @Override
                            public String getName() {
                                return username;
                            }

                            @Override
                            public String toString() {
                                return username;
                            }
                        };
                        accessor.setUser(principal);
                        System.out.println("Principal set: " + principal.getName());
                    }
                }

                if (StompCommand.SUBSCRIBE.equals(accessor.getCommand())) {
                    System.out.println("=== SUBSCRIBE ===");
                    System.out.println("Destination: " + accessor.getDestination());
                    System.out.println("User.getName(): " + (accessor.getUser() != null ? accessor.getUser().getName() : "null"));
                }

                return message;
            }
        });
//        registration.interceptors(new ChannelInterceptor() {
//            @Override
//            public Message<?> preSend(Message<?> message, MessageChannel channel) {
//                StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
//                if (accessor == null) {
//                    return message;
//                }
//
//                if(StompCommand.CONNECT.equals(accessor.getCommand())) {
//                    String username = accessor.getFirstNativeHeader("username");
//                    if (username != null && !username.isBlank()) {
//                        Principal principal = () -> username;
//                        System.out.println(principal.getName());
//                        accessor.setUser(principal);
//                    }
//                }
//
//                return message;
//            }
//        });
    }

    @Override
    public void configureClientOutboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {
            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

                if (accessor.getDestination() != null && accessor.getDestination().contains("join_room")) {
                    System.out.println("=== OUTBOUND join_room MESSAGE ===");
                    System.out.println("Destination: " + accessor.getDestination());
                    System.out.println("Message type: " + accessor.getMessageType());
                    System.out.println("Session: " + accessor.getSessionId());
                }

                return message;
            }
        });
    }
}