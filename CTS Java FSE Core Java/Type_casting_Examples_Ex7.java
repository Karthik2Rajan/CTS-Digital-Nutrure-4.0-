public class TypeCastingDemo {
    public static void main(String[] args) {
        double decimalValue = 9.75;
        int intValue = (int) decimalValue; 

        System.out.println("Double to Int: " + intValue);

        int wholeNumber = 7;
        double convertedValue = wholeNumber; 

        System.out.println("Int to Double: " + convertedValue);
    }
}
