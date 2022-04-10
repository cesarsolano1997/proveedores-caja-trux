export default function validationUserRepLegal(values) {
  const errores = {}

  const { nombre, apellidos, nacionalidad, tipoDoc, numDoc, telefono } = values

  if (nombre === '') {
    errores.nombre = 'Debe ingresar un nombre'
  }

  if (apellidos === '') {
    errores.apellidos = 'Debe ingresar un apellidos'
  }

  if (nacionalidad === '') {
    errores.nacionalidad = 'Debe escoger una nacionalidad'
  }

  if (tipoDoc === '') {
    errores.tipoDoc = 'Debe escoger un tipo de documento'
  }

  if (tipoDoc === '1') {
    if (numDoc === '') {
      errores.numDoc = 'Debe ingresar un número de documento'
    } else if (numDoc.length !== 8) {
      errores.numDoc = 'El DNI debe tener 8 dígitos para ser válido'
    }
  } else if (tipoDoc === '2') {
    errores.numDoc = 'Debe ingresar el número de documento'
  } else if (tipoDoc === '3') {
    errores.numDoc = 'Debe ingresar el número de documento'
  }

  if (telefono.length < 6) {
    errores.telefono = 'Debe ingresar un número de teléfono válido'
  }

  return errores
}
