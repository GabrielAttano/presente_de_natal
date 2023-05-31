import * as S from './styled'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
function Gifts() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Você precisa estar logado para acessar o presente!')
      navigate('/')
    }
  }, [])

  return (
    <S.body>
      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_title>
            Você conseguiu! 
          </S.bodySection_title>
        </S.bodySection_containerBig>
      </S.bodySection>
      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_text>
            Originalmente o presente da minha namorada ficava aqui. Como você deve imaginar, alterei a página para manter 
            nossa privacidade. Então, imagine que tinha algo bem legal!
          </S.bodySection_text>
        </S.bodySection_containerBig>
      </S.bodySection>
      <S.bodySection>
        <S.bodySection_containerBig>
          <S.bodySection_text>
            <b>Obrigado pela visita!</b> se você gostou, que tal procurar outros projetos no meu <a href='https://github.com/GabrielAttano/'>Github</a>? Você também pode 
            entrar em contato comigo (o Eu de verdade, não a versão que você conversou na hora de criar conta) pelo <a href='https://www.linkedin.com/in/gabriel-alberto-de-sa/'>linkedin</a>!
          </S.bodySection_text>
        </S.bodySection_containerBig>
      </S.bodySection>      
    </S.body>
  )
}

export default Gifts