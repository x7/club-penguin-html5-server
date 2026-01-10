package org.awesome.util.file;

import java.util.*;

public class FileCache {
    private static final FileCache instance = new FileCache();
    private final Map<String, List<String>> fileContent = new HashMap<>();

    private FileCache() {}

    public void add(String key, List<String> value) {
        if(contains(key)) {
            this.fileContent.replace(key, value);
            return;
        }

        this.fileContent.put(key, value);
    }

    public void remove(String key) {
        if(!contains(key)) {
            return;
        }

        this.fileContent.remove(key);
    }

    public List<String> get(String key) {
        if(!contains(key)) {
            return null;
        }

        return this.fileContent.get(key);
    }

    public void clear() {
        this.fileContent.clear();
    }

    public boolean contains(String key) {
        return this.fileContent.containsKey(key);
    }

    public Map<String, List<String>> getAll() {
        Map<String, List<String>> copy = new HashMap<>();

        for(Map.Entry<String, List<String>> entry : this.fileContent.entrySet()) {
            String key = entry.getKey();
            List<String> value = entry.getValue();

            copy.put(key, Collections.unmodifiableList(value));
        }

        return Collections.unmodifiableMap(copy);
    }

    public static FileCache getInstance() {
        return instance;
    }
}