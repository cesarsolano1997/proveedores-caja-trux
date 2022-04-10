import React, { useState, useContext } from 'react'

import TextBox from '../../../ui/input/Textbox'
import Radio from '../../../ui/radio/Radio'
import Table from '../../../ui/table/Table'
import Select from '../../../ui/select/Select'
import InputFile from '../../../ui/file/file'

import styles from './personal.module.css'
import useWindowSize from '../../../hooks/useWindonsSize'
import UserContext from '../../../context/user/userContext'
import ModalRepLegal from './ModalRepLegal'
import ModalSucursal from './ModalSucursal'

const RegimenTributarioOptions = [
  { value: 1, name: 'Especial' },
  { value: 2, name: 'General' },
  { value: 3, name: 'Único simplificado' },
]

const PadronOptions = [
  { value: 1, name: 'Ninguno' },
  { value: 2, name: 'Buen contribuyente' },
  { value: 3, name: 'Agente retención' },
  { value: 4, name: 'Agente percepción' },
]

const NacionalidadOptions = [
  { value: 1, name: 'Peruana' },
  { value: 2, name: 'Argentina' },
  { value: 3, name: 'Boliviana' },
  { value: 4, name: 'Brasileña' },
  { value: 5, name: 'Chilena' },
  { value: 6, name: 'Colombiana' },
  { value: 7, name: 'Ecuatoriana' },
  { value: 8, name: 'Venezonlana' },
]

const EstadoCivilOptions = [
  { value: 1, name: 'Soltero' },
  { value: 2, name: 'Casado' },
  { value: 3, name: 'Viudo' },
  { value: 4, name: 'Divorciado' },
]

const GradoOptions = [
  { value: 1, name: 'Inicial' },
  { value: 2, name: 'Primaria' },
  { value: 3, name: 'Secundaria' },
  { value: 4, name: 'Superior Técnica' },
  { value: 5, name: 'Superior Universitaria' },
  { value: 6, name: 'Post Grado' },
  { value: 7, name: 'Ninguno' },
]

const Personal = () => {
  const userContext = useContext(UserContext)

  const { Personal, HandleDataUser } = userContext

  const {
    email,
    celular,
    RPM,
    Nextel,
    RPC,
    PaginaWeb,
    RegimenTributario,
    Bienes,
    Servicios,
    CtaBN,
    Padron,
    NPasaporte,
    Nacionalidad,
    EstadoCivil,
    Grado,
    CentroEstudios,
    Especialidad,
  } = Personal

  const [comercio, setComercio] = useState(false)
  const [RPN, setRPN] = useState(false)
  const [detraccion, setDetraccion] = useState(false)

  const size = useWindowSize()

  const handleChange = (evt) => {
    HandleDataUser(evt.target.name, evt.target.value)
  }

  return (
    <>
      <div className={styles.card_header}>
        <div className={styles.group_text}>
          <strong>Nombre</strong>
          <div></div>
          <label>Proveedor prueba</label>
        </div>
        <div className={styles.group_text}>
          <strong>RUC</strong>
          <label>20505050501</label>
        </div>
        <div className={styles.group_text}>
          <strong>Razón social</strong>
          <div></div>
          <label>Proveedor prueba S.A.</label>
        </div>
        <div className={styles.group_text}>
          <strong>Foto</strong>
          <InputFile name={'Subir foto'} />
        </div>
      </div>
      <div className={styles.card_body}>
        <strong>Contacto</strong>
        <div className={styles.row}>
          <TextBox
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeHolder={'Correo electrónico'}
            borderColor={'#ccc'}
            width={'90%'}
          />

          <TextBox
            type="number"
            name="celular"
            value={celular}
            onChange={handleChange}
            placeHolder={'Celular'}
            borderColor={'#ccc'}
            width={'90%'}
          />

          <TextBox
            type="number"
            name="RPM"
            value={RPM}
            onChange={handleChange}
            placeHolder={'RPM'}
            borderColor={'#ccc'}
            width={'90%'}
          />

          <TextBox
            type="number"
            name="Nextel"
            value={Nextel}
            onChange={handleChange}
            placeHolder={'Nextel'}
            borderColor={'#ccc'}
            width={'90%'}
          />

          <TextBox
            type="number"
            name="RPC"
            value={RPC}
            onChange={handleChange}
            placeHolder={'RPC'}
            borderColor={'#ccc'}
            width={'90%'}
          />

          <TextBox
            type="text"
            name="PaginaWeb"
            value={PaginaWeb}
            onChange={handleChange}
            placeHolder={'Página web'}
            borderColor={'#ccc'}
            width={'90%'}
          />

          <Select
            options={RegimenTributarioOptions}
            name={'RegimenTributario'}
            value={RegimenTributario}
            onChange={handleChange}
            placeHolder="Régimen tributario"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />

          <div className={styles.div_group_radio}>
            <span>¿Pertenece a la cámara de comercio?</span>
            <div className={styles.group_radio}>
              <Radio
                name="Comercio"
                placeHolder="Sí"
                value={comercio}
                checked={comercio}
                onChange={() => {
                  HandleDataUser('CamaraComercio', true)
                  setComercio(true)
                }}
              />

              <Radio
                name="Comercio"
                placeHolder="No"
                value={comercio}
                checked={!comercio}
                onChange={() => {
                  HandleDataUser('CamaraComercio', false)
                  setComercio(false)
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.div_group_radio}>
          <span>¿Se encuentra registrado en la RPN?</span>
          <div className={styles.group_radio}>
            <Radio
              name="RPN"
              placeHolder="Sí"
              value={RPN}
              checked={RPN}
              onChange={() => setRPN(true)}
            />

            <Radio
              name="RPN"
              placeHolder="No"
              value={RPN}
              checked={!RPN}
              onChange={() => setRPN(false)}
            />
          </div>
        </div>

        {RPN && (
          <div className={styles.rpn_section}>
            <div className={styles.rpn_body}>
              <span>Ingrese su número de RPN</span>
              <TextBox
                type="text"
                name="Bienes"
                value={Bienes}
                onChange={handleChange}
                placeHolder={'Bienes'}
                borderColor={'#ccc'}
                margin={'10px'}
              />
              <TextBox
                type="text"
                name="Servicios"
                value={Servicios}
                onChange={handleChange}
                placeHolder={'Servicios'}
                borderColor={'#ccc'}
                margin={'10px'}
              />
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px', marginBottom: '30px' }}>
          <Table
            columns={[
              { name: 'Anexo' },
              { name: 'Plantilla' },
              { name: 'Mensaje' },
              { name: 'Archivo' },
              { name: 'Archivo C/Firma' },
            ]}
            rows={[
              {
                anexo: 'Anexo',
                descargar: <a href="#">Descargar</a>,
                subirFile: <input type="file" />,
                firma: 'NINGUNO',
              },
            ]}
            margin={'20px 0px 0px 0px'}
          />
        </div>

        <div>
          <div className={styles.div_group_radio}>
            <span>¿Sujeto a detracción?</span>
            <div className={styles.group_radio}>
              <Radio
                name="detraccion"
                placeHolder="Sí"
                value={detraccion}
                checked={detraccion}
                onChange={() => setDetraccion(true)}
              />

              <Radio
                name="detraccion"
                placeHolder="No"
                value={detraccion}
                checked={!detraccion}
                onChange={() => setDetraccion(false)}
              />
            </div>
          </div>

          {detraccion && (
            <div>
              <TextBox
                type="number"
                name="CtaBN"
                value={CtaBN}
                onChange={handleChange}
                placeHolder="N° de cuenta del Banco de la Nación"
                borderColor={'#ccc'}
              />
            </div>
          )}

          <div className={styles.section_two}>
            <Select
              placeHolder={'Padrón'}
              name="Padron"
              value={Padron}
              onChange={handleChange}
              options={PadronOptions}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <TextBox
              type="text"
              name="NPasaporte"
              value={NPasaporte}
              onChange={handleChange}
              placeHolder={'N° Pasaporte'}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <Select
              placeHolder={'Nacionalidad'}
              options={NacionalidadOptions}
              name="Nacionalidad"
              value={Nacionalidad}
              onChange={handleChange}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <Select
              placeHolder={'Estado Civil'}
              options={EstadoCivilOptions}
              name="EstadoCivil"
              value={EstadoCivil}
              onChange={handleChange}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
          </div>
          <strong>Información de la instrucción del postor</strong>
          <div className={styles.infoPostor}>
            <Select
              placeHolder={'Grado de instrucción'}
              value={Grado}
              name="Grado"
              onChange={handleChange}
              options={GradoOptions}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <TextBox
              placeHolder={'Centro de estudios'}
              name={'CentroEstudios'}
              value={CentroEstudios}
              onChange={handleChange}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <TextBox
              placeHolder={'Especialidad'}
              name={'Especialidad'}
              value={Especialidad}
              onChange={handleChange}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
          </div>
          <div className={styles.repLegales}>
            <div className={styles.repLegales_header}>
              <strong>Representantes legales</strong>
            </div>
            <Table
              columns={[
                { name: 'Nombre' },
                { name: 'Apellidos' },
                { name: 'Nro Documento' },
                { name: 'Teléfono' },
              ]}
            />
          </div>

          <ModalRepLegal
            styles={styles}
            NacionalidadOptions={NacionalidadOptions}
            size={size}
          />

          <div className={styles.sucursal}>
            <div className={styles.sucursal_header}>
              <strong>Sucursal</strong>
            </div>
            <Table
              columns={[
                { name: 'N°' },
                { name: 'Departamento' },
                { name: 'Distrito' },
                { name: 'Dirección' },
                { name: 'Teléfono' },
              ]}
            />

            <ModalSucursal styles={styles} size={size} />
          </div>
        </div>
      </div>
      <div className={styles.group_buttons}>
        <button type="button" className="btn btn-caja-red">
          <svg
            aria-hidden="true"
            width="24px"
            height="24px"
            viewBox="0 0 20 20"
          >
            <path
              d="M15.173 2H4c-1.101 0-2 .9-2 2v12c0 1.1.899 2 2 2h12c1.101 0 2-.9 2-2V5.127L15.173 2zM14 8c0 .549-.45 1-1 1H7c-.55 0-1-.451-1-1V3h8v5zm-1-4h-2v4h2V4z"
              fill="currentColor"
            />
          </svg>
          Guardar
        </button>
        <button type="button" className="btn btn-outlined-secondary ">
          <svg
            aria-hidden="true"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"
              fill="currentColor"
            />
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"
              fill="currentColor"
            />
          </svg>
          Imprimir
        </button>
      </div>
    </>
  )
}

export default Personal
