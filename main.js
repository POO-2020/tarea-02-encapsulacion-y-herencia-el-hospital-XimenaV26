import Nombre from './Nombre.js';
import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
import Cita from './cita.js';
import Hospital from './hospital.js';
import PacienteAsegurado from "./paciente-asegurado.js";

class Main {
  constructor() {
    this.tiempo1 = new Tiempo({ hora: 11, minuto: 30, periodo: 'am' });
    this.tiempo2 = new Tiempo({ hora: 7, minuto: 25, periodo: 'pm' });

    this.fecha = new Fecha(22, 3, 2020);

    this.nombre = new Nombre('Amanda', 'Guitierrez', 'Hernandez');
    this.nombre2 = new Nombre('Daniela', 'Galindo', 'Ochoa');

    /**this.paciente = new Paciente(this.nombre, this.fecha, 3123454367);**/
    let pa_1 = {
      nombre: this.nombre,
      fechaNacimiento: this.fecha,
      telefono: 3122093542
    }
    this.paciente = new Paciente(pa_1);

    //this.doctor = new Doctor(this.nombre2, 'Cardiólogo', 3125677896, 445566);

    let doc_1= {
      nombre: this.nombre2,
      especialidad: "Pediatra",
      telefono: 3125674390,
      cedula: 234599
    }
    this.doctor = new Doctor(doc_1);

    //this.cita = new Cita(this.fecha, this.tiempo1, this.doctor, this.paciente);

    let ci_1 = {
      fecha: this.fecha,
      hora: this.tiempo1,
      doctor: this.doctor,
      paciente: this.paciente
    }
    this.cita = new Cita(ci_1)

    //this.hospital = new Hospital('Puerta de Hierro', 'Av. Constitución 100');

    let h_1 ={
      nombre: "IMSS",
      direccion: "Av. Hospital, Villa de Alvarez"
    }
    this.hospital = new Hospital(h_1)

    let as_1 ={
      nombre: new Nombre("Ximena", "Velasco", "Godinez"),
      fechaNacimiento: this.fecha,
      telefono: 3122098654,
      numeroPoliza: 3567,
      fechaFinVigencia: new Fecha(21,3,2022),
      compañia: "GNP"
    }
    this.seguro = new PacienteAsegurado(as_1)
  }

  PacienteAsegurado(){
    console.log(this.seguro.getPerfil())
  }

  probarTiempo() {
    console.log(this.tiempo1.getFormato12());
    console.log(this.tiempo2.getFormato12());
    console.log(this.tiempo1.getFormato24());
    console.log(this.tiempo2.getFormato24());
  }

  probarFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getFecha());
    console.log(this.fecha.getDiaFecha());
  }

  probarNombre() {
    console.log(this.nombre.getNombreCompleto());
    console.log(this.nombre.getApellidoNombre());
    console.log(this.nombre.getIniciales());
  }

  probarPaciente() {
    console.log(this.paciente.getPerfil());
  }

  probarDoctor() {
    console.log(this.doctor.getPerfil());
  }

  probarCita() {
    console.log(this.cita.getCita());
  }

  probarHospital() {
    this.hospital.registrarDoctor(this.doctor);
    this.hospital.registrarCita(this.cita);
    this.hospital.listarDoctores();
    this.hospital.listarCitas();
  }
}
let app = new Main();
app.probarTiempo();
app.probarFecha();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();
app.PacienteAsegurado();