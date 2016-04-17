package org.smart.expense.mainhandlers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


/**
 * @author nithin prasad
 *
 */
public class MainHandler {

	/**
	 * @param request
	 * @param response 
	 * @throws IOException 
	 */
	public void mainReceiver(HttpServletRequest request, HttpServletResponse response) throws IOException {
		BufferedReader br;
		String json = "";
		try {
			br = new BufferedReader(new InputStreamReader(request.getInputStream()));
			
	        if(br != null){
	        	json = br.readLine();
	        }
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		JSONParser jsonParser=new JSONParser();
        Object object=null;
        try {
        	object=jsonParser.parse(json);
		} catch (ParseException e) {
		}
        HashMap<String, Object> jsonMap=new HashMap<String, Object>();
        if(object instanceof HashMap<?, ?>)
        {
        	jsonMap = (HashMap<String, Object>) object;
        }
		
        HashMap<String, Object> responseMap=new HashMap<String, Object>();
        JSONObject jsonObject=new JSONObject();
        String responseJson=jsonObject.toJSONString(jsonMap);
        //Fetch From database based on these user ID 
        response.setContentType("application/json"); 
        response.setCharacterEncoding("utf-8"); 
        response.getWriter().write(responseJson);
	}

}
