package com.carla.cost.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CostExceptionController {
	@ExceptionHandler(value = GenericException.class)
	public ResponseEntity<Object> exception(GenericException exception) {
	      return new ResponseEntity<>(exception.getMessage(), HttpStatus.FOUND);
	}
}
