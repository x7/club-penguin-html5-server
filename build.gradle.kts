plugins {
    id("java")
    id("org.springframework.boot") version "4.0.1"
    id("io.spring.dependency-management") version "1.1.7"
}

group = "org.awesome"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-websocket")
    implementation("org.postgresql:postgresql:42.7.8")
    implementation("com.fasterxml.jackson.core:jackson-databind:2.17.2")
    implementation("io.github.classgraph:classgraph:4.8.181")
}

tasks.test {
    useJUnitPlatform()
}