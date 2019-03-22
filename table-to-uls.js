/**
 * Get table and extract textContents into 2D array
 * 
 * Table rows will have a checkbox in the first cell. Get all
 * rows that have the box checked. Cells will either contain
 * text or an input element, so get either its textContent
 * or the value of the input element inside the cell
 * 
 * @param {HTMLElement} table HTML table from document
 * @return {Array} array of arrays with content extracted from table cells
 */
const tableTo2dArray = function(table) {
    const rows = Array.from(table.querySelectorAll('tr'))
        .filter(row => row.querySelector(':checked'));

    const arr = [];

    rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td')).splice(1);

        arr.push(
            cells.map(cell => {
                return cell.textContent || cell.querySelector('input').value;
            })
        );
    });

    return arr;
};
