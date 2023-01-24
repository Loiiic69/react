export function Prevision(props) {
    return (
        <tr>
            <td>{props.prevision.date}</td>
            <td>{props.prevision.temperature}</td>
            <td>{props.prevision.meteo}</td>
        </tr>
    );
}