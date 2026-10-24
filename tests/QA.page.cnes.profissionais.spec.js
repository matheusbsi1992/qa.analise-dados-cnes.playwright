import { test, expect } from '@playwright/test';

import * as dsl from '../tests/DSL/Core.js';

import * as XLSX from 'xlsx';

const localDeArquivo = '/opt/estudos/PlayWrightAutomacao/test-results/profissionais_hnsc_resultado_final.xlsx';

test('Identificacao de profissionais CNES', async ({ page }) => {

    await page.waitForLoadState('networkidle');

    await page.goto('https://cnes.datasus.gov.br/')

    await page.locator("#nomePesqEstab").fill('2421518');

    await page.locator(".variacao-module-01 button").click();

    const cnesHospital = await page.locator("#pesquisaValue").textContent();

    expect(await page.locator("//td[contains(., '2421518')]").textContent()).toContain(cnesHospital);

    await page.locator("//td//a[@title='Ficha estabelecimento']").click();

    await page.locator('.sidebar span:has-text("Profissionais")').click();

    await page.locator('.box-body').first().waitFor();

    const cnesRespectivo = await page.locator("//input[contains(@value,'2421518')]").textContent();
    await expect(cnesRespectivo).toBe(cnesHospital);

    //Identificar como atual
    await page.selectOption('select:visible', { value: "" });

    await page.waitForLoadState('networkidle');

    //Realizar um devido scollDown
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    //Identificar o botao de ul li respectivo a paginacao
    const booleanPaginacao = await page.locator(".pagination a:has-text('»')");
    expect(booleanPaginacao.isVisible()).toBeTruthy();

    const quantidadePaginacao = page.locator('.box-body li span');

    let numeroDePaginacao = (await quantidadePaginacao.allTextContents());

    numeroDePaginacao = numeroDePaginacao[numeroDePaginacao.length - 1];

    //await page.pause();

    const tabela = page.locator('table');

    // Cabeçalho
    const cabecalho = await tabela.locator('thead tr th').allTextContents();

    //console.log('Cabeçalho:', cabecalho);

    const todosDados = [];

    for (let index = 0; index < numeroDePaginacao; index++) {

        // Pega todas as linhas da página atual
        const linhas = tabela.locator('tbody tr');

        const quantidadeLinhas = await linhas.count();

        for (let i = 0; i < quantidadeLinhas; i++) {

            const colunas = linhas.nth(i).locator('td');
            //console.log('Colunas existentes', colunas);

            const valores = await colunas.allTextContents();
            //console.log("Valores inclusos", valores);

            todosDados.push(
                valores.map(valor => valor.trim().replace(/\s+/g, ' '))
            );
            //console.log("Valores de todos os dados", todosDados);
        }
        //await page.pause();
        // Próxima página
        await booleanPaginacao.click();

        // Aguarda a tabela atualizar
        await page.waitForLoadState('networkidle');
    }

    // Monta os dados finais
    const dadosExcel = [
        cabecalho.map(valor => valor.trim()),
        ...todosDados
    ];

    // Cria a planilha
    const worksheet = XLSX.utils.aoa_to_sheet(dadosExcel);

    // Cria o workbook
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        'Dados'
    );

    // Gera o arquivo
    XLSX.writeFile(workbook, localDeArquivo);
});