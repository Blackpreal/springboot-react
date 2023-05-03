package com.sk.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.main.mail.Mail;
import com.sk.main.model.MemberDetails;
import com.sk.main.service.Service;

@RestController
@RequestMapping("/sk")
@CrossOrigin
public class MainController {

	@Autowired
	private Service service;
	
	@Autowired
	private Mail mail;

	@RequestMapping("/register")
	public void register(@RequestBody MemberDetails memberdetails) {

		service.register(memberdetails);
//		System.out.println(memberdetails.getMem_id());
//		System.out.println(memberdetails.getUserName());
//		System.out.println(memberdetails.getMobileNumber());
//		System.out.println(memberdetails.getMailID());
//		System.out.println(memberdetails.getPassword());
//		return "Succesfully";
	}
	
	@RequestMapping("/login")
	public boolean login(@RequestBody MemberDetails memberdetails) {
		return service.login(memberdetails);
	}
	
	@RequestMapping("/otp/{mail}")
	public Object getOtp(@PathVariable("mail") String mail ) {
		int random = (int) Math.floor(1000 +(Math.random()) * 9000) ;
		try {
			this.mail.sendMail(mail, "SK Travels", random+"");
			return random;
		} catch (Exception e) {
			System.out.println("false");
			return false;
			
		}
		
	}
}
