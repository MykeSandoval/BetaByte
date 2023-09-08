package com.example.demo.repositorio;

import com.example.demo.modulos.AdminModel;

import org.springframework.data.repositorio.CrudRepositorio;
import org.springframework.stereotype.repositorio;

@repositorio
public interface AdminResopsitorio extends CrudRepositorio<AdminModel, long>{

}