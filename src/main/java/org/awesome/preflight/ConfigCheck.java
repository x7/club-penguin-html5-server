package org.awesome.preflight;

import com.fasterxml.jackson.databind.JsonNode;
import org.awesome.Main;
import org.awesome.util.JsonUtil;
import org.awesome.util.config.Config;
import org.awesome.util.config.ConfigHelper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ConfigCheck {
    private static final List<String> jsonFieldNames = new ArrayList<>();

    public static void checkConfig() {
        // can we load the config?
        boolean loadConfig = ConfigHelper.load();
        if(!loadConfig) {
            System.out.println("Failed to load the configuration file exiting program");
            return;
        }

        // Does the config actually exist as a json node and is readable?
        JsonNode config = Config.getInstance().get();
        if(config == null) {
            System.out.println("Config is null exiting program");
            return;
        }

        JsonNode defaultConfigSetup = JsonUtil.readJsonString(ConfigHelper.defaultConfig);
        if(defaultConfigSetup == null) {
            System.out.println("Default config is null cannot compare keys");
            return;
        }

        JsonNode defaultConfig = defaultConfigSetup.get(Main.environment);
        if(defaultConfig == null) {
            System.out.println("no environment object found in the default config for " + Main.environment);
            return;
        }

        // compare the keys with the default one
        boolean correctJson = compareKeys(config, defaultConfig);
        if(!correctJson) {
            System.out.println("Config does not match default config please review it");
        }
    }

    private static boolean compareKeys(JsonNode json, JsonNode jsonToCompare) {
        List<String> jsonFieldNameList = new ArrayList<>();
        List<String> jsonToCompareFieldNameList = new ArrayList<>();

        Iterator<String> jsonIterator = json.fieldNames();
        Iterator<String> jsonCompareIterator = jsonToCompare.fieldNames();

        collectFieldNames(json, jsonIterator, jsonFieldNameList);
        collectFieldNames(jsonToCompare, jsonCompareIterator, jsonToCompareFieldNameList);

        int found = 0;
        for(String field : jsonToCompareFieldNameList) {
            if(!jsonFieldNameList.contains(field)) {
                continue;
            }

            found = found + 1;
        }

        if(found != jsonToCompareFieldNameList.size()) {
            return false;
        }

        return true;
    }

    private static void collectFieldNames(JsonNode jsonNode, Iterator<String> fieldNames, List<String> listToAdd) {
        while(fieldNames.hasNext()) {
            String field = fieldNames.next();
            JsonNode fieldNode = jsonNode.get(field);

            if(fieldNode.isObject()) {
                listToAdd.add(field);
                collectFieldNames(fieldNode, fieldNode.fieldNames(), listToAdd);
                continue;
            }

            listToAdd.add(field);
        }
    }
}