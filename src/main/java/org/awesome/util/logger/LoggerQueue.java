package org.awesome.util.logger;

import org.apache.juli.logging.Log;

public class LoggerQueue {
    private final String message;
    private final LoggerType loggerType;
    private final String date;
    private final long referenceId;
    private final String errorTrace;

    public LoggerQueue(String message, LoggerType loggerType, String date, long referenceId, String errorTrace) {
        this.message = message;
        this.loggerType = loggerType;
        this.date = date;
        this.referenceId = referenceId;
        this.errorTrace = errorTrace;
    }

    public String getMessage() {
        return message;
    }

    public LoggerType getLoggerType() {
        return loggerType;
    }

    public String getDate() {
        return date;
    }

    public long getReferenceId() {
        return referenceId;
    }

    public String getErrorTrace() {
        return errorTrace;
    }
}