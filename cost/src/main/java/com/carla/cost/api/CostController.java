package com.carla.cost.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carla.cost.model.Cost;
import com.carla.cost.service.CostService;

@RequestMapping("cost")
@RestController
@Transactional
public class CostController {
	@Autowired
	private final CostService costService;
    
    @Autowired
    public CostController(CostService costService) {
        this.costService = costService;
    }
   
    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public void addGasto(@RequestBody Cost gasto) {
    	this.costService.save(gasto);
    }
    
    @GetMapping
    public List<Cost> getAll() {
        return this.costService.findAll();
    }
    
    @GetMapping(path = "{id}")
    public Cost getCostById(@PathVariable("id") Long id) {
        return this.costService.findOne(id);
    }
    
    @DeleteMapping(path = "{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteById(@PathVariable("id") Long id) {
    	this.costService.deleteById(id);
    }
    
}
