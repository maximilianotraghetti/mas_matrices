class Calificaciones {
    constructor() {
        this.alumnos = [
            ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
            ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
            ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
            ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
        ];
    }

    buscarAlumno(nombre) {
        return this.alumnos.find(alumno => alumno[0].toLowerCase() === nombre.toLowerCase());
    }

    agregarOActualizarNota(nombre, materia, nota) {
        let alumno = this.buscarAlumno(nombre);

        if (alumno) {
            let materias = alumno[1];
            let materiaExistente = materias.find(m => m[0].toLowerCase() === materia.toLowerCase());

            if (materiaExistente) {
                console.log(`Nota actual de ${materia}: ${materiaExistente[1]}`);
                materiaExistente[1] = nota;
                console.log(`Nota actualizada a ${nota}`);
            } else {
                materias.push([materia, nota]);
                console.log(`Materia ${materia} agregada con nota ${nota}`);
            }
        } else {
            this.alumnos.push([nombre, [[materia, nota]]]);
            console.log(`Alumno ${nombre} agregado con la materia ${materia} y nota ${nota}`);
        }
    }

    mostrarAlumnos() {
        console.log("Lista de alumnos:");
        console.table(this.alumnos);
    }
}

// Prueba
let sistema = new Calificaciones();
sistema.mostrarAlumnos();
sistema.agregarOActualizarNota("Juan", "Matematicas", 10);
sistema.agregarOActualizarNota("Pedro", "Fisica", 8);
sistema.mostrarAlumnos();
