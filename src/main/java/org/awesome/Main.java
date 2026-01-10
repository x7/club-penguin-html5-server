package org.awesome;

import org.awesome.preflight.ConfigCheck;
import org.awesome.preflight.DatabaseCheck;
import org.awesome.util.config.Config;
import org.awesome.util.config.ConfigHelper;
import org.awesome.util.logger.Logger;
import org.awesome.util.logger.LoggerType;
import org.awesome.util.logger.LoggerUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.file.Path;

/*
    7th january task
    load all game data into a local cache before server starts up (preflight type task)
    improve file helper
    setup logger
    setup config
*/

@SpringBootApplication
public class Main {
    public static Path root = Path.of("").toAbsolutePath().resolve("src").resolve("main").resolve("java").resolve("org").resolve("awesome");
    public static String environment = "development";

    public static void main(String[] args) {
        // first check config
        ConfigCheck.checkConfig();
//
        // second check database
        DatabaseCheck.checkDatabase();
//
        // start application
        startSpringApplication(args);
    }

    public static void startSpringApplication(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}