import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter student ID and name (type -1 to stop):");
        while (true) {
            System.out.print("ID: ");
            int id = scanner.nextInt();
            if (id == -1) break;
            scanner.nextLine(); // Consume newline
            System.out.print("Name: ");
            String name = scanner.nextLine();
            students.put(id, name);
        }

        System.out.print("Enter ID to retrieve student name: ");
        int searchId = scanner.nextInt();
        System.out.println("Student Name: " + students.getOrDefault(searchId, "Not Found"));
    }
}
