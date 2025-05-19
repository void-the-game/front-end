import CustomButton from '../../Buttons/CustomButton'
import styles from './MenuInicioVariant.module.scss'

function MenuInicioVariantB() {
  return (
    <div className={styles['menu-inicio']}>
      <div className={styles.blurback}></div>
      <div className={styles['container-blur2']}>
        <div className={styles.blurback2}></div>
        <div className={styles['borda-menu-div']}>
          <CustomButton>JOGAR</CustomButton>
        </div>

        <CustomButton>SALAS</CustomButton>
      </div>
    </div>
  )
}

export default MenuInicioVariantB
