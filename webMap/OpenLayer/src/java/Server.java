/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author lee
 */
public class Server extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    private final static String DBurl = "jdbc:postgresql://127.0.0.1:5432/testvector";
    private final static String user = "postgres";
    private final static String password = "postgres";
    private Connection conn;
    private HttpServletRequest request;
    private HttpServletResponse response;
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
//        try (PrintWriter out = response.getWriter()) {
        try{
            /* TODO output your page here. You may use following sample code. */
            this.request = request;
            this.response = response;
            doRequest(request,response);
            
            
        }catch(Exception e){
            out.println(e.toString());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
    private boolean doRequest(HttpServletRequest request,HttpServletResponse response){
        String type = request.getParameter("type");
        if(type.equals(null)){
            try {
                response.getWriter().println("error REQUEST!");
            } catch (IOException ex) {
                Logger.getLogger(Server.class.getName()).log(Level.SEVERE, null, ex);
            }
            return false;
        }
        
        if(type.equals("save")){
         DatabaseServer databaseServer = new DatabaseServer(request,response);
         databaseServer.save();
        }else if(type.equals("get")){
         DatabaseServer databaseServer = new DatabaseServer(request,response);
         databaseServer.get();
        }
        return false;
    }
    
//     private void connectDatabase() {
//        try {
//            Class.forName("org.postgresql.Driver");
//            conn = DriverManager.getConnection(DBurl,user,password);
//             
//        } catch (Exception ex) {
//            
//        }
//    }
//
//    public void save() {
//        try {
//            PreparedStatement st = conn.prepareStatement("select * from geopoint;");
//            ResultSet rs = st.executeQuery();
//            while(rs.next()){
//               response.getWriter().println(rs.getString(1));
//            }
//            rs.close();
//            conn.close();
//        } catch (Exception ex) {
//           
//        }
//    }

}
