import React from 'react'
import Date from '../../../../ui/date/date'
import TextBox from '../../../../ui/input/Textbox'
import Select from '../../../../ui/select/Select'
import Radio from '../../../../ui/radio/Radio'
import styles from '../../registerProvider.module.css'

const TextStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 0px 0',
  bg: '#fff',
}

const SelectStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 0px 0',
  bg: '#fff',
}

const SectionComercial = ({ comercial, handleChange, updateState, errors }) => {
  const {
    Nombres,
    ApPaterno,
    ApMaterno,
    TipDoc,
    NumDoc,
    RUC,
    Siglas,
    Email,
    InicioActividad,
    Departamento,
    Provincia,
    Distrito,
    DireccionPrincipal,
    TeleFijo,
    Celular,
    Telefax,
    CIU,
    CTABN,
    RegTribu,
    Pais,
    ProvRegEst,
    DistrCiud,
    TelefPais,
    NombRazonSocial,
    RazonSocial,
    Peruano,
    Persona,
    Detraccion,
  } = comercial

  const componentHandleChange = (e) => {
    const { name, value } = e.target

    updateState(name, value === 'false')
  }

  return (
    <>
      <section className={styles.form_card} id="Comercial">
        <div className={styles.form_title}>
          <p className={styles.section_title}>
            <svg height={20} viewBox="0 0 24 24" width={20} fill="#D5040A">
              <path d="M12.25 2h-1.1C10.82.85 9.76 0 8.5 0S6.18.85 5.85 2h-1.1c-.41 0-.75.34-.75.75v1.5C4 5.21 4.79 6 5.75 6h5.5C12.21 6 13 5.21 13 4.25v-1.5c0-.41-.34-.75-.75-.75z" />
              <path d="M14.25 3H14v1.25C14 5.77 12.77 7 11.25 7h-5.5C4.23 7 3 5.77 3 4.25V3h-.25C1.23 3 0 4.23 0 5.75v12.5C0 19.77 1.23 21 2.75 21h7.38l.22-1.23c.1-.56.36-1.06.76-1.47l.8-.8H3.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.05 0 .09 0 .14.02h.01l3.6-3.6V5.75C17 4.23 15.77 3 14.25 3zm-1 11.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zM12.527 24a.748.748 0 01-.738-.881l.53-3.005a.753.753 0 01.208-.4l7.425-7.424c.912-.914 1.808-.667 2.298-.177l1.237 1.237a1.75 1.75 0 010 2.475l-7.425 7.425a.739.739 0 01-.4.208l-3.005.53a.715.715 0 01-.13.012zm3.005-1.28h.01z" />
            </svg>
            &nbsp;Información comercial y operativa
          </p>
        </div>
        <div className={styles.form_content}>
          <div className={styles.form_subsection}>
            <div
              className={[
                styles.form_row,
                styles.flex_justify_start,
                styles.group_btn_nacional,
              ].join(' ')}
            >
              <Radio
                name={'Comercial.Peruano'}
                checked={Peruano}
                value={Peruano}
                placeHolder={'Domiciliado en Perú'}
                onChange={componentHandleChange}
              />

              <Radio
                name={'Comercial.Peruano'}
                checked={!Peruano}
                value={Peruano}
                placeHolder={'No domiciliado en Perú(extranjero)'}
                onChange={componentHandleChange}
              />
            </div>
            <div className={styles.form_row}>
              {!Peruano && (
                <TextBox
                  type="text"
                  placeHolder="N° de reg. tributario/ N° de identificación"
                  name={'Comercial.RegTribu'}
                  value={RegTribu}
                  onChange={handleChange}
                  helperText={errors && errors.RegTribu}
                  width={TextStyles.width}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              )}
            </div>
            <div className={styles.form_row}>
              {Peruano || (!Peruano && Persona) ? (
                <>
                  <TextBox
                    type="text"
                    name={'Comercial.Nombres'}
                    value={Nombres}
                    onChange={handleChange}
                    helperText={errors && errors.Nombres}
                    width={TextStyles.width}
                    height={TextStyles.height}
                    margin={TextStyles.margin}
                    bg={TextStyles.bg}
                    placeHolder="Nombres"
                  />
                  <TextBox
                    type="text"
                    name={'Comercial.ApPaterno'}
                    value={ApPaterno}
                    onChange={handleChange}
                    placeHolder="Apellido Paterno"
                    helperText={errors && errors.ApPaterno}
                    width={TextStyles.width}
                    height={TextStyles.height}
                    margin={TextStyles.margin}
                    bg={TextStyles.bg}
                  />
                </>
              ) : null}

              {!Peruano && !Persona && (
                <TextBox
                  type="text"
                  name={'Comercial.NombRazonSocial'}
                  value={NombRazonSocial}
                  onChange={handleChange}
                  placeHolder="Nombres/Razón Social"
                  width={TextStyles.width}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              )}
            </div>
            <div className={styles.form_row}>
              {Peruano || (!Peruano && Persona) ? (
                <TextBox
                  type="text"
                  name={'Comercial.ApMaterno'}
                  value={ApMaterno}
                  onChange={handleChange}
                  placeHolder="Apellido Materno"
                  helperText={errors && errors.ApMaterno}
                  width={'49%'}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              ) : null}
            </div>
            {Peruano && (
              <div className={styles.form_row}>
                <Select
                  name={'Comercial.TipDoc'}
                  value={TipDoc}
                  onChange={handleChange}
                  placeHolder="Tipo de documento"
                  helperText={errors && errors.TipDoc}
                  bg={SelectStyles.bg}
                  width={SelectStyles.width}
                  height={SelectStyles.height}
                  margin={SelectStyles.margin}
                  options={[{ name: 'DNI', value: 1 }]}
                />

                <TextBox
                  type="number"
                  name={'Comercial.NumDoc'}
                  value={NumDoc}
                  onChange={handleChange}
                  helperText={errors && errors.NumDoc}
                  placeHolder="Número de documento"
                  width={TextStyles.width}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              </div>
            )}
          </div>

          <div className={styles.form_subsection}>
            <div
              className={styles.form_row}
              style={{ justifyContent: 'flex-start' }}
            >
              <div>
                <input
                  type="radio"
                  name="Comercial.Persona"
                  value={Persona}
                  checked={Persona}
                  onChange={componentHandleChange}
                />
                <label>Natural/Física</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="Comercial.Persona"
                  value={Persona}
                  checked={!Persona}
                  onChange={componentHandleChange}
                />
                <label>Jurídico</label>
              </div>
            </div>

            {Peruano && (Persona || !Persona) ? (
              <div className={styles.form_row}>
                <TextBox
                  type="number"
                  name={'Comercial.RUC'}
                  value={RUC}
                  onChange={handleChange}
                  placeHolder="RUC"
                  helperText={errors && errors.RUC}
                  width={'50%'}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
                <TextBox
                  type="text"
                  name={'Comercial.Siglas'}
                  value={Siglas}
                  onChange={handleChange}
                  placeHolder="Siglas"
                  helperText={errors && errors.Siglas}
                  width={'50%'}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              </div>
            ) : null}
            <div className={styles.form_row}>
              {Peruano && !Persona && (
                <TextBox
                  type="text"
                  placeHolder="Razón social"
                  name={'Comercial.RazonSocial'}
                  value={RazonSocial}
                  onChange={handleChange}
                  helperText={errors && errors.RazonSocial}
                  width={'50%'}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              )}
              {Peruano && (Persona || !Persona) ? (
                <TextBox
                  type="text"
                  name={'Comercial.Email'}
                  value={Email}
                  onChange={handleChange}
                  placeHolder="Email"
                  helperText={errors && errors.Email}
                  width={'49%'}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              ) : null}
            </div>
          </div>

          <div className={styles.form_subsection}>
            <div className={styles.form_row}>
              <Date
                placeHolder="Inicio de actividades laborales"
                name={'Comercial.InicioActividad'}
                value={InicioActividad}
                onChange={handleChange}
                helperText={errors && errors.InicioActividad}
                width={'49.5%'}
                height={TextStyles.height}
                margin={TextStyles.margin}
                bg={TextStyles.bg}
              />
            </div>
            <div className={styles.form_row}>
              {Peruano ? (
                <>
                  <Select
                    placeHolder="Departamento donde opera"
                    name={'Comercial.Departamento'}
                    value={Departamento}
                    onChange={handleChange}
                    helperText={errors && errors.Departamento}
                    bg={SelectStyles.bg}
                    width={SelectStyles.width}
                    height={SelectStyles.height}
                    margin={SelectStyles.margin}
                    options={[
                      { value: 1, name: 'La Libertad' },
                      { value: 2, name: 'Lima' },
                    ]}
                  />
                  <Select
                    placeHolder="Provincia"
                    name={'Comercial.Provincia'}
                    value={Provincia}
                    onChange={handleChange}
                    helperText={errors && errors.Provincia}
                    bg={SelectStyles.bg}
                    width={SelectStyles.width}
                    height={SelectStyles.height}
                    margin={SelectStyles.margin}
                    options={[{ name: 'Trujillo', value: 1 }]}
                  />
                </>
              ) : (
                <>
                  <Select
                    placeHolder="País donde opera"
                    name={'Comercial.Pais'}
                    value={Pais}
                    onChange={handleChange}
                    helperText={errors && errors.Pais}
                    bg={SelectStyles.bg}
                    width={SelectStyles.width}
                    height={SelectStyles.height}
                    margin={SelectStyles.margin}
                  />
                  <TextBox
                    type="text"
                    placeHolder="Provincia/Región/Estado"
                    name={'Comercial.ProvRegEst'}
                    value={ProvRegEst}
                    onChange={handleChange}
                    helperText={errors && errors.ProvRegEst}
                    width={TextStyles.width}
                    height={TextStyles.height}
                    margin={TextStyles.margin}
                    bg={TextStyles.bg}
                  />
                </>
              )}
            </div>

            <div className={styles.form_row}>
              {Peruano ? (
                <Select
                  placeHolder="Distrito"
                  name={'Comercial.Distrito'}
                  value={Distrito}
                  onChange={handleChange}
                  helperText={errors && errors.Distrito}
                  bg={SelectStyles.bg}
                  width={SelectStyles.width}
                  height={SelectStyles.height}
                  margin={SelectStyles.margin}
                  options={[{ name: 'Trujillo', value: 1 }]}
                />
              ) : (
                <TextBox
                  type="text"
                  placeHolder="Distrito/Ciudad"
                  name={'Comercial.DistrCiud'}
                  value={DistrCiud}
                  onChange={handleChange}
                  helperText={errors && errors.DistrCiud}
                  width={TextStyles.width}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              )}
              <TextBox
                type="text"
                name={'Comercial.DireccionPrincipal'}
                value={DireccionPrincipal}
                placeHolder="Dirección principal"
                onChange={handleChange}
                helperText={errors && errors.DireccionPrincipal}
                width={TextStyles.width}
                height={TextStyles.height}
                margin={TextStyles.margin}
                bg={TextStyles.bg}
              />
            </div>
            <div className={styles.form_row}>
              {Peruano ? (
                <TextBox
                  type="text"
                  placeHolder="Teléfono fijo"
                  name={'Comercial.TeleFijo'}
                  value={TeleFijo}
                  onChange={handleChange}
                  width={TextStyles.width}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              ) : (
                <TextBox
                  type="text"
                  placeHolder="Teléfono (COD.PAIS + COD.CIUDAD + NRO.TELEFONO)"
                  name={'Comercial.TelefPais'}
                  value={TelefPais}
                  onChange={handleChange}
                  helperText={errors && errors.TelePais}
                  width={TextStyles.width}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              )}
              <TextBox
                type="number"
                placeHolder="Celular"
                name={'Comercial.Celular'}
                value={Celular}
                onChange={handleChange}
                helperText={errors && errors.Celular}
                width={TextStyles.width}
                height={TextStyles.height}
                margin={TextStyles.margin}
                bg={TextStyles.bg}
              />
            </div>
            <div className={styles.form_row}>
              <TextBox
                type="text"
                placeHolder="Telefax"
                name={'Comercial.Telefax'}
                value={Telefax}
                onChange={handleChange}
                width={TextStyles.width}
                height={TextStyles.height}
                margin={TextStyles.margin}
                bg={TextStyles.bg}
              />

              {Peruano && (
                <TextBox
                  type="text"
                  name={'Comercial.CIU'}
                  value={CIU}
                  onChange={handleChange}
                  placeHolder="CIIU"
                  helperText={errors && errors.CIU}
                  width={TextStyles.width}
                  height={TextStyles.height}
                  margin={TextStyles.margin}
                  bg={TextStyles.bg}
                />
              )}
            </div>
          </div>

          {Peruano && (
            <div className={styles.form_subsection}>
              <div
                className={styles.form_row}
                style={{ justifyContent: 'flex-start' }}
              >
                <p>Sujeto a detracción</p>
                <div
                  className={[
                    styles.form_row,
                    styles.group_btn_detraccion,
                  ].join(' ')}
                  style={{ margin: '16px 0px' }}
                >
                  <Radio
                    name={'Comercial.Detraccion'}
                    checked={Detraccion}
                    value={Detraccion}
                    placeHolder={'Sí'}
                    onChange={componentHandleChange}
                  />
                  <Radio
                    name={'Comercial.Detraccion'}
                    checked={!Detraccion}
                    value={Detraccion}
                    placeHolder={'No'}
                    onChange={componentHandleChange}
                  />
                  {/* <input type="radio" name="Comercial.Detraccion" value={Detraccion} checked={Detraccion} onChange={componentHandleChange} /><label>Sí</label>
                                    <input type="radio" name="Comercial.Detraccion" value={Detraccion} checked={!Detraccion} onChange={componentHandleChange} /><label>No</label> */}
                </div>
              </div>
              {Detraccion && (
                <div className={styles.form_row}>
                  <TextBox
                    type="number"
                    placeHolder="Número de cuenta del Banco de la Nación"
                    name={'Comercial.CTABN'}
                    value={CTABN}
                    onChange={handleChange}
                    helperText={errors && errors.CTABN}
                    width={TextStyles.width}
                    height={TextStyles.height}
                    margin={TextStyles.margin}
                    bg={TextStyles.bg}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default SectionComercial
