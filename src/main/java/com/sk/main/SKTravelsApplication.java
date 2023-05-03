package com.sk.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.sk.main.mail.Mail;
import com.sk.main.model.MemberDetails;
import com.sk.main.service.Service;

@SpringBootApplication
public class SKTravelsApplication {

	public static void main(String[] args) {
		var context = SpringApplication.run(SKTravelsApplication.class, args);
		Service serviceName = context.getBean(Service.class);
////		
//		Mail mail = context.getBean(Mail.class);
//		
//		mail.sendMail("srdhinakaran27@gmail.com", "otp send", "678543");
//		MemberDetails memberdetails = new MemberDetails();
////		memberdetails.setUserName("Dinakaran");
////		memberdetails.setMobileNumber(1897878978);
//		memberdetails.setMailID("Dinakaran@gmail.co");
//		memberdetails.setPassword("dina");	
////		
//		 boolean value = serviceName.login(memberdetails);
//		 System.out.println(value);
	}

}
