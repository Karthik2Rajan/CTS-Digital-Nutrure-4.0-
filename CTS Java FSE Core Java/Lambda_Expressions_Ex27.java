import java.util.Arrays;
import java.util.List;
import java.util.Collections;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Zara", "Alex", "Brian", "Daniel");

        // Sorting using a lambda expression
        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("Sorted names: " + names);
    }
}
