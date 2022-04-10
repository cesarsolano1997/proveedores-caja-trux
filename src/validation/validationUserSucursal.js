export default function validationUserSucursal(values) {
  const errores = {}

  const {
    ubicacion,
    departamento,
    provincia,
    distrito,
    telefono,
    direccion,
    repLegal,
  } = values

  if (ubicacion) {
    if (departamento === '') {
      errores.departamento = 'Debe escoger un departamento'
    }

    if (provincia === '') {
      errores.provincia = 'Debe escoger una provincia'
    }

    if (distrito === '') {
      errores.distrito = 'Debe escoger un distrito'
    }

    if (telefono === '') {
      errores.telefono = 'Debe ingresar un teléfono'
    }

    if (direccion === '') {
      errores.direccion = 'Debe ingresar una dirección'
    }

    if (repLegal === '') {
      errores.repLegal = 'Debe escoger un representante legal'
    }
  } else {
    if (telefono === '') {
      errores.telefono = 'Debe ingresar un teléfono'
    }

    if (direccion === '') {
      errores.direccion = 'Debe ingresar una dirección'
    }

    if (repLegal === '') {
      errores.repLegal = 'Debe escoger un representante legal'
    }
  }

  return errores
}
