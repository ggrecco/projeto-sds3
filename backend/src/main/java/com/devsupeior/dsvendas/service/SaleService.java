package com.devsupeior.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsupeior.dsvendas.dto.SaleDTO;
import com.devsupeior.dsvendas.entities.Sale;
import com.devsupeior.dsvendas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public Page<SaleDTO> findAll(Pageable pageable){
		Page<Sale>  result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
}
