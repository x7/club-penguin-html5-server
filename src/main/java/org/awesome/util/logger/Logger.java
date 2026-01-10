package org.awesome.util.logger;

/*
    params - @String message, @LoggerType loggerType, @

    first check if the logger type is in the list if not set to default
    generate reference id
    setup message that will be printed to console
    print it out
*/

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.awesome.util.JsonUtil;
import org.awesome.util.TimeHelper;
import org.awesome.util.config.Config;
import org.awesome.util.config.ConfigHelper;
import org.awesome.util.constants.Colors;
import org.awesome.util.file.FileHelper;
import org.jspecify.annotations.Nullable;
import org.slf4j.LoggerFactory;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;

public class Logger {
    private static int maxLogs = 2;

    public static void log(String message, LoggerType loggerType, @Nullable Exception error) {
        boolean validLogType = LoggerUtil.isValidLogType(loggerType);
        if(!validLogType) {
            System.out.println("The provided log type " + loggerType.toString() + " is invalid. Defaulting to DEFAULT");
            loggerType = LoggerType.DEFAULT;
        }

        long referenceId = LoggerUtil.generateReferenceId();
        String date = TimeHelper.getShortDate(true);
        String logMessage = LoggerUtil.generateLogMessage(loggerType, date, referenceId);
        logMessage = logMessage + "- " + message;

        // fix
        if(error != null) {
            String errorReason = LoggerUtil.errorToString(error).split("\n")[0];
            logMessage = logMessage + " | Error: " + errorReason;
        }

        JsonNode isLoggingEnabled = ConfigHelper.getValue("logging." + loggerType.toString().toLowerCase());
        if(isLoggingEnabled != null && isLoggingEnabled.isBoolean() && isLoggingEnabled.asBoolean()) {
            System.out.println(logMessage);
        }

        // we've logged the message now we need to get it ready for txt/json storing
        LoggerQueue loggerQueue = new LoggerQueue(message, loggerType, date, referenceId, (error == null ? null : LoggerUtil.errorToString(error)));
        LoggerQueueHelper.addToQueue(loggerQueue);
        int currentQueueSize = LoggerQueueHelper.getQueueSize();

        if(currentQueueSize < maxLogs) {
            return;
        }

        saveLogs();
    }

    public static void saveLogs() {
        List<LoggerQueue> copyOfQueue = LoggerQueueHelper.getQueueListCopy();
        LoggerQueueHelper.clearQueueList();
        logTextFile(copyOfQueue);
        logJsonFIle(copyOfQueue);
    }

    // Writes to both Json and Text
    private static void logTextFile(List<LoggerQueue> loggerQueues) {
        StringBuilder stringBuilder = new StringBuilder();
        Path textFilePath = null;
        for(LoggerQueue currentLoggerQueue : loggerQueues) {
            if(currentLoggerQueue == null) {
                continue;
            }

            String type = currentLoggerQueue.getLoggerType().toString();
            textFilePath = Path.of("").toAbsolutePath().resolve("logs").resolve("text").resolve(type.toLowerCase() + ".txt");
            Path parent = textFilePath.getParent();
            System.out.println(parent);

            boolean doesParentExist = FileHelper.doesDirectoryExist(parent);
            if(!doesParentExist) {
                boolean didCreateDirectory = FileHelper.createDirectory(parent);
                if(!didCreateDirectory) {
                    return;
                }
            }

            boolean doesTextFileExist = FileHelper.doesFileExist(textFilePath);
            if(!doesTextFileExist) {
                boolean didCreateFile = FileHelper.createFile(textFilePath, false);
                if(!didCreateFile) {
                    return;
                }
            }

            stringBuilder.append("[");
            stringBuilder.append(currentLoggerQueue.getDate());
            stringBuilder.append("] ");

            stringBuilder.append("[");
            stringBuilder.append(currentLoggerQueue.getReferenceId());
            stringBuilder.append("] ");

            stringBuilder.append("[");
            stringBuilder.append(currentLoggerQueue.getLoggerType().toString());
            stringBuilder.append("] - ");
            stringBuilder.append(currentLoggerQueue.getMessage());

            if(currentLoggerQueue.getErrorTrace() != null) {
                stringBuilder.append(" | ");
                stringBuilder.append(currentLoggerQueue.getErrorTrace());
            }
        }

        String finalBuiltTextLog = stringBuilder.toString();
        List<StandardOpenOption> standardOpenOptionList = new ArrayList<>();
        standardOpenOptionList.add(StandardOpenOption.APPEND);
        FileHelper.writeFile(textFilePath, finalBuiltTextLog, standardOpenOptionList);
    }

    private static void logJsonFIle(List<LoggerQueue> loggerQueuesList) {
        Path jsonFilePath = null;
        StringBuilder stringBuilder = new StringBuilder();
        ObjectMapper objectMapper = new ObjectMapper();

        for(LoggerQueue currentLoggerQueue : loggerQueuesList) {
            if(currentLoggerQueue == null) {
                continue;
            }

            String type = currentLoggerQueue.getLoggerType().toString();
            jsonFilePath = Path.of("").toAbsolutePath().resolve("logs").resolve("json").resolve(type.toLowerCase() + ".jsonl");
            Path parent = jsonFilePath.getParent();

            boolean doesParentExist = FileHelper.doesDirectoryExist(parent);
            if(!doesParentExist) {
                boolean didCreateDirectory = FileHelper.createDirectory(parent);
                if(!didCreateDirectory) {
                    return;
                }
            }

            boolean doesTextFileExist = FileHelper.doesFileExist(jsonFilePath);
            if(!doesTextFileExist) {
                boolean didCreateFile = FileHelper.createFile(jsonFilePath, false);
                if(!didCreateFile) {
                    return;
                }
            }

            ObjectNode objectNode = objectMapper.createObjectNode();
            objectNode.put("message", currentLoggerQueue.getMessage());
            if(currentLoggerQueue.getErrorTrace() != null) {
                objectNode.put("error", currentLoggerQueue.getErrorTrace());
            }

            objectNode.put("reference_id", currentLoggerQueue.getReferenceId());
            objectNode.put("current_date", currentLoggerQueue.getDate());
            objectNode.put("log_type", currentLoggerQueue.getLoggerType().toString().toUpperCase());

            try {
                stringBuilder.append(objectMapper.writeValueAsString(objectNode));
                stringBuilder.append("\n");
            } catch (Exception exception) {
                System.out.println("there was an error converting the json to a string");
            }
        }

        String json = stringBuilder.toString();
        List<StandardOpenOption> standardOpenOptionList = new ArrayList<>();
        standardOpenOptionList.add(StandardOpenOption.APPEND);
        FileHelper.writeFile(jsonFilePath, json, standardOpenOptionList);
    }
}