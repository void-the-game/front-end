import CustomButton from '../../Buttons/CustomButton'
import styles from './MenuInicio.module.scss'
import { useContext } from 'react'
import { AbTestContext } from '../../../contexts/AbTestContext'

function MenuInicio() {
  const variant = useContext(AbTestContext)?.variant

  const handleClick = () => {
    if (variant) {
      window.gtag &&
        window.gtag('event', 'click', {
          test_name: 'menu_variant',
          variant,
        })
    }
  }

  return (
    <div className={styles['menu-inicio']}>
      <div className={styles.blurback}></div>
      <div className={styles['container-blur2']}>
        <div className={styles.blurback2}></div>
        <div className={styles['borda-menu-div']}>
          <CustomButton onClick={handleClick}>JOGAR</CustomButton>
        </div>

        <CustomButton>SALAS</CustomButton>
      </div>
    </div>
  )
}

export default MenuInicio
