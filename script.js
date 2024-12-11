    
    function cadastrar(){

       
        document.getElementById('cadastrar').style.display = 'block'
        document.getElementById('editar').style.display = 'none'
        document.getElementById('deletar').style.display = 'none'
        document.getElementById('listar').style.display = 'none'
        
    }
    
    
    
    
    
    function editar(){
        
    
        document.getElementById('cadastrar').style.display = 'none'
        document.getElementById('editar').style.display = 'block'
        document.getElementById('deletar').style.display = 'none'
        document.getElementById('listar').style.display = 'none'
        
        
    }
    
        
    
    function deletar(){
        
   
        document.getElementById('cadastrar').style.display = 'none'
        document.getElementById('editar').style.display = 'none'
        document.getElementById('deletar').style.display = 'block'
        document.getElementById('listar').style.display = 'none'
    
    }function listar(){
    
  
    document.getElementById('cadastrar').style.display = 'none'
    document.getElementById('editar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'block'
    }