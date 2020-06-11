package com.carla.cost.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carla.cost.dao.CostDao;
import com.carla.cost.model.Cost;

@Service
public class CostService {
	
	@Autowired
    CostDao gastoDao;
	
	public CostService() {
		
	}
	
	public List<Cost> findAll() {
		return (List<Cost>) gastoDao.findAll();
	}
	
	public Cost findOne(Long id) {
		return gastoDao.findById(id).get();
	}
	
	public Cost save(Cost cost) {
		return gastoDao.save(cost);
	}
	
	public void deleteById(Long id) {
		gastoDao.deleteById(id);
	}
}
