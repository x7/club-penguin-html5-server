package org.awesome.util.logger;

import java.util.ArrayList;
import java.util.List;

public class LoggerQueueHelper {
    private static final List<LoggerQueue> queueList = new ArrayList<>();

    public static void addToQueue(LoggerQueue loggerQueue) {
        if(queueList.contains(loggerQueue)) {
            return;
        }

        queueList.add(loggerQueue);
    }

    public static void removeFromQueue(LoggerQueue loggerQueue) {
        if(!queueList.contains(loggerQueue)) {
            return;
        }

        queueList.remove(loggerQueue);
    }

    public static int getQueueSize() {
        return queueList.size();
    }

    public static void clearQueueList() {
        queueList.clear();
    }

    public static List<LoggerQueue> getQueueListCopy() {
        return new ArrayList<>(queueList);
    }
}
