package smart.expense.war.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.smart.expense.mainhandlers.MainHandler;

public class ServiceCotroller extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public ServiceCotroller() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		MainHandler mainHandler=new MainHandler();
		mainHandler.mainReceiver(request,response);
	}

}
