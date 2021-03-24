import React from "react";
import { Subtitle } from "../../global/styles";
import { ListItem, StackList } from "../AboutMe/styles";
import KnowledgesContent from "./KnowledgesContent/KnowledgesContent";
import { Wrapper, Content } from "./styles";

const Knowledges = () => {
    const frontEndKnowledges = [
        "Desenvolvimento de aplicações Web em HTML, CSS e Javascript",
        "Componentização e manipulação de estado com ReactJS",
        "Integrações com API's REST",
        "Layouts responsivos e bibliotecas de estilização como Styled-components e Material-UI"
    ];

    const backEndKnowledges = [
        "Desenvolvimento de API's RESTful utilizando Node.js e Typescript",
        "Testes unitários e automatizados com Jest",
        "Banco de dados MySQL",
        "Familiaridade com Firebase"
    ];

    const generalKnowledges = [
        "AWS e EC2",
        "Metodologias Ágeis",
        "Clean Code",
    ];

    return (
        <Wrapper>
            <Subtitle>Conhecimentos</Subtitle>
            <Content>
                <KnowledgesContent
                    title={"Front-end"} 
                    knowledges={frontEndKnowledges}
                />
                <KnowledgesContent 
                    title={"Back-end"}
                    knowledges={backEndKnowledges}
                />
            </Content>
            <div>
                <Subtitle>Gerais</Subtitle>
                <StackList>
                    {generalKnowledges.map((item, index) => {
                        return (
                            <ListItem key={index}>{item}</ListItem>
                        )
                    })}
                </StackList>
            </div>
            
        </Wrapper>
    );
}

export default Knowledges;