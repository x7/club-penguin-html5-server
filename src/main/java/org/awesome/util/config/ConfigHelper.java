package org.awesome.util.config;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.awesome.Main;
import org.awesome.util.JsonUtil;
import org.awesome.util.file.FileCache;
import org.awesome.util.file.FileHelper;

import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;

/*
    create - create a basic config if 1 isnt setup (if fails to create it exit program)
    load - this will read the configuration and store it into the local cache on start (based on the environment mode)
    get - this will get a value from a key (returns null if not found) make sure to loop constantly til its a key not a object (return object)
    then do getString(which calls get and cast to a string if possible)
    getInt
    getDouble
    getBoolean
    getLong
    getFloat
    add - adds a key + value (support adding like this.is.the.key: value)
    delete

    everytime we edit the config we need to resave it in the local cache as the ccache will beb used after loading it
*/

public class ConfigHelper {
    private static final String configurationFileName = "config.json";
    private static final Path configurationPath = Main.root.resolve(configurationFileName);
    public static final String defaultConfig =
            "{"
            + "\"development\":{"
            +   "\"logging\":{"
            +     "\"success\":true,"
            +     "\"info\":true,"
            +     "\"warn\":true,"
            +     "\"error\":true,"
            +     "\"default\":true,"
            +     "\"database\":true"
            +   "},"
            +   "\"database\":{"
            +     "\"host\":\"\","
            +     "\"port\":\"\","
            +     "\"username\":\"\","
            +     "\"password\":\"\","
            +     "\"database_name\":\"\""
            +   "}"
            + "},"
            + "\"production\":{"
            +   "\"logging\":{"
            +     "\"success\":true,"
            +     "\"info\":true,"
            +     "\"warn\":true,"
            +     "\"error\":true,"
            +     "\"default\":true,"
            +     "\"database\":true"
            +   "},"
            +   "\"database\":{"
            +     "\"host\":\"\","
            +     "\"port\":\"\","
            +     "\"username\":\"\","
            +     "\"password\":\"\","
            +     "\"database_name\":\"\""
            +   "}"
            + "}"
            + "}";



    // done
    public static boolean create() {
        boolean doesConfigExist = FileHelper.doesFileExist(configurationPath);
        if(doesConfigExist) {
            return true;
        }

        boolean success = FileHelper.createFile(configurationPath, true);
        if(!success) {
            System.out.println("Failed to create file!!!!");
            return false;
        }

        try {
            JsonNode jsonNode = JsonUtil.readJsonString(defaultConfig);
            String json = JsonUtil.writeJsonAsString(jsonNode, true);

            List<StandardOpenOption> standardOpenOptionList = new ArrayList<>();
            standardOpenOptionList.add(StandardOpenOption.WRITE);

            FileHelper.writeFile(configurationPath, json, standardOpenOptionList);
            return true;
        } catch (Exception error) {
            System.out.println("Error writing json");
            error.printStackTrace();
            return false;
        }
    }

    /*
        Loads the config and stores the json into the cache in a List of strings
        use read() to get it into a json node
        done
    */
    public static boolean load() {
        boolean doesConfigExist = FileHelper.doesFileExist(configurationPath);
        if(!doesConfigExist) {
            boolean createConfig = create();
            if(!createConfig) {
                System.out.println("Failed to create config exiting program");
                return false;
            }
        }

        List<String> lines = FileHelper.readFile(configurationPath);
        if(lines == null || lines.isEmpty()) {
            System.out.println("Cannot read config");
            return false;
        }

        FileCache.getInstance().add(configurationFileName, lines);
        return read();
    }

    /*
        Returns the config as a Json Node and stores it inside the Config instance
        done
    */
    public static boolean read() {
        List<String> lines = FileCache.getInstance().get(configurationFileName);
        if(lines == null) {
            return false;
        }

        StringBuilder stringBuilder = new StringBuilder();
        for(String line : lines) {
            stringBuilder.append(line);
        }

        String finalString = stringBuilder.toString();
        JsonNode jsonNode = JsonUtil.readJsonString(finalString);
        if(jsonNode == null) {
            System.out.println("Failed to convert config file to a json node");
            return false;
        }

        JsonNode environmentNode = jsonNode.get(Main.environment);
        if(environmentNode == null) {
            System.out.println("Node did not exist in the config " + Main.environment);
            return false;
        }

        Config.getInstance().set(environmentNode);
        return true;
    }

    public static void addValue(String key, Object value, boolean replaceIfExist) {
        JsonNode config = Config.getInstance().get();

        if(!key.contains(".")) {
            boolean doesKeyExist = keyExist(key);
            if(doesKeyExist && !replaceIfExist) {
                return;
            }

            ObjectNode objectNode = (ObjectNode) config;
            objectNode.set(key, JsonUtil.valueAsNode(value));
            return;
        }

        String[] keys = key.split("\\.");
        JsonNode lastNode = null;
        for(int i = 0; i < keys.length; i++) {
            JsonNode valueNode = (lastNode == null ? config : lastNode).get(keys[i]);
            if(valueNode == null) {
                return;
            }

            // if its not an object and its last break
            if(!valueNode.isObject() && i == keys.length - 1) {
                break;
            }

            if(valueNode.isObject()) {
                lastNode = valueNode;
                continue;
            }

            return;
        }


        ObjectNode objectNode = (ObjectNode) lastNode;
        if(keyExist(String.join(".", keys)) && !replaceIfExist) {
            return;
        }

        String lastKeyName = keys[keys.length - 1];
        objectNode.set(lastKeyName, JsonUtil.valueAsNode(value));
    }

    public static JsonNode getValue(String key) {
        JsonNode config = Config.getInstance().get();

        if(!key.contains(".")) {
            JsonNode value = config.get(key);
            if(value == null || value.isObject()) {
                return null;
            }

            return value;
        }

        String[] keys = key.split("\\.");
        JsonNode lastNode = null;
        for(String key1 : keys) {
            System.out.println(lastNode);
            JsonNode valueNode = (lastNode == null ? config : lastNode).get(key1);
            if(valueNode == null) {
                return null;
            }

            lastNode = valueNode;

            if(valueNode.isObject()) {
                continue;
            }

            break;
        }

        return lastNode;
    }

    public static boolean keyExist(String key) {
        JsonNode value = getValue(key);

        if(value == null) {
            return false;
        }

        return true;
    }


}