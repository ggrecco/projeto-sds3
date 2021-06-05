import { SalePage } from "types/sale";

type Props = {
    page: SalePage
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {
    return (
        <div className="row d-flex">
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
            
            <div className="input-group justify-content-center">
                <select className="custom-select" id="inputGroupSelect04">
                    <option selected>TESTANDO...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>

        </div>
    )
}

export default Pagination;