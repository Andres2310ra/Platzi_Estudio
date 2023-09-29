const seleccionarMascotaStyle = document.getElementById('seleccionar-mascota')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const mensaje = document.getElementById('mensaje-batalla')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('btn-fuego')
const botonAgua = document.getElementById('btn-agua')
const botonTierra = document.getElementById('btn-tierra')
const reiniciar = document.getElementById('btn-reiniciar')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const tarjeta1 = document.getElementById('t-1')
const tarjeta2 = document.getElementById('t-2')
const tarjeta3 = document.getElementById('t-3')
const tarjetaSeleccionada1 = document.getElementById('t1-select')
const tarjetaSeleccionada2 = document.getElementById('t2-select')
const tarjetaSeleccionada3 = document.getElementById('t3-select')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-enemigo')

let ataqueJugador = ''
let ataqueEnemigo = ''
let vidasJugador = 3
let vidasEnemigo = 3
let spanMascotaJugador = ''
let spanMascotaEnemigo = ''

//  Clase Mokepon 
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

//  Objetos Mokepon 
let monster1 = new Mokepon('Monster 1', '../img/Monster_Mokepon/tarjeta_1.gif', '3')
let monster2 = new Mokepon('Monster 2', '../img/Monster_Mokepon/tarjeta_2.gif', '3')
let monster3 = new Mokepon('Monster 3', '../img/Monster_Mokepon/tarjeta_3.gif', '3')
let monster4 = new Mokepon('Monster 4', '../img/Monster_Mokepon/tarjeta_4.gif', '3')
let monster5 = new Mokepon('Monster 5', '../img/Monster_Mokepon/tarjeta_5.gif', '3')
let monster6 = new Mokepon('Monster 6', '../img/Monster_Mokepon/tarjeta_6.gif', '3')
let monster7 = new Mokepon('Monster 7', '../img/Monster_Mokepon/tarjeta_7.gif', '3')
let monster8 = new Mokepon('Monster 8', '../img/Monster_Mokepon/tarjeta_8.gif', '3')
let monster9 = new Mokepon('Monster 9', '../img/Monster_Mokepon/tarjeta_9.gif', '3')
let monster10 = new Mokepon('Monster 10', '../img/Monster_Mokepon/tarjeta_10.gif', '3')
let monster11 = new Mokepon('Monster 11', '../img/Monster_Mokepon/tarjeta_11.gif', '3')
let monster12 = new Mokepon('Monster 12', '../img/Monster_Mokepon/tarjeta_12.gif', '3')
let monster13 = new Mokepon('Monster 13', '../img/Monster_Mokepon/tarjeta_13.gif', '3')
let monster14 = new Mokepon('Monster 14', '../img/Monster_Mokepon/tarjeta_14.gif', '3')
let monster15 = new Mokepon('Monster 15', '../img/Monster_Mokepon/tarjeta_15.gif', '3')
let monster16 = new Mokepon('Monster 16', '../img/Monster_Mokepon/tarjeta_16.gif', '3')
let monster17 = new Mokepon('Monster 17', '../img/Monster_Mokepon/tarjeta_17.gif', '3')
let monster18 = new Mokepon('Monster 18', '../img/Monster_Mokepon/tarjeta_18.gif', '3')
let monster19 = new Mokepon('Monster 19', '../img/Monster_Mokepon/tarjeta_19.gif', '3')
let monster20 = new Mokepon('Monster 20', '../img/Monster_Mokepon/tarjeta_20.gif', '3')
let monster21 = new Mokepon('Monster 21', '../img/Monster_Mokepon/tarjeta_21.gif', '3')
let monster22 = new Mokepon('Monster 22', '../img/Monster_Mokepon/tarjeta_22.gif', '3')
let monster23 = new Mokepon('Monster 23', '../img/Monster_Mokepon/tarjeta_23.gif', '3')
let monster24 = new Mokepon('Monster 24', '../img/Monster_Mokepon/tarjeta_24.gif', '3')
let monster25 = new Mokepon('Monster 25', '../img/Monster_Mokepon/tarjeta_25.gif', '3')
let monster26 = new Mokepon('Monster 26', '../img/Monster_Mokepon/tarjeta_26.gif', '3')
let monster27 = new Mokepon('Monster 27', '../img/Monster_Mokepon/tarjeta_27.gif', '3')
let monster28 = new Mokepon('Monster 28', '../img/Monster_Mokepon/tarjeta_28.gif', '3')
let monster29 = new Mokepon('Monster 29', '../img/Monster_Mokepon/tarjeta_29.gif', '3')
let monster30 = new Mokepon('Monster 30', '../img/Monster_Mokepon/tarjeta_30.gif', '3')


function iniciarJuego() {
    seleccionarMascotaStyle.addEventListener('click', styleMascotaJugador)
    sectionSeleccionarAtaque.style.display = 'none'
    mensaje.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    reiniciar.addEventListener('click', reiniciarJuego)
}

function styleMascotaJugador() {

    if (inputHipodoge.checked) {
        tarjeta1.style.border = '2px solid white'
        tarjeta1.style.outline = '2px solid white'
        tarjeta1.style.backgroundColor = 'transparent'
        tarjetaSeleccionada1.innerHTML = 'Selected'

        tarjeta2.style.border = '2px solid #007200'
        tarjeta2.style.outline = '2px solid #006400'
        tarjeta2.style.backgroundColor = '#3b302f'
        tarjetaSeleccionada2.innerHTML = ''

        tarjeta3.style.border = '2px solid #007200'
        tarjeta3.style.outline = '2px solid #006400'
        tarjeta3.style.backgroundColor = '#3b302f'
        tarjetaSeleccionada3.innerHTML = ''

    } else if (inputCapipepo.checked) {
        tarjeta2.style.border = '2px solid white'
        tarjeta2.style.outline = '2px solid white'
        tarjeta2.style.backgroundColor = 'transparent'
        tarjetaSeleccionada2.innerHTML = 'Selected'

        tarjeta3.style.border = '2px solid #007200'
        tarjeta3.style.outline = '2px solid #006400'
        tarjeta3.style.backgroundColor = '#3b302f'
        tarjetaSeleccionada3.innerHTML = ''

        tarjeta1.style.border = '2px solid #007200'
        tarjeta1.style.outline = '2px solid #006400'
        tarjeta1.style.backgroundColor = '#3b302f'
        tarjetaSeleccionada1.innerHTML = ''

    } else if (inputRatigueya.checked) {
        tarjeta3.style.border = '2px solid white'
        tarjeta3.style.outline = '2px solid white'
        tarjeta3.style.backgroundColor = 'transparent'
        tarjetaSeleccionada3.innerHTML = 'Selected'

        tarjeta1.style.border = '2px solid #007200'
        tarjeta1.style.outline = '2px solid #006400'
        tarjeta1.style.backgroundColor = '#3b302f'
        tarjetaSeleccionada1.innerHTML = ''

        tarjeta2.style.border = '2px solid #007200'
        tarjeta2.style.outline = '2px solid #006400'
        tarjeta2.style.backgroundColor = '#3b302f'
        tarjetaSeleccionada2.innerHTML = ''
    }
}

function seleccionarMascotaJugador() {

    spanMascotaJugador = document.getElementById('mascota-jugador')
    spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Carlitos"
        spanMascotaEnemigo.innerHTML = seleccionarMascotaEnemigo()
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'

    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Chamuko"
        spanMascotaEnemigo.innerHTML = seleccionarMascotaEnemigo()
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'

    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Angelina"
        spanMascotaEnemigo.innerHTML = seleccionarMascotaEnemigo()
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'

    } else {
        Swal.fire(
            'Selecciona una Mascota',
            'Sin Mascota no Puedes Jugar',
            'error'
        )
    }
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = ['Carlitos', 'Chamuko', 'Angelina']
    let mascotaAleatoria = aleatorio(0, 2)
    return mascotaEnemigo[mascotaAleatoria]
}

function seleccionarAtaqueEnemigo() {
    let ataqueMascota = ['Fuego', 'Agua', 'Tierra']
    let ataqueAleatorio = aleatorio(0, 2)
    return ataqueMascota[ataqueAleatorio]
}

function ataqueFuego() {
    if (!spanMascotaJugador == '') {
        ataqueJugador = "Fuego"
        ataqueEnemigo = seleccionarAtaqueEnemigo()
        combate()
    }
}

function ataqueAgua() {
    if (!spanMascotaJugador == '') {
        ataqueJugador = "Agua"
        ataqueEnemigo = seleccionarAtaqueEnemigo()
        combate()
    }
}

function ataqueTierra() {
    if (!spanMascotaJugador == '') {
        ataqueJugador = "Tierra"
        ataqueEnemigo = seleccionarAtaqueEnemigo()
        combate()
    }
}

function combate() {
    let vida = '❤️'

    mensaje.style.display = 'flex'

    if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra" || ataqueJugador == "Agua" && ataqueEnemigo == "Fuego" || ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        mensajeJuego("Daño al Enemigo 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = ''
        spanVidasJugador.innerHTML = ''

    } else if (ataqueJugador == ataqueEnemigo) {
        mensajeJuego("Sin daños 😮, Ataques Igualados")
        spanVidasJugador.innerHTML = ''
        spanVidasEnemigo.innerHTML = ''
        //vidasJugador++
        //vidasEnemigo++

    } else {
        mensajeJuego("Te han hecho Daño 🥶")
        vidasJugador--
        spanVidasEnemigo.innerHTML = ''
        spanVidasJugador.innerHTML = ''

    }

    for (let i = 0; i < vidasJugador; i++) {
        spanVidasJugador.innerHTML += vida
    }

    for (let i = 0; i < vidasEnemigo; i++) {
        spanVidasEnemigo.innerHTML += vida
    }

    if (vidasJugador == 0) {
        Swal.fire(
            '¡La Batalla Estuvo Dificil!',
            'Tu Mascota Perdio la Batalla',
            'error'
        )
        spanVidasJugador.innerHTML = '☠️'
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true
        sectionReiniciar.style.display = 'block'

    } else if (vidasEnemigo == 0) {
        Swal.fire(
            '¡Buen Trabajo!',
            'Tu Mascota Gano la Batalla',
            'success'
        )
        spanVidasEnemigo.innerHTML = '☠️'
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true
        sectionReiniciar.style.display = 'block'
    }

}

function mensajeJuego(resultado) {
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)