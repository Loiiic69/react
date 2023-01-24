export function Depense(props) {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.article}</td>
            <td>{props.prix} €</td>
        </tr>
    );
}