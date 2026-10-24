
export const funcaoEscrever = async (page, locator, texto) => {
    await page.locator(locator).fill(texto);
};

export const selecionarOpcao = async (page, valor) => {
    await page.selectOption('select:visible', { value: valor });
}

export const selecionarCheck = async (page, locator) => {
    await page.setChecked('//input[@value="' + locator + '"]', true);
}

export const clicarElemento = async (page, locator) => {
    await page.locator(locator).click();
}

export const retornarMensagem = async (page, locator) => {
    return await page.locator(locator).textContent();
}

export const fecharPagina = async (page) => {
    await page.close();
}

export const pausarPagina = async(page)=>{
    await page.pause();
}