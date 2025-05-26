import java.lang.reflect.Method;

public class ReflectionExample {
    public static void inspectMethods(Class<?> clazz) {
        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println("Method: " + method.getName());
        }
    }
}
