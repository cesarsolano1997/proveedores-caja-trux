import React, { useState, useEffect } from 'react'
import TextBox from '../../../../ui/input/Textbox'
import Select from '../../../../ui/select/Select'
import Table from '../../../../ui/table/Table'

import styles from '../../registerProvider.module.css'

const TextStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 0px 0',
  bg: '#fff'
}

const SelectStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 0px 0',
  bg: '#fff'
}

const monedas = [
  { value: 1, name: 'Soles' },
  { value: 2, name: 'Dólares' }
]

const SectionBancaria = ({ updateState, nacional, errors }) => {
  const [columns, setColumns] = useState([
    { name: 'Entidad financiera' },
    { name: 'Moneda' },
    { name: 'N° de CTA' }])

  const [CTACaja, setCTACaja] = useState(true)
  const [actBancarias, setActBancaria] = useState([])
  const [tipEntidad, setTipEntidad] = useState({ key: '', value: '' })
  const [entidad, setEntidad] = useState({ key: '', value: '' })
  const [nombEntidad, setNombEntidad] = useState({ value: '' })
  const [moneda, setMoneda] = useState({ key: '', value: '' })
  const [cta, setCTA] = useState({ value: '' })
  const [swift, setSWIFT] = useState({ value: '' })
  const [aba, setABA] = useState({ value: '' })
  const [CCI, setCCI] = useState({ value: '' })
  const [direccion, setDireccion] = useState({ value: '' })
  const [message, setMessage] = useState({
    entidad: '',
    moneda: '',
    nombEntidad: '',
    cci: '',
    cta: '',
    swift: '',
    aba: '',
    direccion: ''
  })

  useEffect(() => {
    if (!nacional && !CTACaja) {
      setColumns([{ name: 'Entidad financiera' },
        { name: 'Moneda' },
        { name: 'N° de CTA' },
        { name: 'Cod. SWIFT' },
        { name: 'Cod. ABA' },
        { name: 'Dirección' }])
      setActBancaria([])
    }

    if (!CTACaja && nacional) {
      setColumns([{ name: 'Entidad financiera' },
        { name: 'Moneda' },
        { name: 'N° de CTA' },
        { name: 'CCI' }])
      setActBancaria([])
    }
  }, [nacional, CTACaja])

  useEffect(() => {
    updateState('Bancaria', actBancarias)
  }, [actBancarias])

  const handleChangeCTA = state => {
    setActBancaria([])
    setCTACaja(state)

    if ((state && nacional) || (state && !nacional)) {
      setColumns([
        { name: 'Entidad financiera' },
        { name: 'Moneda' },
        { name: 'N° de CTA' }])
    }

    if (!state && nacional) {
      setColumns([{ name: 'Entidad financiera' },
        { name: 'Moneda' },
        { name: 'N° de CTA' },
        { name: 'CCI' }])
    }
  }

  const handleButton = () => {
    let flag = true
    const errorsForm = {
      entidad: '',
      moneda: '',
      nombEntidad: '',
      cci: '',
      cta: '',
      swift: '',
      aba: '',
      direccion: ''
    }
    setMessage([])

    if ((CTACaja && nacional) || (CTACaja && !nacional)) {
      if (moneda.key === '') {
        flag = false
        errorsForm.moneda = 'Debe seleccionar una moneda'
      }

      if (cta.value === '') {
        flag = false
        errorsForm.cta = 'Debe ingresar su número de cuenta'
      }

      if (!flag) {
        setMessage(errorsForm)
        return
      }

      clearInput()

      setActBancaria([
        ...actBancarias, {
          tipEntidad: 'CAJA TRUJILLO S.A.',
          moneda: moneda.value,
          cta: cta.value
        }])
      return
    }

    if (nacional && !CTACaja) {
      if (moneda.key === '') {
        flag = false
        errorsForm.moneda = 'Debe seleccionar una moneda'
      }

      if (tipEntidad.key === '') {
        flag = false
        errorsForm.tipEntidad = 'Debe seleccionar un tipo de entidad bancaria'
      }

      if (entidad.key === '') {
        flag = false
        errorsForm.entidad = 'Debe seleccionar una entidad bancaria'
      }

      if (cta.value === '') {
        flag = false
        errorsForm.cta = 'Debe ingresar su número de cuenta'
      }

      if (CCI.value === '') {
        flag = false
        errorsForm.cci = 'Debe ingresar su número de cuenta corriente'
      }

      if (!flag) {
        setMessage(errorsForm)
        return
      }

      clearInput()

      setActBancaria([
        ...actBancarias, {
          entidad: entidad.value,
          moneda: moneda.value,
          cta: cta.value,
          cci: CCI.value
        }])

      return
    }

    if (!CTACaja && !nacional) {
      if (tipEntidad.key === '') {
        flag = false
        errorsForm.tipEntidad = 'Debe seleccionar un tipo de entidad bancaria'
      }

      if (nombEntidad.value === '') {
        flag = false
        errorsForm.nombEntidad = 'Debe ingresar el nombre de la entidad bancaria'
      }

      if (moneda.key === '') {
        flag = false
        errorsForm.moneda = 'Debe seleccionar una moneda'
      }

      if (cta.value === '') {
        flag = false
        errorsForm.cta = 'Debe ingresar su número de cuenta'
      }

      if (swift.value === '') {
        flag = false
        errorsForm.swift = 'Debe ingresar el código SWFIT'
      }

      if (aba.value === '') {
        flag = false
        errorsForm.aba = 'Debe ingresar el código ABA'
      }

      if (!flag) {
        setMessage(errorsForm)
        return
      }

      clearInput()

      setActBancaria([
        ...actBancarias, {
          entFinanciero: nombEntidad.value,
          moneda: moneda.value,
          cta: cta.value,
          swift: swift.value,
          aba: aba.value,
          direccion: direccion.value
        }])
    }
  }
  const clearInput = () => {
    setCTA({ value: '' })
    setSWIFT({ value: '' })
    setABA({ value: '' })
    setDireccion({ value: '' })
    setCCI({ value: '' })
  }

  return (
        <section className={styles.form_card}>
            <div className={styles.form_title}>
                <p className={styles.section_title}>   <svg
                            height={20}
                            viewBox="0 0 24 24"
                            width={20}
                            fill="#D5040A"
                        >
                            <path d="M12.25 2h-1.1C10.82.85 9.76 0 8.5 0S6.18.85 5.85 2h-1.1c-.41 0-.75.34-.75.75v1.5C4 5.21 4.79 6 5.75 6h5.5C12.21 6 13 5.21 13 4.25v-1.5c0-.41-.34-.75-.75-.75z" />
                            <path d="M14.25 3H14v1.25C14 5.77 12.77 7 11.25 7h-5.5C4.23 7 3 5.77 3 4.25V3h-.25C1.23 3 0 4.23 0 5.75v12.5C0 19.77 1.23 21 2.75 21h7.38l.22-1.23c.1-.56.36-1.06.76-1.47l.8-.8H3.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.05 0 .09 0 .14.02h.01l3.6-3.6V5.75C17 4.23 15.77 3 14.25 3zm-1 11.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zM12.527 24a.748.748 0 01-.738-.881l.53-3.005a.753.753 0 01.208-.4l7.425-7.424c.912-.914 1.808-.667 2.298-.177l1.237 1.237a1.75 1.75 0 010 2.475l-7.425 7.425a.739.739 0 01-.4.208l-3.005.53a.715.715 0 01-.13.012zm3.005-1.28h.01z" />
                        </svg>&nbsp;Actividad Bancaria</p>
            </div>
            <div className={styles.form_content}>
                <div className={styles.form_subsection}>
                    <div className={styles.form_row}>
                        ¿Tiene cuenta con nosotros?
                        <div>
                            <input type="radio" name="CTACaja" value={CTACaja} onChange={() => handleChangeCTA(true)} checked={CTACaja} /> <label>Sí</label>
                        </div>
                        <div>
                            <input type="radio" name="CTACaja" value={!CTACaja} onChange={() => handleChangeCTA(false)} checked={!CTACaja} /> <label>No (Ingresará de otro cuenta de banco)</label>
                        </div>
                    </div>
                    <div className={styles.form_row}>
                        {
                            (!CTACaja && nacional) &&
                            <>

                                <Select
                                    placeHolder="Tipo de entidad"
                                    name={'tipEntidad'}
                                    value={tipEntidad}
                                    onChange={e => setTipEntidad({ key: e.target.value, value: e.target.options[e.target.selectedIndex].text })}
                                    helperText={message && message.tipEntidad}
                                    bg={SelectStyles.bg}
                                    width={'100%'}
                                    height={SelectStyles.height}
                                    margin={SelectStyles.margin}
                                    options={[
                                      { value: 1, name: 'Bancos' },
                                      { value: 2, name: 'Caja' }
                                    ]}
                                />
                                <Select
                                    placeHolder="Entidad bancaria"
                                    name={'entidad'}
                                    value={entidad}
                                    onChange={e => setEntidad({ key: e.target.value, value: e.target.options[e.target.selectedIndex].text })}
                                    helperText={message && message.entidad}
                                    bg={SelectStyles.bg}
                                    width={'100%'}
                                    height={SelectStyles.height}
                                    margin={SelectStyles.margin}
                                    options={[
                                      { value: 1, name: 'BBVA' },
                                      { value: 2, name: 'BCP' }
                                    ]}
                                />
                            </>
                        }
                        {
                            (!CTACaja && !nacional) &&

                            <>
                                <Select
                                    placeHolder="Tipo de entidad"
                                    name={'tipEntidad'}
                                    value={tipEntidad}
                                    onChange={e => setTipEntidad({ key: e.target.value, value: e.target.options[e.target.selectedIndex].text })}
                                    helperText={message && message.tipEntidad}
                                    bg={SelectStyles.bg}
                                    width={'100%'}
                                    height={SelectStyles.height}
                                    margin={SelectStyles.margin}
                                    options={[
                                      { value: 1, name: 'Bancos' },
                                      { value: 2, name: 'Caja' }
                                    ]}
                                />
                                <TextBox
                                    type="text"
                                    placeHolder="Nombre de la entidad"
                                    name={'nombEntidad'}
                                    value={nombEntidad.value}
                                    onChange={e => setNombEntidad({ value: e.target.value })}
                                    helperText={message && message.nombEntidad}
                                    width={TextStyles.width}
                                    height={TextStyles.height}
                                    margin={TextStyles.margin}
                                    bg={TextStyles.bg}
                                />
                            </>
                        }
                    </div>
                    <div className={styles.form_row}>
                        <Select
                            placeHolder="Tipo de moneda"
                            name={'moneda'}
                            value={moneda}
                            onChange={e => setMoneda({ key: e.target.value, value: e.target.options[e.target.selectedIndex].text })}
                            helperText={message && message.moneda}
                            bg={SelectStyles.bg}
                            width={'100%'}
                            height={SelectStyles.height}
                            margin={SelectStyles.margin}
                            options={monedas}
                        />
                        <TextBox
                            type="number"
                            placeHolder="Ingrese su cuenta"
                            name={'cta'}
                            value={cta.value}
                            onChange={e => setCTA({ value: e.target.value })}
                            helperText={message && message.cta}
                            width={TextStyles.width}
                            height={TextStyles.height}
                            margin={TextStyles.margin}
                            bg={TextStyles.bg}
                        />
                    </div>
                    <div className={styles.form_row}>
                        {(!nacional && !CTACaja) &&
                            < TextBox
                                type="text"
                                placeHolder="Código SWFIT"
                                name={'swift'}
                                value={swift.value}
                                onChange={e => setSWIFT({ value: e.target.value })}
                                helperText={message && message.swift}
                                width={TextStyles.width}
                                height={TextStyles.height}
                                margin={TextStyles.margin}
                                bg={TextStyles.bg}
                            />
                        }
                    </div>
                    <div className={styles.form_row}>
                        {(!nacional && !CTACaja) &&
                            < TextBox
                                type="text"
                                placeHolder="ABA"
                                name={'aba'}
                                value={aba.value}
                                onChange={e => setABA({ value: e.target.value })}
                                helperText={message && message.aba}
                                width={TextStyles.width}
                                height={TextStyles.height}
                                margin={TextStyles.margin}
                                bg={TextStyles.bg}
                            />
                        }
                    </div>
                    {
                        (nacional && !CTACaja) &&
                        <div className={styles.form_row}>
                            <TextBox
                                placeHolder="Cuenta corriente (CCI)"
                                name={'CCI'}
                                value={CCI.value}
                                onChange={e => setCCI({ value: e.target.value })}
                                helperText={message && message.cci}
                                bg={SelectStyles.bg}
                                width={'100%'}
                                height={SelectStyles.height}
                                margin={SelectStyles.margin}
                                options={monedas}
                            />
                        </div>
                    }

                    {
                        (!nacional && !CTACaja) &&
                        <div className={styles.form_row}>
                            <TextBox
                                placeHolder="Dirección del banco"
                                name={'direccion'}
                                value={direccion.value}
                                bg={SelectStyles.bg}
                                onChange={e => setDireccion({ value: e.target.value })}
                                width={'100%'}
                                height={SelectStyles.height}
                                margin={SelectStyles.margin}
                                options={monedas}
                            />
                        </div>
                    }
                    {
                        (errors && actBancarias.length === 0) &&
                        <div className={styles.form_row}>
                            <p style={{ color: 'red' }}>{errors.Mensaje}</p>
                        </div>
                    }
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <button type="button" className="btn btn-outlined" onClick={handleButton} >Agregar</button>
                    </div>
                    <div className={styles.form_row}>
                        <Table
                            columns={columns}
                            rows={actBancarias}
                        />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SectionBancaria
