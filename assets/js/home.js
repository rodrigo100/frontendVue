 const home = Vue.component('home',{
	template:'<div>HOME</div>'
});

const contact = Vue.component('contact',{
	template:'<div>Contacto</div>'
});

const routes=[
{path:'/home',component:home},
{path:'/contact',component:contact}
];

// instanciando el componete enrutador

const router =  new VueRouter({
	routes,
});





	Vue.component('usuarios',
	{
   
       
       template:'#usuarios-template',
       mounted()
       {
       				axios.get("https://randomuser.me/api/?results=50")
			.then((resultados)=>
				{
					
						this.usuarios=resultados.data.results;
					
					
					
				});

       },
       computed:
       {
       	filtrarBusqueda()
       	{
       		return this.usuarios.filter((usuario)=>{
       			
       			return usuario.name.first.includes(this.busqueda);
       			
       		});
       	}
       },
       data()
       {
       	return{
       		usuarios:[],
       		busqueda:'',

       	}
       }
         
	});



	Vue.component('usuario',{
		props:['usu'],
		template:'#usuario-template',
		
		
	});
// instancia principal de vue
	
	 vm = new Vue({
		el: "main",
		router,
		data:
		{
			
			

		},	
	})