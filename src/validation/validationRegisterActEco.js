export default function validationRegisterActEco(values) {
  const errores = {}

  if (values.servicio === '') {
    errores.servicio = 'Debe escoger un servicio'
  }

  if (values.grupo === '') {
    errores.grupo = 'Debe escoger un grupo'
  }

  if (values.clase === '') {
    errores.clase = 'Debe escoger un clase'
  }

  if (!values.todos) {
    if (values.familia === '') {
      errores.familia = 'Debe escoger un familia'
    }
  }

  return errores
}
