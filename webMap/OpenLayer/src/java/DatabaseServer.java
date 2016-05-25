/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author lee
 */
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.*;

public class DatabaseServer {
    private final static String DBurl = "jdbc:postgresql://127.0.0.1:5432/testvector";
    private final static String user = "postgres";
    private final static String password = "postgres";
    private Connection conn;
    private HttpServletRequest request;
    private HttpServletResponse response;

    public DatabaseServer(HttpServletRequest request,HttpServletResponse response) {
        connectDatabase();
        this.request = request;
        this.response = response;
    }

    private void connectDatabase() {
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(DBurl,user,password);
             
        } catch (Exception ex) {
            Logger.getLogger(DatabaseServer.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void save() {
        String geo;
        String coor;
        String sql;
        JSONObject json = new JSONObject();
        try {
            geo = request.getParameter("geo");
            coor = request.getParameter("coor");
            sql = "insert into " + geo +
                    " (userid,the_geom) values ('admin',ST_GeometryFromText('" +
                    coor + "',900913));";
            PreparedStatement st = conn.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            json.put("success","success");
            response.getWriter().write(json.toString());
            rs.close();
            conn.close();
        } catch (Exception ex) {
            Logger.getLogger(DatabaseServer.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void get(){
        String sql;
        JSONObject json = new JSONObject();
        try {
            sql = "select userid,the_gemo from geopoint;";
            PreparedStatement st = conn.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            while(rs.next()){
                json.put(rs.getString(1),rs.getString(2));
            }
            response.getWriter().write(json.toString());
            rs.close();
            conn.close();
        } catch (Exception ex) {
            Logger.getLogger(DatabaseServer.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
