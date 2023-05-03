package com.sk.main.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.sk.main.model.MemberDetails;
import com.sk.main.repository.MemberRepository;

@org.springframework.stereotype.Service


public class Service implements ServiceImplement {

	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public void register(MemberDetails memberdetails) {
		
		memberRepository.save(memberdetails);
		
	}
	public boolean login(MemberDetails memberdetails) {
		List<MemberDetails> memberDetails = new ArrayList<>();
		memberDetails.addAll(memberRepository.findAll());
		for(MemberDetails member : memberDetails) {
			if(member.getMailID().equals(memberdetails.getMailID())&& member.getPassword().equals(memberdetails.getPassword())){
				return true;
			}
		}
		return false;
		
	}
}
