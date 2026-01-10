package org.awesome.util.file;

import org.jspecify.annotations.Nullable;
import tools.jackson.databind.jsonFormatVisitors.JsonObjectFormatVisitor;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.List;

public class FileHelper {
    public static boolean doesFileExist(Path path) {
        return Files.exists(path);
    }

    public static boolean doesDirectoryExist(Path path) {
        return Files.isDirectory(path);
    }

    public static boolean createDirectory(Path path) {
        try {
            if(doesFileExist(path)) {
                return true;
            }

            Files.createDirectory(path);
            return true;
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("failed to create directory");
            return false;
        }
    }

    public static boolean createFile(Path path, boolean overwrite) {
        if(doesFileExist(path) && !overwrite) {
            return true;
        }

        try {
            Files.createFile(path);
            return true;
        } catch (Exception error) {
            System.out.println("Error occured while creating file for path " + path);
            error.printStackTrace();
            return false;
        }
    }

    public static void deleteFile(Path path) {
        if(doesFileExist(path)) {
            return;
        }

        try {
            Files.delete(path);
        } catch (Exception error) {
            System.out.println("Failed to delete file");
            error.printStackTrace();
        }
    }

    public static void writeFile(Path path, String text, @Nullable List<StandardOpenOption> standardOpenOptions) {
        if(!doesFileExist(path)) {
            return;
        }

        try {
            if(standardOpenOptions == null || standardOpenOptions.isEmpty()) {
                Files.writeString(path, text);
                return;
            }

            Files.writeString(path, text, standardOpenOptions.toArray(StandardOpenOption[]::new));
        } catch (Exception error) {
            System.out.println("Error writing to file");
            error.printStackTrace();
        }
    }

    public static List<String> readFile(Path path) {
        if(!doesFileExist(path)) {
            return null;
        }

        try {
            System.out.println(path);
            List<String> lines = Files.readAllLines(path);

            String fileName = path.getFileName().toString();
            FileCache fileCache = FileCache.getInstance();
            fileCache.add(fileName, lines);

            return lines;
        } catch (Exception error) {
            System.out.println("cannot read file");
            error.printStackTrace();
            return null;
        }
    }
}
