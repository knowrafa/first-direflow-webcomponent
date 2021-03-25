/**
 * This is the entry file of the Direflow setup.
 *
 * You can add any additional functionality here.
 * For example, this is a good place to hook into your
 * Web Component once it's mounted on the DOM.
 *
 * !This file cannot be removed.
 * It can be left blank if not needed.
 */

import ArquivoIndexadoList from 'components/ArquivoIndexadoList'
import UsuarioList from 'components/UsuarioList'
import EstabelecimentoList from 'components/EstabelecimentoList'


ArquivoIndexadoList.then((element) => {
  console.log("Arquivo Indexado!", element)
});

EstabelecimentoList.then((element) => {
  console.log("Estabelecimento", element)
});


UsuarioList.then((element) => {
  console.log("Estabelecimento", element)
});