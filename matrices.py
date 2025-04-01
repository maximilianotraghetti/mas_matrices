class Calificaciones:
    def __init__(self):
        self.alumnos = [
            ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
            ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
            ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
            ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
        ]

    def buscar_alumno(self, nombre):
        for alumno in self.alumnos:
            if alumno[0].lower() == nombre.lower():
                return alumno
        return None

    def agregar_o_actualizar_nota(self, nombre, materia, nota):
        alumno = self.buscar_alumno(nombre)

        if alumno:
            materias = alumno[1]
            for m in materias:
                if m[0].lower() == materia.lower():
                    print(f"Nota actual de {materia}: {m[1]}")
                    m[1] = nota
                    print(f"Nota actualizada a {nota}")
                    return
            materias.append([materia, nota])
            print(f"Materia {materia} agregada con nota {nota}")
        else:
            self.alumnos.append([nombre, [[materia, nota]]])
            print(f"Alumno {nombre} agregado con la materia {materia} y nota {nota}")

    def mostrar_alumnos(self):
        print("\nLista de alumnos:")
        for alumno in self.alumnos:
            print(f"{alumno[0]}: {alumno[1]}")

# Prueba
sistema = Calificaciones()
sistema.mostrar_alumnos()
sistema.agregar_o_actualizar_nota("Juan", "Matematicas", 10)
sistema.agregar_o_actualizar_nota("Pedro", "Fisica", 8)
sistema.mostrar_alumnos()
