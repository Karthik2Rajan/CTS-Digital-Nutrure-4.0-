import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class JDBCTransaction {
    public static void transferFunds(int fromAccount, int toAccount, double amount) {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bankDB", "root", "password")) {
            conn.setAutoCommit(false); // Begin transaction

            try (PreparedStatement debitStmt = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
                 PreparedStatement creditStmt = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {

                debitStmt.setDouble(1, amount);
                debitStmt.setInt(2, fromAccount);
                debitStmt.executeUpdate();

                creditStmt.setDouble(1, amount);
                creditStmt.setInt(2, toAccount);
                creditStmt.executeUpdate();

                conn.commit(); // Commit transaction
            } catch (Exception e) {
                conn.rollback(); // Rollback on error
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
