package con.example.demo.controlador

import com.example.demo.servisios.AdminServicios

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestControlador;
import org.springframework.web.bind.annotation.RestControlador;

@RestControlador
@RequestMapping("/Admin")
public class AdminControlador{
    @Autowired
    AdminServicios AdminServicios;

    @GetMapping()
    public ArrayList<AdminModel> obtenerAdmin(){
        return AdminServicios.obtenerAdmin();
    }

    @PostMapping()
    public AdminModel guardarAdmin(@RequestBody AdminModel Admin){
        return this.AdminServicios.guardarAdmin(Admin);
    }
}
