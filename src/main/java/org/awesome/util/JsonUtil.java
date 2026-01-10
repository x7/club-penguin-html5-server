package org.awesome.util;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import tools.jackson.databind.jsonFormatVisitors.JsonObjectFormatVisitor;

public class JsonUtil {
    public static final ObjectMapper objectMapper = new ObjectMapper();

    public static JsonNode createJsonNode() {
        return objectMapper.createObjectNode();
    }

    public static JsonNode valueAsNode(Object object) {
        return objectMapper.valueToTree(object);
    }

    public static JsonNode readJsonString(String json) {
        try {
            return objectMapper.readTree(json);
        } catch (Exception error) {
            System.out.println("Failed to read json string tree");
            return null;
        }
    }

    public static String writeJsonAsString(JsonNode jsonNode, boolean prettyPrinter) {
        try {
            if(!prettyPrinter) {
                return objectMapper.writeValueAsString(jsonNode);
            }

            return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonNode);
        } catch (Exception error) {
            System.out.println("Failed to write json too a string");
            return null;
        }
    }
}