export default function validationRegisterProvider (values) {
  let errores = {}
  const errComercial = {}
  const errContacto = {}
  const errRepLegal = {}
  const errBancaria = {}
  const errEconomica = {}

  const { Bancaria, Comercial, Contacto, Economica, RepLegal } = values

  if (Comercial.Peruano) {
    if (Comercial.Nombres === '') {
      errComercial.Nombres = 'El nombre es obligatorio'
    }

    if (Comercial.ApPaterno === '') {
      errComercial.ApPaterno = 'El apellido paterno es obligatorio'
    }

    if (Comercial.ApMaterno === '') {
      errComercial.ApMaterno = 'El apellido materno es obligatorio'
    }

    if (Comercial.TipDoc.length === 0) {
      errComercial.TipDoc = 'El tipo de documento es obligatorio'
    }

    if (Comercial.NumDoc.length !== 8) {
      errComercial.NumDoc = 'El número de documento debe tener 8 dígitos'
    }

    if (Comercial.RUC.length !== 11) {
      errComercial.RUC = 'El RUC debe tener 11 dígitos'
    }

    if (Comercial.Siglas === '') {
      errComercial.Siglas = 'Debe ingresar las siglas de su empresa'
    }

    if (Comercial.Email === '') {
      errComercial.Email = 'Debe ingresar un email de contacto'
    }

    if (Comercial.InicioActividad === '') {
      errComercial.InicioActividad = 'Debe ingresar la fecha de inicio de sus actividades'
    }

    if (Comercial.Departamento === '') {
      errComercial.Departamento = 'Debe escoger un departamento'
    }

    if (Comercial.Provincia === '') {
      errComercial.Provincia = 'Debe escoger un provincia'
    }

    if (Comercial.Distrito === '') {
      errComercial.Distrito = 'Debe escoger un distrito'
    }

    if (Comercial.DireccionPrincipal === '') {
      errComercial.DireccionPrincipal = 'Debe ingresar su dirección principal'
    }

    if (Comercial.Celular === '') {
      errComercial.Celular = 'Debe ingresar un número de celular'
    }

    if (Comercial.CIU === '') {
      errComercial.CIU = 'Debe ingresar el CIIU'
    }

    if (Comercial.Detraccion) {
      if (Comercial.CTABN === '') {
        errComercial.CTABN = 'Debe ingresar una cuenta del Banco de la Nación'
      }
    }

    if (!Comercial.Persona) {
      if (Comercial.RazonSocial === '') {
        errComercial.RazonSocial = 'Debe ingresar su razón social'
      }
    }
  }

  if (!Comercial.Peruano) { // true = peruano; false = extranjero
    if (Comercial.Persona) { // true = natural; false: juridico
      if (Comercial.RegTribu === '') {
        errComercial.RegTribu = 'Debe ingresar el registro tributario o N° de identificación'
      }
    } else {
      if (RepLegal.Nombres === '') {
        errRepLegal.Nombres = 'Debe ingresar el nombre del Rep. Legal'
      }

      if (RepLegal.ApPaterno === '') {
        errRepLegal.ApPaterno = 'Debe ingresar el apellido paterno del Rep. Legal'
      }

      if (RepLegal.ApMaterno === '') {
        errRepLegal.ApMaterno = 'Debe ingresar el apellido materno del Rep. Legal'
      }

      if (RepLegal.NIdent === '') {
        errRepLegal.NIdent = 'Debe ingresar el N° de identificación del Rep. Legal'
      }
    }

    if (Comercial.Nombres === '') {
      errComercial.Nombres = 'El nombre es obligatorio'
    }

    if (Comercial.ApPaterno === '') {
      errComercial.ApPaterno = 'El apellido paterno es obligatorio'
    }

    if (Comercial.ApMaterno === '') {
      errComercial.ApMaterno = 'El apellido materno es obligatorio'
    }

    if (Comercial.InicioActividad === '') {
      errComercial.InicioActividad = 'Debe ingresar la fecha de inicio de sus actividades'
    }

    if (Comercial.Pais === '') {
      errComercial.Pais = 'Debe seleccionar un país'
    }

    if (Comercial.ProvRegEst === '') {
      errComercial.ProvRegEst = 'Debe ingresar una Provincia/Región/Estado'
    }

    if (Comercial.DistrCiud === '') {
      errComercial.DistrCiud = 'Debe ingresar una Distrito/Ciudad'
    }

    if (Comercial.DireccionPrincipal === '') {
      errComercial.DireccionPrincipal = 'Debe ingresar una dirección principal'
    }

    if (Comercial.TelePais === '') {
      errComercial.TelePais = 'Debe ingresar un número telefónico de su país'
    }

    if (Comercial.Celular === '') {
      errComercial.Celular = 'Debe ingresar un número de celular'
    }

    // Section contacto
    if (Contacto.Nombres === '') {
      errContacto.Nombres = 'El nombre del contacto es obligatorio'
    }

    if (Contacto.ApPaterno === '') {
      errContacto.ApPaterno = 'El apellido paterno del contacto es obligatorio'
    }

    if (Contacto.ApMaterno === '') {
      errContacto.ApMaterno = 'El apellido materno del contacto es obligatorio'
    }

    if (Contacto.Email === '') {
      errContacto.Email = 'El emial del contacto es obligatorio'
    }
  }

  if (Economica.length === 0) {
    errEconomica.Mensaje = 'Usted debe ingresar al menos una actividad económica'
  }

  if (Bancaria.length === 0) {
    errBancaria.Mensaje = 'Usted debe ingresar al menos una actividad económica'
  }

  errores = { errComercial, errContacto, errRepLegal, errEconomica, errBancaria }

  if (Object.keys(errComercial).length === 0 && Object.keys(errContacto).length === 0 && Object.keys(errRepLegal).length === 0 &&
        Object.keys(errEconomica).length === 0 && Object.keys(errBancaria).length === 0) {
    errores = {}
  }

  return errores
}
