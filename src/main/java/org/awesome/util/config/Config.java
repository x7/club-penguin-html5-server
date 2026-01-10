package org.awesome.util.config;

import com.fasterxml.jackson.databind.JsonNode;

public class Config {
    public static Config config = new Config();
    private JsonNode configNode = null;

    private Config() {}

    public JsonNode get() {
        return this.configNode;
    }

    public void set(JsonNode node) {
        this.configNode = node;
    }

    public static Config getInstance() {
        return config;
    }
}
