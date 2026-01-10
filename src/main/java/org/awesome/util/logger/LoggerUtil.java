package org.awesome.util.logger;

import org.apache.catalina.util.TimeBucketCounterBase;
import org.apache.juli.logging.Log;
import org.awesome.util.constants.Colors;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Stream;

import static java.util.Arrays.stream;

public class LoggerUtil {
    public static boolean isValidLogType(LoggerType loggerType) {
        LoggerType[] loggerTypes = LoggerType.values();
        return Arrays.stream(loggerTypes).anyMatch(type -> type == loggerType);
    }

    public static long generateReferenceId() {
        long seconds = System.currentTimeMillis() / 1000L;
        int random = ThreadLocalRandom.current().nextInt(1000, 1000000);
        long id = seconds * 100000L + random;

        return id % 1_000_000_000L * 100000;
    }

    public static String errorToString(Exception error) {
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        error.printStackTrace(printWriter);
        return stringWriter.toString();
    }

    public static String generateLogMessage(LoggerType loggerType, String date, long referenceId) {
        String message = Colors.BRIGHT_BLACK + "[" + date + "] " + Colors.RESET +
                Colors.BRIGHT_CYAN + "[ref=" + referenceId + "] " + Colors.RESET
                + "%color%" + "[" + loggerType.toString().toUpperCase() + "] " + Colors.RESET;
        String placeholder = "%color%";

        switch(loggerType) {
            case SUCCESS -> {
                message = message.replace(placeholder, Colors.GREEN);
            }

            case INFO -> {
                message = message.replace(placeholder, Colors.CYAN);
            }

            case WARN -> {
                message = message.replace(placeholder, Colors.YELLOW);
            }

            case ERROR -> {
                message = message.replace(placeholder, Colors.RED);
            }

            case DEFAULT -> {
                message = message.replace(placeholder, Colors.WHITE);
            }

            case DATABASE -> {
                message = message.replace(placeholder, Colors.BRIGHT_PURPLE);
            }

            case API -> {
                message = message.replace(placeholder, Colors.BRIGHT_BLUE);
            }

            case WEBSOCKET -> {
                message = message.replace(placeholder, Colors.BRIGHT_CYAN);
            }
        }

        return message;
    }
}