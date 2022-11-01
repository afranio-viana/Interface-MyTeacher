import { CabecalhoContainer, Logo } from "./Header.style";

const Cabecalho =()=>{
    return(
        <CabecalhoContainer>
            <div>
                <Logo src="/images/myteacher.png"/>
            </div>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho; 