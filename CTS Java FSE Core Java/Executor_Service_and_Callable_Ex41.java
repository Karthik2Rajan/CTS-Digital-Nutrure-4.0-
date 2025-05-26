import java.util.concurrent.*;

public class ExecutorExample {
    public static void executeTasks() {
        ExecutorService executor = Executors.newFixedThreadPool(5);
        Callable<String> task = () -> "Task completed";

        try {
            Future<String> result = executor.submit(task);
            System.out.println(result.get());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }
    }
}
