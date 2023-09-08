package com.example.demo.servisios;

import java.util.ArrayList;

import com.example.demo.modulos.AdminModel;
import com.example.demo.repositorio.AdminResopsitorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.servisios;

@servisios
public class AdminServicios {
    @Autowired
    AdminResopsitorio AdminResopsitorio;

    public ArrayList<AdminModel> obtenerAdmin(){
        return (ArrayList<AdminModel>) AdminResopsitorio.find.All();
    }

    public AdminModel guardarAdmin(AdminModel Admin){
        return AdminResopsitorio.save(Admin);
    }
}