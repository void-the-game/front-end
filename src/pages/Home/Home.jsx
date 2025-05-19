import Bolinhas from '../../components/bolinhas/Bolinhas'
import Titulo from '../../components/telaInicio/titulo/Titulo'
import MenuEntrar from '../../components/telaInicio/MenuEntrar/MenuEntrar'
import MenuInicio from '../../components/telaInicio/MenuInicio/MenuInicio'
import MenuInicioVariantB from '../../components/telaInicio/MenuInicioVariantB/MenuInicioVariantB'
import styles from './Home.module.scss'
import purpleAvatar from '../../components/img/purpleavatar.svg'
import configIcon from '../../components/img/configurationIcon.svg'
import CustomButton from '../../components/Buttons/CustomButton'
import { useContext, useEffect, useState } from 'react'
import { BsQuestionLg } from 'react-icons/bs'
import { AbTestContext } from '../../contexts/AbTestContext'

function Home() {
  const [user] = useState(localStorage.getItem('@Void:user') || null)

  const variant = useContext(AbTestContext)?.variant

  useEffect(() => {
    if (variant) {
      window.gtag &&
        window.gtag('event', 'page_view', {
          test_name: 'menu_variant',
          variant,
        })
    }
  }, [variant])

  return (
    <div className={styles.app}>
      <Bolinhas isColored={true} />
      <div className={styles['container-app']}>
        <div className={styles['container-titulo']}>
          <Titulo />
        </div>
        <div className={styles['container-menu-inicio']}>
          {variant === 'A' ? <MenuInicio /> : <MenuInicioVariantB />}
        </div>
        {!user ? (
          <div>
            <MenuEntrar />
          </div>
        ) : (
          <div className={styles['container-user-infos']}>
            <figure>
              <img src={purpleAvatar} alt="Avatar do usuário" />
              <figcaption>Avatar do usuário</figcaption>
            </figure>
            <span>{user}</span>
          </div>
        )}
      </div>

      <div className={styles['btnAjuda-div-left']}>
        <CustomButton terciary>
          <BsQuestionLg />
        </CustomButton>
      </div>

      {user && (
        <div className={styles['btnConfig-div']}>
          <img src={configIcon} alt="Icone de configuração" />
        </div>
      )}
    </div>
  )
}

export default Home
