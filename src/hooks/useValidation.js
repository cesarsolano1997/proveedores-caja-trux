import { useState, useEffect, useReducer } from 'react'
import produce from 'immer'
import { set, has } from 'lodash'

function enhancedReducer(state, updateArg) {
  // check if the type of update argument is a callback function
  if (updateArg.constructor === Function) {
    return { ...state, ...updateArg(state) }
  }

  // if the type of update argument is an object
  if (updateArg.constructor === Object) {
    // does the update object have _path and _value as it's keys
    // if yes then use them to update deep object values
    if (has(updateArg, '_path') && has(updateArg, '_value')) {
      const { _path, _value } = updateArg

      return produce(state, (draft) => {
        set(draft, _path, _value)
      })
    } else {
      return { ...state, ...updateArg }
    }
  }
}

const useValidacion = (stateInicial, validar, fn) => {
  const [values, setValues] = useReducer(enhancedReducer, stateInicial)
  const [errores, saveErrors] = useState({})
  const [submitForm, saveSubmitForm] = useState(false)

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0

      if (noErrores) {
        fn() // Fn = funcion que se ejecuta en el componente
      }
      saveSubmitForm(false)
    }
  }, [errores])

  // Funcion que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    // saveErrors({})
    // const erroresValidacion = validar(values);
    // saveErrors(erroresValidacion);

    const updatePath = e.target.name.split('.')
    if (updatePath.length === 1) {
      const [key] = updatePath

      setValues({
        [key]: e.target.value,
      })
    }

    if (updatePath.length === 2) {
      setValues({
        _path: updatePath,
        _value: e.target.value,
      })
    }
  }

  const updateState = (path, value) => {
    const updatePath = path.split('.')

    if (updatePath.length === 1) {
      const [key] = updatePath

      setValues({
        [key]: value,
      })
    }

    if (updatePath.length === 2) {
      setValues({
        _path: updatePath,
        _value: value,
      })
    }
  }

  // Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const erroresValidacion = validar(values)
    saveErrors(erroresValidacion)
    saveSubmitForm(true)
  }

  // cuando se reaiza el evento de blur
  const handleBlur = () => {
    const erroresValidacion = validar(values)
    saveErrors(erroresValidacion)
  }

  return {
    values,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
    updateState,
  }
}

export default useValidacion
