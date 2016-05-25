/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package csu.gis.map;


import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.*;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author pcwang
 */
public class MapServer extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
//        response.setContentType("text/html;charset=UTF-8");
//        try (PrintWriter out = response.getWriter()) {
//            /* TODO output your page here. You may use following sample code. */
//            out.println("<!DOCTYPE html>");
//            out.println("<html>");
//            out.println("<head>");
//            out.println("<title>Servlet MapServer</title>");            
//            out.println("</head>");
//            out.println("<body>");
//            out.println("<h1>Servlet MapServer at " + request.getContextPath() + "</h1>");
//            out.println("</body>");
//            out.println("</html>");
//        }
        createMap();
        
        getSpatialData();
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

    private void createMap() {
        try {
            BufferedImage img = new BufferedImage(800, 600, BufferedImage.TYPE_4BYTE_ABGR);
            Graphics2D g = img.createGraphics();
            g.setColor(Color.red);
            g.drawArc(100, 100, 800, 600, 0, 90);
            g.dispose();
            File outputfile = new File("/tmp/saved2.png");
            ImageIO.write(img, "png", outputfile);
        } catch (IOException ex) {
            Logger.getLogger(MapServer.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void getSpatialData() {
        try {
            Class.forName("org.postgresql.Driver");
            Connection conn = DriverManager.getConnection("jdbc:postgresql://127.0.0.1:5432/gisdb",
                    "pcwang","123456");
            PreparedStatement st = conn.prepareStatement(
                    "select st_asgeojson(_geo) from testlines"
            );
            ResultSet rs = st.executeQuery();
            while(rs.next()){
                _geometries.add(rs.getString(1));
            }
            rs.close();
            conn.close();
        } catch (Exception ex) {
          
            Logger.getLogger(MapServer.class.getName()).log(Level.SEVERE, null, ex);
        }
    
    }

    
    protected LinkedList<String> _geometries 
            = new LinkedList<String> (); 
}
