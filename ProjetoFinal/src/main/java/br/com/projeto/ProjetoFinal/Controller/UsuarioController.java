package br.com.projeto.ProjetoFinal.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.ProjetoFinal.Dao.UsuarioDAO;
import br.com.projeto.ProjetoFinal.Model.Usuario;

@CrossOrigin("*")
@RestController
public class UsuarioController {

	@Autowired
	private UsuarioDAO U;
	
	@GetMapping("/usuario")
	public ArrayList<Usuario> getAllUser(){
		ArrayList<Usuario> Lista = (ArrayList<Usuario>)U.findAll();
		return Lista;
	}
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> getUserById(@PathVariable int id){
		Usuario Encontrei = U.findById(id).orElse(null);
		if(Encontrei == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(Encontrei);
		
	}
	@PostMapping("/login")
	public ResponseEntity<Usuario> login(@RequestBody Usuario userDoForm){
		Usuario logado = U.findByEmailAndSenha(userDoForm.getEmail(), userDoForm.getSenha());
		if (logado == null) {
			return ResponseEntity.status(403).build();
		}
		else {
			return ResponseEntity.ok(logado);
		}
	}
	
	@PostMapping("/login/racf")
	public ResponseEntity<Usuario> loginPorRacf(@RequestBody Usuario userDoForm) {
		Usuario logado = U.findByRacfAndSenha(userDoForm.getRacf(), userDoForm.getSenha());
		if (logado == null) {
			return ResponseEntity.status(403).build();
		}
		else {
			return ResponseEntity.ok(logado);
		}
	}
}
