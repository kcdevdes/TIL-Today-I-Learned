#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <openssl/aes.h>
#include <openssl/rand.h>

#define AES_BLOCK_SIZE 16

void handleErrors(void)
{
    fprintf(stderr, "Error occurred.\n");
    exit(EXIT_FAILURE);
}

void encryptFile(const char *inputFile, const char *outputFile, const unsigned char *key)
{
    FILE *inFile = fopen(inputFile, "rb");
    FILE *outFile = fopen(outputFile, "wb");

    if (!inFile || !outFile) {
        perror("Error opening file");
        exit(EXIT_FAILURE);
    }

    // Generate a random IV
    unsigned char iv[AES_BLOCK_SIZE];
    if (RAND_bytes(iv, sizeof(iv)) != 1) {
        handleErrors();
    }

    fwrite(iv, 1, AES_BLOCK_SIZE, outFile);

    // Set up the AES key
    AES_KEY aesKey;
    if (AES_set_encrypt_key(key, 256, &aesKey) != 0) {
        handleErrors();
    }

    unsigned char inBuffer[AES_BLOCK_SIZE];
    unsigned char outBuffer[AES_BLOCK_SIZE];

    int bytesRead;
    while ((bytesRead = fread(inBuffer, 1, sizeof(inBuffer), inFile)) > 0) {
        // Encrypt the data
        AES_cbc_encrypt(inBuffer, outBuffer, bytesRead, &aesKey, iv, AES_ENCRYPT);
        fwrite(outBuffer, 1, bytesRead, outFile);
    }

    fclose(inFile);
    fclose(outFile);
}

int main()
{
    // Replace 'your_key' with a strong, secret key of 32 bytes (256 bits)
    const unsigned char key[32] = "your_key";

    // Replace 'input.txt' and 'encrypted_output.dat' with your file names
    const char *inputFile = "input.txt";
    const char *outputFile = "encrypted_output.dat";

    encryptFile(inputFile, outputFile, key);

    printf("Encryption complete.\n");

    return EXIT_SUCCESS;
}
