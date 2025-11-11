FROM eclipse-temurin:23-jdk

# Set working directory
WORKDIR /app

# Copy Gradle wrapper and build files
COPY gradlew /app/
COPY build.gradle settings.gradle /app/
COPY gradle /app/gradle

# Add execute permission to gradlew
RUN chmod +x /app/gradlew

# Pre-download dependencies
RUN ./gradlew build --no-daemon || true

# Copy only source code for runtime development
COPY src /app/src

# Start application in dev mode
CMD ["./gradlew", "bootRun", "--no-daemon"]