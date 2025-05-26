public record Person(String name, int age) {}

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25),
            new Person("Bob", 30),
            new Person("Charlie", 19)
        );

        List<Person> adults = people.stream()
                                    .filter(p -> p.age() >= 21)
                                    .collect(Collectors.toList());

        System.out.println("Adults: " + adults);
    }
}
