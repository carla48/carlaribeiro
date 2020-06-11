package com.carla.cost.dao;

import org.springframework.stereotype.Repository;

import com.carla.cost.model.Cost;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface CostDao extends CrudRepository<Cost, Long> {

}
