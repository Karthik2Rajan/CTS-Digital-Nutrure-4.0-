public class OperatorPrecedenceDemo {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 10 / 2 + 3 * 4;

        System.out.println("Without parentheses (10 + 5 * 2): " + result1);
        System.out.println("With parentheses ((10 + 5) * 2): " + result2);
        System.out.println("Mixed operations (10 / 2 + 3 * 4): " + result3);
    }
}
