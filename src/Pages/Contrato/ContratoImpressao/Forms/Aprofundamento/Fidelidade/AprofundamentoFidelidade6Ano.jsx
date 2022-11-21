import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const AprofundamentoFidelidade6Ano = () => {

  return (
    <div>


      <p>Cláusula 1ª - O objeto deste contrato é a prestação de serviços educacionais pela CONTRATADA,
        ao educando indicado pelo CONTRATANTE, durante o ano de 2023, de acordo com o Plano Escolar
        apresentado pela ESCOLA DOS SONHOS visando implementar um projeto político pedagógico
        durante o ano letivo contratado, definir contraprestação pecuniária e a forma de pagamento por
        parte do CONTRATANTE e estabelecer os demais dispositivos complementares.
      </p>
      <p>§ 1º - A CONTRATADA tem sua proposta e princípio educacional orientada com base numa
        concepção multireferencialista sustentada pelos pilares da educação ambiental, arte e cidadania,
        conforme consta no Plano Escolar 2023.

      </p>
      <p>Cláusula 2ª - O CONTRATANTE declara estar ciente e de acordo que, para o ano letivo de 2023, à
        vista do que dispõe a Lei 11.274, de 6 de fevereiro de 2006, o Parecer CNE/CEB 6/2005, e a Resolução
        nº 2/2006 do CEDF, o beneficiário do presente contrato, cursará, no ano letivo de 2023 a Educação
        Infantil ou o Ensino Fundamental de nove anos, prosseguindo até o final, neste regime, em suas
        futuras promoções.
      </p>
      <p>Cláusula 3ª - A CONTRATADA assegura ao CONTRATANTE uma vaga no seu corpo discente, a ser
        utilizada conforme especificado na ficha de matrícula, que passa a fazer parte integrante do presente
        contrato, ministrando a educação através de projetos de pesquisa e demais atividades escolares cujo
        planejamento pedagógico atenda ao disposto na legislação em vigor.
      </p>
      <p>§ 1º - As atividades escolares serão realizadas nas dependências da Escola dos Sonhos ou locais que
        a CONTRATADA indicar, tendo em vista a natureza dos projetos e as técnicas pedagógicas que se
        fizerem necessárias.
      </p>
      <p>§ 2o. – O CONTRATANTE declara, neste ato, que conheceu previamente as instalações físicas do
        estabelecimento, bem como a proposta pedagógica desenvolvida pela CONTRATADA.
      </p>
      <p>§ 3º - Reserva-se a CONTRATADA, até 30 (trinta) dias antes do início das aulas, conforme calendário
        escolar, o direito de cancelar qualquer turma cujo número de estudantes seja inferior a 09 (nove).
      </p>
      <p>§ 4º - A prestação dos serviços educacionais, objeto deste contrato, tem seu início na data da
        assinatura do mesmo e seu término no último dia letivo previsto no calendário escolar.
      </p>
      <p>§ 5º - É de exclusiva competência e responsabilidade da CONTRATADA a orientação técnica e
        pedagógica decorrente da prestação de serviços educacionais.
      </p>
      <p>Cláusula 4ª - É de exclusiva responsabilidade do CONTRATANTE a aquisição do material escolar
        individual, necessário ao acompanhamento das atividades educacionais pelo educando, cuja lista
        será disponibilizada aos responsáveis durante a rematrícula/matrícula ou antes do início do ano
        letivo. A CONTRATADA fica desde já autorizada, a fornecer os materiais que não forem entregues pelo
        CONTRATANTE, cujas cobranças se farão quando da entrega dos mesmos ao educando, assumindo
        o CONTRATANTE a inteira responsabilidade por qualquer fato que venha a prejudicar o educando
        pelo descumprimento da obrigação.
      </p>
      <p>§ 1º - O encargo dos projetos, corresponde aos custos relacionados aos projetos desenvolvidos pelo
        estudante durante o ano letivo, desde equipamentos, materiais específicos e necessários para a
        realização dele, vivências, oficinas, participação de especialistas no tema etc. Não estão dispostos
        nesse custo as saídas de campo, aulas passeio e alimentação relacionadas a este dia.
      </p>
      <p>Cláusula 5ª - O transporte escolar diário é de inteira responsabilidade dos pais, devendo ser
        respeitado os horários de entrada e saída da escola. São de responsabilidade dos pais os combinados
        ou acerto de caronas, bem como mudança de programação em relação ao transporte escolar.
        Solicitamos aos pais que agendem seus transportes diretamente com os responsáveis pelo transporte
        escolar ou com as caronas de terceiros, para evitarmos falhas de comunicação ou desencontros. A
        responsabilidade da escola limita-se a entregar seus educandos às pessoas autorizadas pelos pais e
        responsáveis registrados na ficha de matrícula. Caso haja alguma alteração na rotina do transporte,
        esta deverá ser comunicada com antecedência via e-mail ou WhatsApp, sendo necessário ainda avisar
        a secretaria pelo telefone.
      </p>
      <p>§ 1º - Os custos de transporte das aulas-passeio serão divididos pelo número de estudantes
        participantes do grupo.

      </p>
      <p>§ 2º - Nos dias agendados para aula-passeio não haverá atividade em sala, pois os orientadores
        estarão acompanhando o grupo nesta saída de campo.
      </p>
      <p>Cláusula 6ª – O CONTRATANTE responsabiliza-se em informar a ESCOLA DOS SONHOS parte
        CONTRATADA por escrito, acerca de qualquer IMPEDIMENTO de qualquer natureza, para a prática
        de atividades físicas dentro e fora do estabelecimento escolar e suas dependências, quando o aluno
        não apresentar condições para qualquer atividade.

      </p>
      <p>Cláusula 7ª - A contraprestação pelos serviços a serem prestados referentes ao período letivo de
        2023 de acordo com o curso e ano/série identificado no quadro de informações bem como previsto
        taxativamente na cláusula 2ª, será a anuidade de: </p>


      <table className="contrato-table-dados-valores">
        <tr>
          <td><b>CURSO <br />NÚCLEO DE APROFUNDAMENTO</b></td>
          <td>VALOR ANUIDADE REMATRÍCULA</td>
        </tr>
        <tr>
          <td>ANUIDADE MEIO PERÍODO (matutino) </td>
          <td>R$ 19.712,03</td>
        </tr>
        <tr>
          <td colspan="2">A anuidade e a forma de pagamento da contraprestação será explicitada no Anexo 01</td>
        </tr>
      </table>


      <p>§ 1º - O valor da contraprestação acima pactuado poderá ser reajustado quando expressamente
        permitido por lei, bem como para preservar o equilíbrio contratual, caso qualquer mudança legislativa
        ou normativa altere a equação econômico-financeira do presente instrumento.
      </p>
      <p>§ 2º - As oficinas de matemática e português no contraturno são obrigatórias e fazem parte do
        currículo. Os estudantes que optarem por permanecer na escola após as aulas da manhã para
        participar das oficinas e/ou do laboratório de estudos, poderão almoçar na escola. O almoço não está
        incluso na anuidade, este deverá ser pago diretamente na cantina da escola. Lembrando que não
        será permitido trazer almoço de casa.
      </p>
      <p>Cláusula 8ª - A anuidade poderá ser paga à vista ou parcelada e o vencimento será sempre no dia
        05 de cada mês, conforme a tabela anexa com as informações da matrícula 2023.
      </p>
      <p>§ 1º- Fica estabelecido que, caso o CONTRATANTE desista da rematrícula ou matrícula antes do início
        do ano letivo, este deverá pagar uma multa de 15% sobre a anuidade por retenção de vaga.

      </p>
      <p>§ 2º - A CONTRATADA, por liberalidade, poderá oferecer condições especiais de pagamento sem que
        isso implique em modificação contratual, conforme o vencimento das parcelas, já estipulado no caput
        deste artigo.
      </p>
      <p>§ 3º - Qualquer desconto, abatimentos ou redução eventualmente concedidos, bem como as
        prorrogações de vencimento das parcelas objeto deste contrato, constituem mera liberalidade por
        parte da CONTRATADA, não caracterizando novação ou gerando direitos ao CONTRATANTE, podendo
        ser suprimidos a qualquer tempo, sobretudo nas seguintes condições: não pagamento em dia pelo
        responsável e por alteração da situação patrimonial ou renda do CONTRATANTE.
      </p>
      <p>§ 4º - Outras formas de pagamento do valor da anuidade poderão ser objeto de acerto entre as partes,
        inclusive para atender os casos de rematrícula a destempo.
      </p>
      <p>§ 5° - A primeira parcela da anuidade tem caráter de sinal, arras e princípio de pagamento, razão
        pela qual não será devolvida, no todo ou em parte no caso de desistência por parte do CONTRATANTE,
        sendo imprescindível sua quitação para celebração e concretização do presente contrato.
      </p>
      <p>§ 6º - A não frequência à escola e /ou a não participação nas atividades escolares, sem a devida
        comunicação, não desobriga o CONTRATANTE do pagamento das parcelas contratadas.

      </p>
      <p>§ 7º - A rematrícula realizada a partir de março, caso ainda tenha vaga, pagará o mesmo valor da
        anuidade.
      </p>
      <p>§ 8º - O deferimento de matrícula é um ato da ESCOLA DOS SONHOS condicionado a existência de
        vaga, condições de habilitação e capacitação do aluno, recebimento da documentação escolar e no
        Serviço de Proteção ao Crédito.
      </p>
      <p>§ 9º - O planejamento, a prestação de serviços educacionais, a definição das datas e período de
        avaliação, fixação de carga horária, designação de professores, e a orientação didático pedagógica e
        educacional, além de outras providencias que as atividades docentes exigirem, inserem-se na
        responsabilidade única e exclusiva da ESCOLA DOS SONHOS, vedada qualquer ingerência do
        CONTRATANTE.
      </p>
      <p>Cláusula 9ª - Reserva-se a CONTRATADA em seu direito de prestar serviços de educação, de acordo
        com sua proposta pedagógica, recursos materiais e humanos, às pessoas com necessidades especiais,
        de acordo com a natureza e grau dessa necessidade, ressaltando o princípio educacional orientado
        com base numa concepção multireferencialista sustentada pelos pilares da educação ambiental, arte
        e cidadania.
      </p>
      <p>§ 1º - A contratada tem o direito e o dever de avaliar seus estudantes em todos os seus aspectos, e
        caso o estudante apresente qualquer intercorrência de seu estado físico, emocional, social, psicológico
        e/ou aspecto cognitivo no decorrer do ano letivo, a família e responsáveis serão comunicados,
        devendo obrigatoriamente procurar assistência especializadas no prazo de até 30 dias e manter
        acompanhamento obrigatório.
      </p>
      <p>§ 2º - O CONTRATANTE deverá dar encaminhamento às solicitações de relatórios e diagnósticos de
        especialistas quando a CONTRATADA informar necessário, diante das observações e registros
        realizados pela escola a respeito do estado físico, emocional, social, psicológico e/ou aspecto cognitivo
        do estudante. O não cumprimento das solicitações por parte da CONTRATANTE implicará em acionar
        o Conselho Tutelar ou mesmo rescisão contratual.
      </p>
      <p>§ 3º - Em vistas de preservar a saúde do menor/estudante, será obrigatório como condicional a
        matrícula, apresentação de atestado médico de saúde assegurando que o estudante está apto a fazer
        todas as atividades escolares.
      </p>
      <p>§ 4º - A não apresentação de atestado médico de saúde implicará na rescisão contratual, sendo que
        a CONTRATANTE ora escola ESCOLA DOS SONHOS sempre se pautará na proteção da criança e
        adolescente, principalmente na sua saúde.
      </p>
      <p>§ 5º - Consubstanciado no § 3º retro, os estudantes com deficiências, ou qualquer outra necessidade
        especial além de qualquer comorbidade, deverá por seus genitores ou responsáveis legais apresentar
        atestado médico obrigatoriamente como condicional ao endosso e aceitação da respectiva matrícula
        pela ora CONTRATADA ESCOLA DOS SONHOS, bem como os contatos e relatórios dos médicos e/ou
        equipe multidisciplinar que atendem o estudante.
        Parágrafo único - A obrigação do CONTRATANTE acima prevista se dá, inclusive, em relação à
        deficiência ocorrida ou constatada (preexistente oculta) após a celebração do presente contrato.
        Cláusula 10ª - O CONTRATANTE declara que teve conhecimento prévio das condições financeiras
        deste contrato que foi exposto em local de fácil acesso e visualização (art. 2º da Lei nº 9.870/99),
        conhecendo-as e aceitando-as livremente.
        Cláusula 11ª - Os pagamentos das parcelas deverão ser efetuados até o dia 05 de cada mês, em
        qualquer agência bancária, casas lotéricas ou pela internet.

      </p>
      <p>§ 1º - O pagamento efetuado após a data de vencimento será acrescido de multa no percentual de
        2% (dois por cento) sobre o valor da prestação em atraso, mais correção monetária e juros moratórios
        de 1% ao mês até o efetivo pagamento.
      </p>
      <p>§ 2º - Poderá a CONTRATADA, para a cobrança de seu crédito, fazer inscrever o nome do
        CONTRATANTE em bancos de dados cadastrais (SPC/DPC) ou valer-se de firma especializada, sendo
        que neste caso o CONTRATANTE inadimplente responderá, também, por honorários relativos à esta
        dívida, com iguais direitos ao CONTRATANTE frente às obrigações não cumpridas pela
        CONTRATADA.

      </p>
      <p>§ 3º - O pagamento das obrigações financeiras do CONTRATANTE comprovar-se-á mediante
        apresentação do recibo, comprovante bancário ou carnê que individualize a obrigação quitada.
      </p>
      <p>§ 4º - A CONTRATADA poderá valer-se do contrato, apurada a inadimplência do CONTRATANTE e
        a efetiva prestação do serviço pela CONTRATADA, para emitir e, se for o caso, protestar duplicatas e
        letras de câmbio de prestação de serviços, tudo em conformidade com a legislação vigente.
      </p>
      <p>§ 5º - As despesas escolares que englobam os custos extras como alimentação, eventos, aula passeio,
        uniforme, etc, devem ser pagas à vista. Caso isso não ocorra o CONTRATANTE tem 05 dias para fazer
        o pagamento no financeiro da escola e após esta data será cobrado o valor com acréscimo de multa
        de 10%.
      </p>
      <p>§ 6º - Em caso de inadimplência, o CONTRATANTE perderá todo e qualquer desconto do qual seja
        eventualmente beneficiário.
      </p>
      <p>§ 7º - A ESCOLA DOS SONHOS como parte CONTRATADA neste contrato, no caso de pagamento a
        menor, ou inadimplemento, mesmo que de maneira cumulada, reserva-se no direito, sem prejuízos
        dos acréscimos da mora, o direito de optar:
      </p>
      <p>I. Pela suspensão da prestação de serviços, nos termos da Lei n. 9.870/99, artigo 6º, § 3 e artigo
        476 do Código Civil;
      </p>
      <p>II. Pela rescisão contratual, independentemente da exigibilidade do débito vencido e daquelas
        que vencerem enquanto perdurar a prestação dos serviços;
      </p>
      <p>III. Pela negativa de nova matrícula ao final do ano letivo, independe da exigibilidade do débito
        vencido e do débito devido nos meses de prestação do serviço, resguardado o direito de
        cobrança a posteriori;
      </p>
      <p>IV. Pela emissão de duplicata de prestação de serviço, constituindo-se o contrato e o comprovante
        do documento da obrigação (controle de frequência etc.) documentos hábeis a instruir o
        protesto do título.
      </p>
      <p>Cláusula 12ª - Os valores da contraprestação acima pactuada satisfazem, exclusivamente, a
        prestação de serviços decorrentes da carga horária constante da proposta curricular da
        CONTRATADA e de seu calendário escolar.
      </p>
      <p>§ 1º - Este contrato não inclui o fornecimento de livros didáticos, apostilas, cursos paralelos e outros
        serviços facultativos ou similares.
      </p>
      <p>§ 2º - Os serviços extraordinários efetivamente prestados ao aluno, dos quais citamos,
        exemplificativamente: segunda via de boletins de notas, segunda via de histórico escolar, segunda
        via de documento de conclusão, segunda via de transferência, bem como segunda via de ficha de
        matricula, contrato e plano escolar, serão cobrados à parte. O CONTRATANTE declara que teve
        conhecimento dos valores cobrados por estes serviços extraordinários, conforme tabela que está à
        disposição no financeiro da escola.
      </p>
      <p>Cláusula 13ª - O presente instrumento poderá ser rescindido por iniciativa do CONTRATANTE
        (configurando cancelamento da matrícula e transferência do aluno, quando for o caso) mediante
        requerimento expresso de desistência protocolado junto ao financeiro da CONTRATADA, com
        antecedência de 30 (trinta) dias uteis.
      </p>
      <p>§ 1º - Para a efetivação da rescisão de que trata esta cláusula, o CONTRATANTE deverá estar quite
        com suas obrigações financeiras até o mês da rescisão.
      </p>
      <p>§ 2º - No caso das hipóteses anteriores fica o CONTRATANTE obrigado a pagar o valor da parcela no
        mês em que ocorrer o evento de saída do estudante e multa compensatória por quebra de contrato,
        conforme prescrevem os artigos 408 e 412 da Lei 10.406/02 e artigo 408 do Código Civil, no valor
        equivalente a 20% do valor total das parcelas vincendas referente à anuidade, além de outros débitos
        eventualmente existentes exemplificados como lanches, uniforme, passeios, corrigidos conforme
        consta na Cláusula 11ª, parágrafo 1º.
      </p>
      <p>§ 3º - No caso da desistência do educando cuja anuidade foi paga de forma integral no início do ano
        letivo, fica assegurado o reembolso dos meses não cursados de forma parcelada nas datas dos
        vencimentos das futuras mensalidades, descontando as eventuais reduções do valor por promoção
        ou alguma outra liberalidade da contratada nos meses já cursados. Neste caso devem-se respeitar as
        condições de pagamento de 1/13 avos do valor da anuidade integral por quebra de contrato.
      </p>
      <p>Cláusula 14ª - Ao firmar o presente contrato o CONTRATANTE declara que tem total e prévio
        conhecimento da proposta pedagógica e das instruções específicas que lhe foram apresentadas e que
        passam a fazer parte integrante do presente contrato, submetendo-se às suas disposições, bem como
        das demais obrigações decorrentes da legislação aplicável à área de ensino. Independentemente do
        acima declarado, a proposta curricular, pedagógica e demais instruções estarão à disposição do
        CONTRATANTE para consulta na secretaria da escola, no endereço da CONTRATADA.
      </p>
      <p>§ 1º - Obriga-se o CONTRATANTE a fazer com que o educando cumpra o calendário escolar e horários
        estabelecidos pela CONTRATADA, assumindo total responsabilidade pelos problemas advindos da
        não observância destes.
      </p>
      <p>§ 2º - O CONTRATANTE declara estar ciente da facultatividade do uso do uniforme escolar por parte
        do estudante, que somente poderá ser adquirido no financeiro da escola ou sob encomenda com o
        fornecedor. Somente será obrigatório o uso da camiseta nos passeios da escola para identificação e
        segurança.
      </p>
      <p>§ 3º - O não comparecimento do educando aos atos escolares ora contratados não o exime do
        pagamento, tendo em vista a disponibilidade do serviço colocado ao CONTRATANTE.
      </p>
      <p>§ 4º - O CONTRATANTE responsabiliza-se expressamente por todo e qualquer dano causado pelo
        aluno ao patrimônio da ESCOLA DOS SONHOS ou de terceiros, no âmbito da área e das atividades
        escolares, uma vez constatadas as responsabilidades, indenizando a ESCOLA DOS SONHOS,
        independentemente das sanções disciplinares previstas na legislação adjetiva do Código Cível.
      </p>
      <p>§ 5º - Na ocorrência de evento danoso praticado pelo aluno e recaindo a responsabilidade pelo
        ressarcimento a ESCOLA DOS SONHOS, esta poderá exercer o direito de regresso em desfavor do
        CONTRATANTE até o limite do que tiver reembolsado, acrescido de perdas e danos e demais gastos
        que tenham sido necessários.
      </p>
      <p>§ 6º - O CONTRATANTE pais e responsáveis do aluno/educando se responsabilizam expressamente
        por qualquer bem de valor levado à escola pelo aluno/educando cite-se aparelhos de celular, tablets,
        ipods, computadores notebooks, dinheiro, relógios ou qualquer outro não solicitado expressamente
        e antecipadamente pela ESCOLA DOS SONHOS ora CONTRATADA nas dependências da mesma,
        inclusive de seus prepostos ou acompanhantes.
      </p>
      <p>§ 7º - Considerando que a CONTRATADA ESCOLA DOS SONHOS, fornece estacionamento gratuito
        sem qualquer tipo de cobrança aos seus usuários, esta não se responsabilizará pelos possíveis e
        hipotéticos danos causados nos veículos estacionados em suas dependências.
      </p>
      <p>§ 8º - O CONTRATANTE tem o dever legal e obrigatório de informar expressamente, por escrito, no
        momento da matrícula, qualquer incapacidade do aluno/educando acerca de qualquer problema de
        saúde sendo problemas alimentares, alérgicos e respiratórios devendo para tanto, apresentar
        atestados médicos que deverão ser protocolados junto à secretaria da CONTRATADA ESCOLA DOS
        SONHOS.
      </p>
      <p>Cláusula 15ª - O CONTRATANTE assume total responsabilidade quanto às declarações prestadas
        neste contrato e no ato de matrícula, relativas à aptidão legal do educando para a frequência na
        série/ano e graus indicados, quando for o caso, concordando, desde já, que a não entrega dos
        documentos legais comprobatórios das declarações prestadas, até 30 (trinta) dias contados do início
        do ano letivo, acarretará o automático cancelamento da vaga aberta ao aluno, rescindindo-se o
        presente contrato, encerrando-se a prestação de serviços e isentando a CONTRATADA de qualquer
        responsabilidade pelos eventuais danos resultantes.
      </p>
      <p>Cláusula 16ª - A CONTRATADA não estará obrigada a renovar a matrícula do beneficiário do
        CONTRATANTE, para o período letivo posterior, caso este não tenha cumprido rigorosamente as
        cláusulas do presente contrato.
      </p>
      <p>Cláusula 17ª - A CONTRATADA somente se responsabiliza pelos educandos nas dependências da
        escola dentro do horário letivo do turno matutino, vespertino ou integral, conforme matrícula. Se por
        algum motivo excepcional os responsáveis pelo estudante atrasarem, este terá que permanecer e
        aguardar o responsável na secretaria da escola. Havendo situações de atraso recorrentes, a escola
        cobrará uma multa e tomará as devidas providências.
      </p>
      <p>Cláusula 18ª - O CONTRATANTE declara estar ciente que ficam proibidos para o consumo os
        seguintes alimentos: bolo e bolachas com cobertura ou recheio, frituras, balas, pirulitos, chicletes,
        refrigerantes, salgadinhos fritos, salgadinhos tipo “Elma Chips” ou qualquer guloseima deste gênero,
        conforme a LEI/PMF n. 5853, de 04 de junho de 2001.
      </p>
      <p>§ 1º - Para o Ensino Fundamental o lanche é individual, seja ele trazido de casa ou comprado na
        cantina da escola.
      </p>
      <p>Cláusula 19ª - O educando que por eventualidade precisar de atendimento médico de emergência,
        será encaminhado para a Unidade de Pronto Atendimento a Emergências de Canasvieiras ou o
        Hospital Infantil Joana de Gusmão, e ao mesmo tempo será feito contato com o CONTRATANTE para
        informar o ocorrido, o local de encaminhamento e providenciar o encontro dos pais e/ou responsáveis
        com a criança.
      </p>
      <p>§ 1º - Caso não se consiga contato com o CONTRATANTE pelos telefones fornecidos na ficha de
        matrícula do educando, a escola continuará o procedimento padrão de atendimento à emergência de
        acordo com o Art. 98º do Estatuto da Criança e do Adolescente.
      </p>
      <p>§ 2º - A CONTRATADA somente se responsabiliza pelos educandos a partir do momento em que estes
        tenham sido entregues pelo CONTRATANTE a seus respectivos professores e salas de aula da
        CONTRATADA no horário escolar. Essa responsabilidade se encerra no momento que é devolvida a
        guarda ao CONTRATANTE ou seu responsável constante na ficha de matrícula, em conformidade
        com Cláusula 5ª. Não nos responsabilizamos após o término da aula pelos estudantes autorizados
        pelos responsáveis a saírem sozinhos da escola.
      </p>
      <p>Cláusula 20ª - As partes comprometem-se a comunicar, reciprocamente, por escrito e mediante
        comprovante, qualquer mudança de endereço e/ou telefone, sob pena de serem consideradas válidas
        as correspondências enviadas aos endereços constantes do presente instrumento, inclusive para os
        efeitos da citação judicial.
      </p>
      <p>Cláusula 21ª - O CONTRATANTE obriga-se a comunicar expressamente à CONTRATADA, no ato da
        matricula, a existência e o teor de decisões judiciais sobre o regime de guarda do beneficiário, mesmo
        em caso de guarda unilateral ou compartilhada nos termos da lei, não se responsabilizando a
        CONTRATADA por quaisquer fatos que resultem da não observância da presente cláusula. Caso
        ocorra mudança no decorrer da vigência do presente contrato o CONTRATANTE obriga–se a informar
        a escola no prazo de 05 (cinco) dias úteis da decisão homologatória.
      </p>
      <p>Cláusula 22ª - A CONTRATADA será indenizada pelo CONTRATANTE por qualquer dano ou prejuízo
        que este ou o discente, preposto ou acompanhante de qualquer um deles, venha a causar nos
        edifícios, instalações, mobiliários ou equipamentos da CONTRATADA.
      </p>
      <p>Cláusula 23ª - O presente contrato vigorará no ano de 2023 e seguintes se renovado for, e poderá
        ser rescindido pela ESCOLA DOS SONHOS nas seguintes hipóteses:
      </p>
      <p>I. Quando constatado que o educando/aluno violou a lei ou as regras internas da ESCOLA DOS
        SONHOS e inviabilizou a convivência no âmbito da escola, desrespeitando os princípios de
        comportamento e conduta éticos morais e disciplinares, oportunidade em que será assegurado
        ao mesmo direito à ampla defesa;
      </p>
      <p>II. Por desarmonia entre as partes, prejudicial ao aluno, ao processo educacional ou ao bom
        entendimento da escola e CONTRATADO (artigo 1° e 5° da Lei n. 9.870/99); e,
      </p>
      <p>III. Devido à inadimplência, conforme cláusula especifica deste contrato e Lei n. 9.870/99, artigo
        6°, § 3° do Código Civil Brasileiro.
      </p>
      <p>Cláusula 24ª - A CONTRATADA, livre de quaisquer ônus para com o CONTRATANTE, poderá utilizarse da imagem do educando beneficiário para fins exclusivos de divulgação da escola e suas atividades,
        podendo, para tanto, reproduzi-la e/ou divulgá-la na internet, jornais, mídia e em todos os meios de
        comunicação públicos ou privados, desde que relacionado ao âmbito escolar e sendo que, em
        nenhuma hipótese, poderá ser utilizada de maneira contrária à moral ou aos bons costumes.
      </p>
      <p>Cláusula 25ª - As partes contratantes atribuem ao presente contrato plena eficácia e força executiva
        judicial nos termos do artigo 784 do Código de Processo Civil. Este contrato abrange todas as normas
        da Escola dos Sonhos 2023.
      </p>
      <p>Fica eleito o foro de Florianópolis, para dirimir as dúvidas que o presente contrato possa
        suscitar.
      </p>
      <p>E por estarem às partes de acordo com todos os termos e condições do presente
        instrumentos, assinam o presente contrato, em duas vias de igual teor e forma, juntamente com
        duas testemunhas, para que produza seus jurídicos efeitos. </p>



    </div>
  );

};

export default AprofundamentoFidelidade6Ano;