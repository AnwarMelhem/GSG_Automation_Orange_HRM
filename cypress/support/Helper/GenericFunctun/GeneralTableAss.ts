class Common_Table_Fun {

    checkRows(rowSelector: string, args: {}[]) {
      const headers: string[] = [];
      cy.get(rowSelector)
        .eq(0)
        .children()
        .each(($cell) => {
          const cellStr: string = $cell
            .text()
            .replace(/AscendingDescending|Actions/g, "")
            .trim();
          if (cellStr) headers.push(cellStr);
        });
        console.log(headers)
  
      args.forEach((rowData: any, rowInd=0) => {
        cy.get(rowSelector)
          .eq(++rowInd)
          .children()
          .then((cellsOfRow) => {
            for (let i = 0; i < headers.length; i++) {
              cy.wrap(cellsOfRow)
                .eq(i + 1)
                .should("contain", rowData[headers[i]])
              
            }
          });
      });
    }
  
}

export default Common_Table_Fun;