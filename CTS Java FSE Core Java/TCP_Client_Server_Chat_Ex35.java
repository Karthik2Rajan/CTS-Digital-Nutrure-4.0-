import java.io.*;
import java.net.*;

public class TCPServer {
    public static void startServer() {
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            Socket socket = serverSocket.accept();
            handleConnection(socket);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void handleConnection(Socket socket) {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {
            out.println("Welcome to the server!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
