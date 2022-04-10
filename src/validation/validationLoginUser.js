export default function ValidationLoginUser(values) {
  const errores = {}

  if (values.RUC === '') {
    errores.RUC = 'Debe ingresar su RUC'
  }

  if (values.Usuario === '') {
    errores.Usuario = 'Debe ingresar su usuario'
  }
  if (values.Password === '') {
    errores.Password = 'Debe ingresar su contraseña'
  }

  return errores
}
