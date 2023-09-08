package com.example.demo.modulos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

public class Admin {
    
}

@Entity
@Table(name = "admin")
public class Admin {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private long id;

    @Column(name= "id_admin")
    private int8 id_admin;

    @Column (name= "name_admin" )
    private String name_admin;

    @Column (name ="fecha_entrada")
    private LocalData fecha_entrada;

    @Column (name = "id")
    private int8 id;

    @Column (name = "name") 
    private String name;

    @Column (name = "pedidos")
    private int2 pedidos;

    @Column (name = "fecha_pedidos")
    private LocalData fecha_pedidos;

    public admin(){

    }

    public admin(long id_admin, String name_admin, LocalData fecha_entrada, int8 id, texto name, int4 pedidos, LocalData fecha_pedidos){
        this.int8 = id_admin;
        this.name_admin = String;
        this.fecha_entrada = LocalData;
        this.id = int8;
        this.name = String;
        this.pedidos = int2;
        this.fecha_pedidos = LocalData;
    }

    public String getId_admin(){return this.id_admin;}
    public void setId_admin(String descripcion){this.id_admin = id_admin;}
    
    public String getName_admin(){return this.name_admin;}
    public void setName_admin(String descripcion){this.id_admin = name_admin;}
    
    public LocalData getFecha_entrada(){return fecha_entrada;}
    public void setFecha_entrada(LocalData fecha_entrada){this.fecha_entrada = fecha_entrada;}

    public int8 getId(){return id;}
    public void setId(int8 id){this.id = id;}

    public String getName(){return this.name;}
    public void setName(String name){this.name = name;} 

    public int2 getPedidos(){return pedidos;}
    public void setPedidos(int2 pedidos){this.pedidos = pedidos;}

    public LocalData getFecha_pedidos(){return fecha_pedidos;}
    public void setFecha_pedidos(LocalData fecha_pedidos){this.fecha_pedidos = fecha_pedidos;}

}





