const imagenes2 = document.querySelectorAll('.img-galeria2')
const imagenesLight2 = document.querySelector('.agregar-imagen2')
const contenedorLight2 = document.querySelector('.imagen-light2')

// console.log(imagenes)
// console.log(imagenesLight)
// console.log(contenedorLight)

imagenes2.forEach(imagen =>{
	imagen.addEventListener('click', ()=>{
		aparecerImagen2(imagen.getAttribute('src'))
	})
})



contenedorLight2.addEventListener('click', (e)=>{
	if(e.target !== imagenesLight2){
		contenedorLight2.classList.toggle('show')
		imagenesLight2.classList.toggle('showImage')
	}
})

const aparecerImagen2 = (imagen)=>{
	imagenesLight2.src = imagen
	contenedorLight2.classList.toggle('show')
	imagenesLight2.classList.toggle('showImage')
}











