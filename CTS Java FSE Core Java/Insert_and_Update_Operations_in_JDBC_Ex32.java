import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class JDBCInsertUpdate {
    public static void insertStudent(int id, String name) {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/studentDB", "root", "password");
             PreparedStatement pstmt = conn.prepareStatement("INSERT INTO students (id, name) VALUES (?, ?)")) {
            
            pstmt.setInt(1, id);
            pstmt.setString(2, name);
            pstmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void updateStudent(int id, String name) {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/studentDB", "root", "password");
             PreparedStatement pstmt = conn.prepareStatement("UPDATE students SET name = ? WHERE id = ?")) {
            
            pstmt.setString(1, name);
            pstmt.setInt(2, id);
            pstmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
