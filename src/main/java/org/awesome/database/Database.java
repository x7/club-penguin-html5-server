package org.awesome.database;

import io.github.classgraph.ClassGraph;
import io.github.classgraph.ScanResult;
import org.awesome.annotations.DatabaseInit;
import org.awesome.annotations.DatabaseModal;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.sql.Connection;
import java.sql.DriverManager;

// TODO: Add a test sql to see if the database is responding ok
public class Database {
    private static Connection database;

    public static void connectToDatabase(String host, int port, String username, String password, String databaseName) {
        String connectionUrl = "jdbc:postgresql://" + host + ":" + port + "/" + databaseName;

        try {
            database = DriverManager.getConnection(connectionUrl, username, password);
            System.out.println(database.getClientInfo());
            System.out.println("Successfully connected to database");
        } catch (Exception error) {
            error.printStackTrace();
        }
    }

    public static Connection getDatabase() {
        return database;
    }

    public static void initAll(String basePackage) {
        try (ScanResult scan = new ClassGraph().enableAnnotationInfo().enableMethodInfo().acceptPackages(basePackage).scan()) {
            var modelClasses = scan.getClassesWithAnnotation(DatabaseModal.class.getName());
            if(modelClasses.isEmpty()) {
                System.out.println("No modals found database will not init any modals");
                return;
            }

            for(var classInfo : modelClasses) {
                Class<?> clazz = classInfo.loadClass();

                for (Method method : clazz.getDeclaredMethods()) {
                    if(!method.isAnnotationPresent(DatabaseInit.class)) {
                        continue;
                    }

                    if(!Modifier.isStatic(method.getModifiers()) || method.getParameterCount() != 0 || method.getReturnType() != void.class) {
                        System.out.println("@DatabaseInit must be static void with no args");
                        continue;
                    }

                    try {
                        method.setAccessible(true);
                        method.invoke(null);
                    } catch (Exception error) {
                        throw new RuntimeException("Failed DB init: " + clazz.getName() + "#" + method.getName(), error);
                    }
                }
            }
        }
    }
}
