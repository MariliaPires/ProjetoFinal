package br.com.projeto.ProjetoFinal.Dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.projeto.ProjetoFinal.Model.Software;

public interface SoftwareDAO extends CrudRepository<Software, Integer> {
	public List<Software> findByQtdEstoqueGreaterThan(int qtdEstoque);
}
