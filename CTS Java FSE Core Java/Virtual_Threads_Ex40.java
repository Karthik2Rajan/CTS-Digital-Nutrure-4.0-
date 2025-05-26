public class VirtualThreadsExample {
    public static void launchThreads() {
        for (int i = 0; i < 100000; i++) {
            Thread.startVirtualThread(() -> System.out.println("Virtual thread running"));
        }
    }
}
