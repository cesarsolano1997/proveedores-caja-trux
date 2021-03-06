import React from 'react'
import TextBox from '../../../../ui/input/Textbox'

import styles from '../../registerProvider.module.css'

const TextStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 0px 0',
  bg: '#fff',
}

const SectionRepLegal = ({ repLegal, handleChange, errors }) => {
  const { Nombres, ApPaterno, ApMaterno, NIdent } = repLegal

  return (
    <section className={styles.form_card}>
      <div className={styles.form_title}>
        <p className={styles.section_title}>
          {' '}
          <svg height={20} viewBox="0 0 24 24" width={20} fill="#D5040A">
            <path d="M12.25 2h-1.1C10.82.85 9.76 0 8.5 0S6.18.85 5.85 2h-1.1c-.41 0-.75.34-.75.75v1.5C4 5.21 4.79 6 5.75 6h5.5C12.21 6 13 5.21 13 4.25v-1.5c0-.41-.34-.75-.75-.75z" />
            <path d="M14.25 3H14v1.25C14 5.77 12.77 7 11.25 7h-5.5C4.23 7 3 5.77 3 4.25V3h-.25C1.23 3 0 4.23 0 5.75v12.5C0 19.77 1.23 21 2.75 21h7.38l.22-1.23c.1-.56.36-1.06.76-1.47l.8-.8H3.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.05 0 .09 0 .14.02h.01l3.6-3.6V5.75C17 4.23 15.77 3 14.25 3zm-1 11.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zM12.527 24a.748.748 0 01-.738-.881l.53-3.005a.753.753 0 01.208-.4l7.425-7.424c.912-.914 1.808-.667 2.298-.177l1.237 1.237a1.75 1.75 0 010 2.475l-7.425 7.425a.739.739 0 01-.4.208l-3.005.53a.715.715 0 01-.13.012zm3.005-1.28h.01z" />
          </svg>
          &nbsp;Datos del Representante legal
        </p>
      </div>
      <div className={styles.form_content}>
        <div className={styles.form_subsection}>
          <div className={styles.form_row}>
            <TextBox
              type="text"
              placeHolder="Nombres"
              name={'RepLegal.Nombres'}
              value={Nombres}
              onChange={handleChange}
              helperText={errors && errors.Nombres}
              width={TextStyles.width}
              height={TextStyles.height}
              margin={TextStyles.margin}
              bg={TextStyles.bg}
            />
            <TextBox
              type="text"
              placeHolder="Apellido Paterno"
              name={'RepLegal.ApPaterno'}
              value={ApPaterno}
              onChange={handleChange}
              helperText={errors && errors.ApPaterno}
              width={TextStyles.width}
              height={TextStyles.height}
              margin={TextStyles.margin}
              bg={TextStyles.bg}
            />
          </div>
          <div className={styles.form_row}>
            <TextBox
              type="text"
              placeHolder="Apellido Materno"
              name={'RepLegal.ApMaterno'}
              value={ApMaterno}
              onChange={handleChange}
              helperText={errors && errors.ApMaterno}
              width={TextStyles.width}
              height={TextStyles.height}
              margin={TextStyles.margin}
              bg={TextStyles.bg}
            />
            <TextBox
              type="text"
              placeHolder="N?? Identificaci??n"
              name={'RepLegal.NIdent'}
              value={NIdent}
              onChange={handleChange}
              helperText={errors && errors.NIdent}
              width={TextStyles.width}
              height={TextStyles.height}
              margin={TextStyles.margin}
              bg={TextStyles.bg}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionRepLegal
